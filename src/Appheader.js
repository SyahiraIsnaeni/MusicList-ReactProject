import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appheader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }

    }, [location])
    return (
        <div>
            {showmenu &&
                <div className="header" style={{ background: 'black' }}>
                    <Link to={'/login'} style={{ float: 'right', marginRight: '28px'}} class="hover:font-bold">Logout</Link>
                    <Link to={'/profile'} style={{ float: 'right', marginRight: '50px'}} class="hover:hover:font-bold">Profile</Link>
                    <span style={{ float: 'left', marginLeft: '28px'}} class="font-medium text-lg">Welcome <b>{displayusername}</b></span>
                </div>
            }
        </div>
    );
}

export default Appheader;