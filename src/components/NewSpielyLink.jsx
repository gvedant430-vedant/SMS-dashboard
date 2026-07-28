import { useState } from "react";
import"../css/NewSpielyLink.css";

function NewSpielyLink(){
    const[activeTab,setActiveTab]=useState("create");

    const[formData,setFormData]=useState({
        name: "",
        isDynamic:"No",
        domain:"",
        headerType:"Trans",
        header:"",
        protocol:"http://",
        longUrl:"",
        callbackProtocol: "http://",
        callbackUrl: "",
        shortCode: "",
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    };

    const handleReset=()=>{
        setFormData({
      name: "",
      isDynamic: "No",
      domain: "",
      headerType: "Trans",
      header: "",
      protocol:"http://",
      longProtocol: "",
      longUrl: "",
      callbackProtocol: "http://",
      callbackUrl: "",
      shortCode: "",
    });
  };


    return(
        <div className="short-url-container">
            <h1>New Short URL</h1>

           {/*Tabs*/}
           <div className="tabs">
            <button
            className={activeTab === "create" ? "active" : ""}
            onClick={()=> setActiveTab("create")}>
                Create
            </button>
          
            <button 
            className={activeTab === "view" ? "active" : ""}
            onClick={()=> setActiveTab("view")}>
                View
            </button>
           </div>

           {/*CREATE TAB*/}
           {activeTab === "create" &&(
            <form className="form-card" onSubmit={handleSubmit}>
             {/*Name*/}
                <div className="row">
                    <label>Name</label>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}/>
                </div>
                
                {/*Dynamic*/}
                <div className="row">
                    <label>IsDynamic</label>
                     
                <div className="radio-group">
                        <label>
                        <input 
                        type="radio"
                        name="isDynamic"
                        value="Yes"
                        checked={formData.isDynamic==="Yes"}
                        onChange={handleChange}/>
                        Yes
                        </label>

                        <label>
                        <input
                        type="radio"
                        name="isDynamic"
                        value="No"
                        checked={formData.isDynamic==="No"}
                        onChange={handleChange}/>
                        No
                        </label>
                    </div>
                </div>

                {/*Domain*/}
                <div className="row">
                    <label>Select Domain</label>

                    <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}>
                        <option>--Select--</option>
                        <option>Domain1</option>
                        <option>Domain2</option>
                    </select>
                </div>

                {/*Header*/}
                <div className="row">
                    <label>Header</label>

                   <div className="header-box">
                    <div className="radio-group">
                        <label>
                        <input
                        type="radio"
                        name="headerType"
                        value="Trans"
                        checked={formData.headerType==="Trans"}
                        onChange={handleChange}/>
                        Trans 
                        </label>

                        <label>
                        <input 
                        type="radio"
                        name="headerType"
                        value="Promo"
                        onChange={handleChange}/>
                        Promo
                        </label>
                    </div>

                    <select
                    name="header"
                    value={formData.header}
                    onChange={handleChange}>
                        <option>--Select--</option>
                    </select>
                </div>
                </div>

                {/*Long Url*/}
                <div className="row">
                    <label>Long URL</label>
                    
                    <select
                    name="protocol"
                    value={formData.protocol}
                    onChange={handleChange}>
                        <option>http://</option>
                        <option>https://</option>
                    </select>

                    <input
                    type="text"
                    name="longUrl"
                    placeholder="Enter Long URL"
                    value={formData.longUrl}
                    onChange={handleChange}/>
                </div>
                {/*CallBackc URL*/}
                <div className="row">
                    <label>Callback URL</label>

                    <select
                    name="callbackProtocol"
                    value={formData.callbackProtocol}
                    onChange={handleChange}>
                        <option>http://</option>
                        <option>https://</option>
                    </select>
                    <input 
                    type="text"
                    value="callbackUrl"
                    name="callbackUrl"
                    placeholder="Enter CallBack URL"
                    onChange={handleChange}/>
                </div>
                {/*Short URL*/}
                <div className="row">
                    <label>Short URL Code</label>

                    <input
                    type="text"
                    value={formData.shortCode}
                    readOnly
                    placeholder="Short URL code will be generated after hitting submit button"
                    />
                </div>
                {/*Buttons*/}
                <div className="buttons">
                    <button type="submit">Save</button>

                    <button type="button" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </form>
           )}

        </div>
    );
}

export default NewSpielyLink;