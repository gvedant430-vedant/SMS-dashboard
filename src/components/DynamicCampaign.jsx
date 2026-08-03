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
        console.log(formData);
       };

       const handleReset = () => {
  setFormData({
    campaignName: "user4-campaign-1707206-1500",
    messageEncoding: "SMS",
    file: null,
    messageType: "Transactional",
    senderId: "",
    templateName: "",
    mobileNumber: "",
    columnList: "",
    messageText: "",
    shortUrl: "",
    entityId: "",
    operatorTemplateId: "",
    scheduleMessage: "No",
  });
};

    return(
  <div className="dynamiccampaign-container">
    <h1>Dynamic Campaign</h1>

    <form onSubmit={handleSubmit} className="dynamiccampaign-form">

        {/*Campaign Name*/}
        <div className="dynamiccampaign-formGroup">
            <label>Campaign Name</label>
            <div>
                <input
                type="text"
                name="campaignName"
                value={formData.campaignName}
                onChange={handleChange}/>
                <p className="dyanamiccampaign-note">
                    NOTE:Special characters are not allowed in campaign name.
                </p>
            </div>
        </div>
        {/*Message Encoding*/}
        <div className="dyanamiccampaign-formGroup">
            <label>Message Encoding</label>
            <div className="dynamiccampaign-radioGroup">
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
        <div className="dynamiccampaign-formGroup">
            <label>File Upload</label>
            <div>
                <input
                type="file"
                name="file"
                accept=".csv,.xlsx,.zip"
                onChange={handleChange}/>
                <p className="dynamiccampaign-note">
                    NOTE:Only .xlsx,.csv and .zip files are allowed.
                </p>
                </div>
        </div>
        {/*Message Type*/}
        <div className="form-group">
            <label>Message Type</label>
            <div className="dynamiccampaign-radiogroup">
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
        <div className="dynamiccampaign-formGroup">
            <label>Sender ID</label>

            <select
            name="senderId"
            value={formData.senderId}
            onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="ABCD">abcd</option>
            </select>
        </div>
        {/*Template*/}
        <div className="dynamiccampaign-formGroup">
            <label>Content Template Name</label>

            <select
            name="templateName"
            value={formData.templateName}
            onChange={handleChange}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Mobile Number*/}
        <div className="dynamiccampaign-formGroup">
            <label>Mobile Number</label>

            <select
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Column List*/}
        <div className="dynamiccampaign-formGroup">
            <label>Column List</label>
            <select
            name="columnList"
            value={formData.columnList}
            onChange={handleChange}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Button*/}
        <div className="dynamiccampaign-btnWrapper">
            <button type="button" className="dynamaiccampaign-addBtn">
                Add to Text
            </button>
        </div>
        {/*Message Text*/}
        <div className="dynamiccampaign-formGroup">
            <label>Message Text</label>
            <div>
                <textarea
                name="messageText"
                placeholder="Original Message Text"
                value={formData.messageText}
                onChange={handleChange}/>
                <p className="dynamiccampaign-note">
                NOTE: xxxxxx will be replaced by actual shortcode.
                </p>
            </div>
        </div>
        {/*Short URL*/}
        <div className="dynamiccampaign-formGroup">
            <label>Convert short URL</label>

            <div className="dynamiccampaign-radioGroup">
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
        <div className="dyformnamiccampaign-Group">
            <label>Entity ID</label>
            <input 
            type="text"
            name="entityId"
            placeholder="Entity ID"
            value={formData.entityId}
            onChange={handleChange}/>
        </div>
        {/*Template ID*/}
        <div className="dynamiccampaign-formGroup">
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
         <div className="dynamiccampaign-formGroup">
          <label>Schedule Message</label>

          <div className="dynamiccampaign-radioGroup">
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
        <div className="dynamiccampaign-actionButtons">
          <button type="submit" className="dynamiccampaign-previewBtn">
            Preview
          </button>

          <button type="reset" className="dynamiccampaign-cancelbtn"
            onClick={handleReset}> 
            Cancel
          </button>
        </div>

    </form>
  </div>
    )
}

export default DynamicCampaign;