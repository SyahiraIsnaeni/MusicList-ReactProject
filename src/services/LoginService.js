// src/services/LoginService.js
import { toast } from "react-toastify";

const LoginService = {
    proceedLogin: (username, password, usenavigate) => {
        if (LoginService.validate(username, password)) {
            fetch("http://localhost:8000/user/" + username)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        toast.error('Please Enter valid username');
                    } else {
                        if (resp.password === password) {
                            toast.success('Success');
                            sessionStorage.setItem('username', username);
                            sessionStorage.setItem('userrole', resp.role);
                            usenavigate('/');
                        } else {
                            toast.error('Please Enter valid credentials');
                        }
                    }
                })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    },

    proceedLoginUsingAPI: (username, password, usenavigate) => {
        if (LoginService.validate(username, password)) {
            let inputObj = { username, password };
            fetch("https://localhost:44308/User/Authenticate", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputObj)
            })
                .then((res) => res.json())
                .then((resp) => {
                    console.log(resp);
                    if (Object.keys(resp).length === 0) {
                        toast.error('Login failed, invalid credentials');
                    } else {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('jwttoken', resp.jwtToken);
                        usenavigate('/');
                    }
                })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    },

    validate: (username, password) => {
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
    },
};

export default LoginService;
