import { useState } from "react";
import "../css/QuickCampaign.css";
{/*import"../css/DynamicCampaign.css";*/}
function QuickCampaign(){
    const[formData,setFormData]=useState({
        campaignName:"user4-campaign-17072026-1016",
        mobile:"",
        messageType:"Transactional",
        senderId:"",
        template:"",
        encoding:"Plain Text",
        part:"Singlepart",
        message:"",
        shortUrl:"No",
        entityId:"",
        operatorId:"",
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    return(
        <div className="quick-container">
            <h1>Quick Campaign</h1>
            <div className="quick-card">
                <div className="row">
                    <label>Campaign Name</label>
                    <div>
                        <input
                        type="text"
                        name="campaignName"
                        value={formData.campaignName}
                        onChange={handleChange}/>
                        <p className="note">
                            NOTE:Special characters are not allowed.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <label>Mobile Number(s)</label>

                    <div>
                        <textarea
                        rows="4"
                        name="mobile"
                        placeholder="Enter Mobile Number(s)"
                        onChange={handleChange}/>
                        <h3>0 Mobile Numbers</h3>
                    </div>
                </div>

                <div className="row">
                    <label>Message Type</label>

                    <div className="radio">
                        <input type="radio" checked/>
                        Transactional

                        <input type="radio" />
                        Promotional

                        <input type="radio"/>
                        Service
                    </div>
                </div>

                <div className="row">
                    <label>Sender ID</label>
                    <select>
                        <option>--Select--</option>
                    </select>
                </div>

                <div className="row">
                    <label>Content Template Name</label>
                    <select>
                        <option>--Select--</option>
                    </select>
                </div>
                <div className="row">
                    <label>Message Encoding</label>

                    <div className="radio">
                        <input type="radio" checked/>
                        Plain Text

                        <input type="radio"/>
                        Unicode
                    </div>
                </div>
                <div className="row">
                    <label>Message Part </label>

                    <div className="radio">
                        <input type="radio" checked/>
                        Singlepart

                        <input type="radio"/>
                        Multipart
                    </div>
                </div>
                <div className="row">
                    <label>Message Text</label>

                    <div>
                        <textarea
                        rows="5"
                        placeholder="Original Message Text"></textarea>

                        <p className="note">
                            NOTE:XXXXX will be replaced by actual shortcode.
                        </p>

                        <h3>0 Character Count |SMS Credit</h3>
                    </div>
                </div>

                <div className="row">
                    <label>Is ShortUrl Selected</label>

                    <div className="radio">
                        <input type="radio"/>
                        Yes

                        <input type="radio" checked/>
                        No
                    </div>
                </div>
                <div className="row">
                    <label>Entity ID</label>
                    <input type="text" placeholder="Enity ID"/>
                </div>
                <div className="row">
                    <label>Operator Template ID</label>
                    <input type="text" placeholder="Operator Template ID"/>
                </div>
                <div className="btns">
                    <button className="submit">Submit</button>
                    <button className="cancel">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default QuickCampaign;