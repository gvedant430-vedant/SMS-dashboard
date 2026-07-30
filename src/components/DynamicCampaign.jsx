import { useState } from "react";
import"../css/DynamicCampaign.css";
function DynamicCampaign(){
    const[formData,setFormData]=useState({
        campaignName:"user4-campaign-1707206-1500",
        messageEncoding:"SMS",
        file:null,
        messageType:"Transactional",
        senderId:"",
        templateName:"",
        mobileNumber:"",
        columnList:"",
        messageText:"",
        shortUrl:"",
        entityId:"",
        operatorTemplateId:"",
        scheduleMessage:"No",
    });

    const handleChange=(e)=>{
        const {name,value,files}=e.target;

        setFormData({
            ...formData,
            [name]:files?files[0]:value,
        });
    };

       const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(FormData);
       };

    return(
  <div className="dynamic-container">
    <h1>Dynamic Campaign</h1>

    <form onSubmit={handleSubmit} className="dynamic-form">

        {/*Campaign Name*/}
        <div className="form-group">
            <label>Campaign Name</label>
            <div>
                <input
                type="text"
                name="campaignName"
                value={formData.campaignName}
                onChange={handleChange}/>
                <p className="note">
                    NOTE:Special charaters are not allowed in campaign name.
                </p>
            </div>
        </div>
        {/*Message Encoding*/}
        <div className="form-group">
            <label>Message Encoding</label>
            <div className="radio-group">
                <label>
                    <input
                    type="radio"
                    name="messageEncoding"
                    value="SMS"
                    checked={formData.messageEncoding==="SMS"}
                    onChange={handleChange}/>
                    SMS
                </label>
                <label>
                    <input 
                    type="radio"
                    name="messageEncoding"
                    value="Flash"
                    checked={formData.messageEncoding==="Flash"}
                    onChange={handleChange}/>
                    Flash
                </label>
            </div>
        </div>
        {/*File Upload*/}
        <div className="form-group">
            <label>File Upload</label>
            <div>
                <input
                type="file"
                name="file"
                accept=".csv,.xlsx,.zip"
                onChange={handleChange}/>
                <p className="note">
                    NOTE:Only .xlsx,.csv and .zip files are allowed.
                </p>
                </div>
        </div>
        {/*Message Type*/}
        <div className="form-group">
            <label>Message Type</label>
            <div className="radio-group">
                <label>
                    <input
                    type="radio"
                    name="messageType"
                    value="Transactional"
                    checked={formData.messageType==="Transactional"}
                    onChange={handleChange}/>
                    Transactional
                </label>
                <label>
                    <input
                    type="radio"
                    name="messageType"
                    value="Promotional"
                    checked={formData.messageType==="Promotional"}
                    onChange={handleChange}/>
                    Promotional
                </label>
                <label>
                    <input
                    type="radio"
                    name="messageType"
                    value="Service"
                    checked={formData.messageType==="Service"}
                    onChange={handleChange}/>
                    Service
            </label>
            </div>
        </div>
        {/*Sender ID*/}
        <div className="form-group">
            <label>Sender ID</label>

            <select
            name="senderId"
            value={formData.senderId}
            onChange={handleChange}>
                <option>--Select--</option>
                <option>abcd</option>
            </select>
        </div>
        {/*Template*/}
        <div className="form-group">
            <label>Content Template Name</label>

            <select
            name="templateName"
            value={formData.templateName}
            onChange={handleChange}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Mobile Number*/}
        <div className="form-group">
            <label>Mobile Number</label>

            <select
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Column List*/}
        <div className="form-group">
            <label>Column List</label>
            <select
            name="columnList"
            value={formData.columnList}
            onChange={handleChange}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Button*/}
        <div className="btn-wrapper">
            <button type="button" className="add-btn">
                Add to Text
            </button>
        </div>
        {/*Message Text*/}
        <div className="form-group">
            <label>Message Text</label>
            <div>
                <textarea
                name="messageText"
                placeholder="Original Message Text"
                value={formData.messageText}
                onChange={handleChange}/>
                <p className="note">
                NOTE: xxxxxx will be replaced by actual shortcode.
                </p>
            </div>
        </div>
        {/*Short URL*/}
        <div className="form-group">
            <label>Convert short URL</label>

            <div className="radio-group">
                <label>
                    <input
                    type="radio"
                    name="shortUrl"
                    value="Yes"
                    checked={formData.shortUrl==="Yes"}
                    onChange={handleChange}/>
                    Yes
                </label>
                <label>
                    <input 
                    type="radio"
                    name="shortUrl"
                    value="No"
                    checked={formData.shortUrl==="No"}
                    onChange={handleChange}/>
                    No
                </label>
            </div>
        </div>
        {/*Entity ID*/}
        <div className="form-group">
            <label>Entity ID</label>
            <input 
            type="text"
            name="entityId"
            placeholder="Entity ID"
            value={formData.entityId}
            onChange={handleChange}/>
        </div>
        {/*Template ID*/}
        <div className="form-group">
          <label>Operator Template ID</label>

          <input
            type="text"
            name="operatorTemplateId"
            placeholder="Operator Template ID"
            value={formData.operatorTemplateId}
            onChange={handleChange}
          />
        </div>
        {/*Schedule*/}
         <div className="form-group">
          <label>Schedule Message</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="scheduleMessage"
                value="Yes"
                checked={formData.scheduleMessage === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="scheduleMessage"
                value="No"
                checked={formData.scheduleMessage === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
         {/* Buttons */}
        <div className="action-buttons">
          <button type="submit" className="preview-btn">
            Preview
          </button>

          <button type="reset" className="cancel-btn">
            Cancel
          </button>
        </div>

    </form>
  </div>
    )
}

export default DynamicCampaign;