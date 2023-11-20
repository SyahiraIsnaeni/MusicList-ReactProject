import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterService from "../services/RegisterService";

const Register = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let regObj = { id, name, password, email };
        RegisterService.handleRegistration(regObj, navigate);
    };

    return (
        <div className="row" style={{ backgroundColor: 'black', fontFamily: 'Arial, sans-serif', padding: '160px' }}>
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '30px' }}>
                <form className="container" onSubmit={handleSubmit} style={{ background: '#FFFFF0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card">
                        <div className="card-header" style={{ background: 'gray', textAlign: 'center' }}>
                            <h1>User Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer" style={{ background: 'gray' }}>
                            <button type="submit" className="btn btn-primary" style={{ marginRight: '1%', background: 'black', borderColor: '#fff' }}>Register</button>
                            <Link to={'/login'} className="btn btn-success" style={{ background: 'black', borderColor: '#fff' }}>Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
