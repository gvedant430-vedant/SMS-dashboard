import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import"../App.css";

function Layout(){
    const[sidebarOpen,setSidebarOpen]=useState(false);

    const  toggleSidebar=()=>{
        setSidebarOpen(!sidebarOpen);
    };

    return(
        <>
    
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="main-layout">
            <Sidebar isOpen={sidebarOpen}/>

            <div className="content">
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default Layout;