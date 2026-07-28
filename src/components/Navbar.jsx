// import { NavLink } from "react-router-dom";
import {FaBars,FaUserCircle,FaSignOutAlt} from"react-icons/fa";
import "../css/navbar.css";

function Navbar({toggleSidebar}){
    return(
        <nav className="navbar">
            <div className="nav-left">
                <FaBars className="menu-icon" 
                onClick={toggleSidebar}/>
            </div>
            {/*Login*/}
            <div className="nav-right">
                <div className="login-info">
                    <b>Last Login:</b>
                    <span className="ip">IP:
                    </span>
                </div>

                {/*User*/}
                <div className="user">
          <FaUserCircle />
          <span>user4</span>
        </div>
        {/*Logout*/}
        <button className="logout-btn">
          <FaSignOutAlt />
         <span>Logout</span>
        </button>
            </div>
        </nav>
    );
}

export default Navbar;
