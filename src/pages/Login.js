import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginService from "../services/LoginService";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usenavigate = useNavigate();

    const ProceedLogin = (e) => {
        e.preventDefault();
        LoginService.proceedLogin(username, password, usenavigate);
    };

    const ProceedLoginUsingAPI = (e) => {
        e.preventDefault();
        LoginService.proceedLoginUsingAPI(username, password, usenavigate);
    };

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    };

    return (
        <div className="row" style={{ backgroundColor: 'black', fontFamily: 'Arial, sans-serif', padding: '165px'}}>
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '20px' }}>
                <form onSubmit={ProceedLogin} className="container" style={{ background: '#FFFFF0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card">
                        <div className="card-header" style={{ background: 'gray' }}>
                            <h2 style={{ color: 'black', textAlign: 'center' }}>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => setUsername(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer" style={{ background: 'gray' }}>
                            <button type="submit" className="btn btn-primary" style={{ marginRight: '1%', background: 'black', borderColor: '#fff' }}>Login</button>
                            <Link className="btn btn-success" to={'/register'} style={{ background: 'black', borderColor: '#fff' }}>Registrasi</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
