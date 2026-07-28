import { useState } from "react";
import "../css/AddSenderId.css";
import AddSenderform from "../components/AddSenderForm";
import UploadSenderId from"../components/UploadSenderId";
import SenderIdList from"../components/SenderIdList";

function AddSenderID(){
    const[activeTab,setActiveTab]=useState("add");

    return(
        <div className="add-sender-container">
            <h1 className="page-title">Add sender Id</h1>
            <div className="tabs">
                <button
                className={activeTab==="add"?"tab active":"tab"}
                onClick={()=>setActiveTab("add")}>
                    Add
                </button>
                 <button
          className={activeTab === "upload" ? "tab active" : "tab"}
          onClick={() => setActiveTab("upload")}>
          Upload
        </button>
        <button
        className={activeTab==="list"?"tab active" :"tab"}
        onClick={()=>setActiveTab("list")}>
            Sender ID List
        </button>
            </div>
            {activeTab==="add"&&<AddSenderform/>}
            {activeTab==="upload"&&<UploadSenderId/>}
            {activeTab==="list"&&<SenderIdList/>}
        </div>
    );
}

export default AddSenderID;