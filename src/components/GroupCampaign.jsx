import { useState } from "react";
import "../css/GroupCampaign.css";

function GroupCampaign(){
    const[formData,setFromData]=useState({
        campaignName:"user4-campaign-17072026-1749",
        encoding:"Plain Text",
        part:"Singlepart",
        senderGroup:"",
        messageType:"Transactional",
        senderId:"",
        template:"",
        schedule:"No",
        message:"",
        shortUrl:"",
        entityId:"",
        operatorTemplateId:"",
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFromData({
            ...formData,
            [name]:value,
        });
    };
      
      const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
      };

      const handleCancel=()=>{
        setFromData({
            campaignName:"",
            encoding:"Plain Text",
            part:"Singlepart",
            senderGroup:"",
            messageType:"Transactional",
            senderId:"",
            template:"",
            schedule:"No",
            message:"",
            shortUrl:"",
            entityId:"",
            operatorTemplateId:"",
        });
      };
    
    return(
        <div className="groupcampaign-container">
            <h1>Group Campaign </h1>
            <form onSubmit={handleSubmit}>
                {/*Campaign Name*/}
                <div className="groupcampaign-formGroup">
                    <label>Campaign Name</label>

                    <div>
                        <input 
                        type="text"
                        name="campaignName"
                        value={formData.campaignName}
                        onChange={handleChange}/>
                        <p className="groupcampaign-note">
                            NOTE:Special characters are not allowed.
                        </p>
                    </div>
                </div>
                {/*Message Encoding*/}
                <div className="groupcampaign-formGroup">
                    <label>Message Encoding</label>

                    <div className="groupcamapign-radioGroup">
                        <input 
                        type="radio"
                        name="encoding"
                        value="Plain Text"
                        checked={formData.encoding==="Plain Text"}
                        onChange={handleChange}/>
                        Plain Text

                        <input 
                        type="radio"
                        name="encoding"
                        value="Unicode"
                        checked={formData.encoding==="Unicode"}
                        onChange={handleChange}/>
                        Unicode
                    </div>
                </div>
                {/*Message Part*/}

                <div className="groupcampaign-formGroup">
                    <label>Message Part</label>

                    <div className="groupcampaign-radioGroup">
                        <input 
                        type="radio"
                        name="part"
                        value="Singlepart"
                        checked={formData.part==="Singlepart"}
                        onChange={handleChange}/>
                        Singlepart

                        <input
                        type="radio"
                        name="part"
                        value="Multipart"
                        checked={formData.part==="Multipart"}
                        onChange={handleChange}/>
                        Multipart
                    </div>
                </div>
                {/*Sender Group*/}
                <div className="groupcampaign-formGroup">
                    <label>Sender Group</label>

                    <select
                    name="senderGroup"
                    value={formData.senderGroup}
                    onChange={handleChange}>
                        <option value="">--Select--</option>
                    </select>
                </div>

                {/*Message Type*/}
                <div className="groupcampaign-formGroup">
                    <label>Message Type</label>
                    <div className="groupcampaign-radioGroup">
                        <input 
                        type="radio"
                        name="messageType"
                        value="Transactional"
                        checked={formData.messageType==="Transactional"}
                        onChange={handleChange}/>
                        Transactional

                        <input 
                        type="radio"
                        name="messageType"
                        value="Promotional"
                        checked={formData.messageType==="Promotional"}
                        onChange={handleChange}/>
                        Promotional

                        <input
                        type="radio"
                        name="messageType"
                        value="Service"
                        checked={formData.messageType==="Service"}
                        onChange={handleChange}/>
                        Service
                    </div>
                </div>

                {/*Sender ID*/}
                <div className="groupcampaign-formGroup">
                    <label>Sender ID</label>

                    <select
                    name="senderId"
                    value={formData.senderId}
                    onChange={handleChange}>
                        <option value="">--Select--</option>
                    </select>
                </div>
                {/*Template*/}
                <div className="groupcampaign-formGroup">
                    <label>Content Template Name</label>

                    <select 
                    name="template"
                    value={formData.template}
                    onChange={handleChange}>
                        <option>--Select--</option>
                    </select>
                </div>
                {/*Schedule*/}
                <div className="groupcampaign-formGroup">
                    <label>Schedule Message</label>

                    <div className="groupcampaign-radioGroup">
                        <input 
                        type="radio"
                        name="schedule"
                        value="Yes"
                        checked={formData.schedule==="Yes"}
                        onChange={handleChange}/>
                        Yes

                        <input
                        type="radio"
                        name="schedule"
                        value="No"
                        checked={formData.schedule==="No"}
                        onChange={handleChange}/>
                        No
                    </div>
                </div>
                {/*Message*/}
                <div className="groupcampaign-formGroup">
                    <label>Message Text</label>

                    <div>
                        <textarea
                        rows="6"
                        name="message"
                        placeholder="Original Message Text"
                        value={formData.message}
                        onChange={handleChange}></textarea>

                        <p className="groupcampaign-note">
                            NOTE:xxxxxx will be replaced by actual shortcode.
                        </p>

                        <h3 className="groupcamapign-count">
                            {formData.message.length}Character Count| 0 SMS Credit
                        </h3>
                    </div>
                </div>
                {/*Short URL*/}
                <div className="groupcampaign-formGroup">
                    <label>Is ShortUrl Selected</label>

                    <div className="groupcampaign-radioGroup">
                        <input 
                        type="radio"
                        name="shortUrl"
                        value="Yes"
                        onChange={handleChange}/>
                        Yes

                        <input
                        type="radio"
                        name="shortUrl"
                        value="No"
                        checked={formData.shortUrl==="No"}
                        onChange={handleChange}/>
                        No
                    </div>
                </div>
                {/*Entity ID*/}
                <div className="groupcampaign-formGroup">
                    <label>Entity ID</label>

                    <input 
                    type="text"
                    name="entityId"
                    placeholder="Entity ID"
                    value={formData.entityId}
                    onChange={handleChange}/>
                </div>
                {/*Operator Template*/}
                <div className="groupcampaign-formGroup">
                    <label>Operator Template ID</label>

                    <input 
                    type="text"
                    name="operatorTemplateId"
                    placeholder="Operator Template ID"
                    value={formData.operatorTemplateId}
                    onChange={handleChange}/>
                </div>

                {/*buttons*/}
                <div className="groupcampaign-btnGroup">
                    <button className="groupcampaign-submitBtn">Submit</button>

                    <button
                    type="button"
                    className="groupcampaign-cancelBtn"
                    onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default GroupCampaign;
