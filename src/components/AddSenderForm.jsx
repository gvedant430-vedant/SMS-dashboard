import { useState } from "react";
import"../css/AddSenderId.css";


function AddSenderform(){
    const[formData,setFormData]=useState({
        senderType:"Promotional",
        entityId:"",
        headerId:"",
        senderId:"",
    });
    const handleChange=(e)=>{
        const{name,value}=e.target;

        console.log(name,value);
        setFormData({
            ...formData,
            [name]:value,
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        alert("Sender ID Added Successfully");

        setFormData({
            senderType:"Promotional",
            entityId:"",
            headerId:"",
            senderId:"",
        });
    };
    return(
        <div className="sender-card">
            <form onSubmit={handleSubmit}>
    {/*Sender Type*/}
                <div className="form-group">
                    <label>Sender ID Type:</label>
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
                            Others (transactional/Services Implicit/Service Explicit)
                        </label>
                    </div>
                    </div>
    {/*Entity ID*/}
                    <div className="form-group">
                        <label>New/Existing EntityID:</label>
                        <input type="text"
                        name="entityId"
                        placeholder="Enter Existing/New entity ID"
                        value={formData.entityId}
                        onChange={handleChange}/>
                    </div>
    {/*Header ID*/}
                    <div className="form-group">
                        <label>Header ID:</label>
                        <input 
                        type="text"
                        name="headerId"
                        placeholder="Enter Header ID"
                        value={formData.headerId}
                        onChange={handleChange}/>
                    </div>
     {/*sender ID*/}
                    <div className="form-group">
                        <label>Sender ID:</label>

                        <input
                        type="text"
                        name="senderId"
                        placeholder="enter numeric Sender ID"
                        value={formData.senderId}
                        onChange={handleChange}/>
                    </div>

                    <div className="btn-box">
                        <button type="submit">Add</button>
                    </div>
                
            </form>
        </div>
    );
}

export default AddSenderform;