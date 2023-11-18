import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch user data based on userId from the server
    // Replace the URL and headers with your API endpoint and authentication logic
    fetch(`http://localhost:8000/user/${userId}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("jwttoken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let editedUser = { id, name, password, email };

    // Perform the edit operation on the server
    // After a successful edit, navigate back to the home page
    fetch(`http://localhost:8000/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem("jwttoken"),
      },
      body: JSON.stringify(editedUser),
    })
      .then(() => {
        toast.success("User edited successfully.");
        navigate("/");
      })
      .catch((error) => console.error("Error editing user:", error));
  };

  return (
    <div className="row" style={{ backgroundColor: '#F9EDD1', fontFamily: 'Arial, sans-serif', padding: '137px'}}>
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '35px' }}>
        <form className="container" onSubmit={handleEditSubmit} style={{ background: '#FFFFF0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="card">
            <div className="card-header" style={{ background: '#FAF0E6' }}>
              <h1 style={{ color: '#333', textAlign: 'center' }}>Edit User</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                      readOnly
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer" style={{ background: '#FAF0E6' }}>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
