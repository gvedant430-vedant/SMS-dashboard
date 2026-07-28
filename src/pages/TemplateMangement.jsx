import { useState } from "react";

import AddContentTemplate from"../components/AddContentTemplate";
import UploadContentTemplate from"../components/UploadContentTemplate";
import ViewContentTemplate from"../components/ViewContentTemplate";
import"../css/TemplateManagement.css";

function TemplateManagement(){
const[activeTab,setActiveTab]=useState("add");
return(
    <div className="templateManagement">
        <h2>Template Management</h2>

        {/*Tabs*/}
        <div className="tabs">

            <button 
            className={activeTab==="add" ? "tabBtn activeTab" : "tabBtn"}
            onClick={()=>setActiveTab("add")}>
                Add Content Template
            </button>

            <button
            className={activeTab==="upload"?"tabBtn activeTab":"tabBtn"}
            onClick={()=>setActiveTab("upload")}>
                Upload Content Template
            </button>
            <button
            className={activeTab==="view"?"tabBtn activeTab":"tabBtn"}
            onClick={()=>setActiveTab("view")}>
                View Content Template
            </button>
        </div>
        
        {/*Tab Content*/}
        <div className="tabcontent">
            {activeTab==="add"&&<AddContentTemplate/>}
            {activeTab==="upload"&&<UploadContentTemplate/>}
            {activeTab==="view"&&<ViewContentTemplate/>}
        </div>
    </div>
);

}

export default TemplateManagement;
