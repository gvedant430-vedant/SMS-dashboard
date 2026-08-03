import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import"../App.css";

function Layout(){
    const[sidebarOpen,setSidebarOpen]=useState(true);

    const  toggleSidebar= () => {
        setSidebarOpen(prev=>!prev);
    };

    return(
        <>
    
        <Navbar toggleSidebar={toggleSidebar}/>
        
        <div className="layout-container">
          <Sidebar isOpen={sidebarOpen}/>  

            <div className={`content ${sidebarOpen ? "layout-contentOpen" : "layout-contentClose"}`}>
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default Layout;