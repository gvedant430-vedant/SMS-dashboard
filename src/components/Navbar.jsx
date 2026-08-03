import { useNavigate } from "react-router-dom";
import {FaBars,FaUserCircle,FaSignOutAlt} from"react-icons/fa";
import "../css/navbar.css";

function Navbar({toggleSidebar}){

    const navigate= useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return(
        <nav className="navbar-container">
            <div className="navbar-left">
                <FaBars className="navabar-menuIcon" 
                onClick={toggleSidebar}/>
            </div>
            {/*Login*/}
            <div className="navbar-right">
                <div className="navbar-loginInfo">
                    <b>Last Login:</b>
                    <span className="navbar-ip">IP:
                    </span>
                </div>

                {/*User*/}
                <div className="navbar-user">
          <FaUserCircle />
          <span>user4</span>
        </div>

        {/*Logout*/}
        <button className="navbar-logoutBtn" onClick={handleLogout}>
          <FaSignOutAlt />
         <span>Logout</span>
        </button>
            </div>
        </nav>
    );
}

export default Navbar;
