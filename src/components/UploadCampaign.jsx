import { useState } from "react";
import"../css/UploadCampaign.css";

function UploadCampaign(){
    const[formData,setFormData]=useState({
        campaignName:"user4-campaign-17072026-1125",
        fileType:"TXT",
        file:null,
        messageType:"Trans",
        senderId:"",
        template:"",
        encoding:"Plain Text",
        part:"Singlepart",
        message:"",
        shortUrl:"No",
        entityId:"",
        operatorTemplateId:"",
        schedule:"No",
    });

    const handleChange=(e)=>{
        const{name,value,files}=e.target;
        setFormData({
            ...formData,
            [name]:files ?files[0]:value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    };

    const handleReset=()=>{
        setFormData({
            ...formData,
            file:null,
        });
    };
return(
    <div className="upload-container">
        <h1>Upload Campaign</h1>

        <form className="upload-card" onSubmit={handleSubmit}>
        {/*Campaign Name*/}
        <div className="row">
            <label>Campaign Name</label>

            <div>
                <input
                type="text"
                name="campaignName"
                value={formData.campaignName}
                onChange={handleChange}/>
                <p className="note">
                    NOTE:Special characters like SPACE %,[]|:".?/~ are not allowed.
                </p>
            </div>
        </div>
        {/*File Type*/}
        <div className="row">
            <label>File Type</label>
            <div className="radio-group">
                {["TXT","XLS","CSV","ZIP"].map((type)=>(
                    <label key={type}>
                        <input
                        type="radio"
                        name="fileType"
                        value={type}
                        checked={formData.fileType===type}
                        onChange={handleChange}/>
                        {type}
                    </label>
                ))}
            </div>
        </div>
        {/*File*/}
        <div className="row">
            <label>Select File</label>
            <div>
                <div className="file-row">
                    <input
                    type="file"
                    name="file"
                    accept=".txt,.xlsx,.xls,.csv,.zip"
                    onChange={handleChange}/>
                    <button
                    type="button"
                    className="reset-btn"
                    onClick={handleReset}>
                        Reset File
                    </button>
                </div>
                <p className="note">NOTE:.txt,.xls,.xlsx,.csv,.zip are allowed file types.</p>
                <a href="/">Sample File</a>
            </div>
        </div>
        {/*Message Type*/}
        <div className="row">
            <label>Message Type</label>
            <div className="radio-group">
                {["Trans","Promo","Service"].map((item)=>(
                    <label key={item}>
                        <input
                        type="radio"
                        name="messageType"
                        value={item}
                        checked={formData.messageType===item}
                        onChange={handleChange}/>
                        {item}
                    </label>
                ))}
            </div>
        </div>
        {/*Sender ID*/}
        <div className="row">
            <label>Sender ID</label>
            <select
            name="senderId"
            value={FormData.senderId}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Template*/}
        <div className="row">
            <label>Content Template Name</label>
            <select
            name="template"
            value={formData.template}
            onChange={handleChange}>
                <option>--Select--</option>
            </select>
        </div>
        {/*Encoding*/}
        <div className="row">
            <label>Message Encoding</label>
            <div className="radio-group">
                {["plain Text","Unicode"].map((item)=>(
                    <label key={item}>
                        <input
                        type="radio"
                        name="encoding"
                        value={item}
                        checked={formData.encoding===item}
                        onChange={handleChange}/>
                        {item}
                    </label>
                ))}
            </div>
        </div>
        {/*Message Part*/}
        <div className="row">
            <label>Messagr Part</label>
            <div className="radio-group">
                {["singlepart","Multipart"].map((item)=>(
                    <label key={item}>
                        <input
                        type="radio"
                        name="part"
                        value={item}
                        checked={formData.part===item}
                        onChange={handleChange}/>
                        {item}
                    </label>
                ))}
            </div>
        </div>
        {/*Message*/}
        <div className="row">
            <label>Message Text</label>
            <div>
                <textarea
                rows="5"
                name="message"
                placeholder="original Message Text"
                value={formData.message}
                onChange={handleChange}/>
                <p className="note">
                                  NOTE: xxxxxx will be replaced by actual shortcode up to 6 chars.

                </p>
                <h3>
                    {formData.message.length} Character count | SMS Credit
                </h3>
            </div>
        </div>
        {/*Short Url*/}
         <div className="row">
          <label>Is ShortUrl Selected</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="shortUrl"
                value="Yes"
                checked={formData.shortUrl === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="shortUrl"
                value="No"
                checked={formData.shortUrl === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        {/*Entity ID*/}
        <div className="row">
            <label>Entity ID</label>
            <input 
            type="text"
            name="entityId"
            placeholder="Entity ID"
            value={formData.entityId}
            onChange={handleChange}/>
        </div>
        {/* Operator Template */}
        <div className="row">
          <label>Operator Template ID</label>

          <input
            type="text"
            name="operatorTemplateId"
            placeholder="Operator Template ID"
            value={formData.operatorTemplateId}
            onChange={handleChange}
          />
        </div>

        {/* Schedule */}
        <div className="row">
          <label>Schedule Message</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="schedule"
                value="Yes"
                checked={formData.schedule === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="schedule"
                value="No"
                checked={formData.schedule === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button className="submit-btn">Submit</button>
          <button type="reset" className="cancel-btn">
            Cancel
          </button>
        </div>
        </form>
    </div>

)
};
export default UploadCampaign ;