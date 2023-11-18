import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Ambil username dari sessionStorage
        let username = sessionStorage.getItem("username");

        // Fetch data pengguna berdasarkan username
        const response = await fetch(`http://localhost:8000/user/${username}`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("jwttoken"),
          },
        });

        if (!response.ok) {
          // Handle error jika respons tidak berhasil
          throw new Error("Error fetching user data");
        }

        const data = await response.json();
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);

        // Redirect ke halaman login jika data pengguna tidak ditemukan atau token tidak valid
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      <h2 class="text-center font-bold mt-12">Profil Pengguna</h2>
      <div class="mx-auto">
        <FaUser class="mt-12 w-32 h-32 mx-auto" />
        <div class="mt-5 mx-auto text-center text-lg">
          <strong>ID Pengguna:</strong> {id}
        </div>
        <div class="mt-2 mx-auto text-center text-lg">
          <strong>Name:</strong> {name}
        </div>
        <div class="mt-2 mx-auto text-center text-lg">
          <strong>Email:</strong> {email}
        </div>
        <Link to={"/"} class="hover:font-bold ml-1/2 w-[300px] h-[50px] bg-slate-400">
          <div class="p-2 ml-[570px] border-2 text-white text-center bg-black w-[300px] h-[45px] rounded-lg mt-3">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
