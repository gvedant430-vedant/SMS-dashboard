import { useState } from "react";
import"../css/UploadSenderId.css";

function UploadSenderId(){
    const[formData,setFormData]=useState({
        
        senderType:"Promotional",
        entityId:"",
        headerId:"",
        file:null,
    });
    const handleChange=(e)=>{
        const{name,value,files}=e.target;
        console.log(name,value);
        setFormData({
            ...formData,
            [name]:files ? files[0]:value,
        });
    };

    const handleReset=()=>{
        setFormData({
            senderType:"Promotional",
            entityId:"",
            headerId:"",
            file:null,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form Submitted")
        console.log(formData);
    };
    return(
        <div className="upload-container">
            {/* <h1>Add Sender ID</h1> */}
            
            <div className="upload-card">
                <form onSubmit={handleSubmit}>
     {/*Sender Type*/}
      <div className="form-row">
        <label>Sender Id Type:</label>
        <div className="radio-group">
            <label>
                <input
                type="radio"
                name="senderType"
                value="Promotional"
                checked={formData.senderType==="Promotional"}
                onChange={handleChange}/>
                Promotional
            </label>
            <label>
                <input
                type="radio"
                name="senderType"
                value="Others"
                checked={formData.senderType==="Others"}
                onChange={handleChange}/>
                Others(Transactional/Service Implicit/Service Explicit)
            </label>
        </div>
      </div>
      {/*Entity ID*/}
      <div className="form-row">
        <label>New/Existing Entity ID:</label>
        <select
        name="entityId"
        value={formData.entityId}
        onChange={handleChange}>
            <option value="">
                Enter Existing/New Entity ID
            </option>
            <option value="Entity1">Entity 1</option>
            <option value="Entity2">Entity 2</option>
        </select>
      </div>
      {/*Header ID*/}
      <div className="form-row">
        <label>Header ID:</label>
        <input
        type="text"
        name="headerId"
        placeholder="Enter Header Id"
        value={formData.headerId}
        onChange={handleChange}/>
      </div>

      {/*File Upload*/}
      <div className="form-row">
        <label>Add Sender Id File:</label>
        
        <div className="file-section">
            <input 
            type="file"
            name="file"
            accept=".csv"
            onChange={handleChange}/>

            <button
            type="button"
            className="reset-btn"
            onClick={handleReset}>
                Reset File
            </button>
            </div>
            <p className="note">
                NOTE:only.csv(comma separated) file is allowed
            </p>
            <a href=".">Sample File</a>
        </div>
      <button className="upload-btn">Upload</button>
                </form>
            </div>
        </div>
    );
}

export default UploadSenderId;