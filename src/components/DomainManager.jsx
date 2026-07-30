import { useState } from "react";
import"../css/DomainManager.css";
function DomainManager(){
    const[activeTab,setActiveTab]=useState("add");
    const[formData,setFormData]=useState({
        title:" ",
        domain:" ",
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value,
        });
    };
        const handleSubmit =(e)=>{
            e.preventDefault();

            console.log(formData);
        };

        const handleReset=()=>{
            setFormData({
                title:"",
                domain:"",
            });
        };

    return(
        <div className="domainmanager-container">
            <h1 className="domainmanager-title">Domain Manager..</h1>
            {/*Tabs*/}
            <div className="domainmanager-tabs">
                <button
                className={activeTab==="add"?"domainmanager-active":""}
                onClick={()=>setActiveTab("add")}>
                    Add Domain
                </button>
                <button
                className={activeTab==="view"?"domainmanager-active":""}
                onClick={()=>setActiveTab("view")}>
                    View Domain
                </button>
            </div>

            {/*ADD DOMIN*/}
            {activeTab==="add"&&(
                <form className="domainmanager-formCard" onSubmit={handleSubmit}>
                    <div className="domainmanager-row">
                        <label>Title</label>
                        <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={formData.title}
                        onChange={handleChange}/>
                    </div>
                    <div className="domainmanager-row">
                        <label>Domain</label>
                        <input
                        type="text"
                        name="domain"
                        placeholder="Enter Domain Name"
                        value={formData.domain}
                        onChange={handleChange}/>
                    </div>
                    <p className="domainmanager-note">
                          * Reduce message length. Enter the domain name
            without http/https.
                    </p>
                    <div className="domainmanager-buttons">
                        <button type="submit">Add</button>
                        <button type="button" onClick={handleReset}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
            {/* VIEW DOMAIN */}
            {activeTab === "view" && (
                <div className=" domainmanager-viewContainer">

                    <div className="domainmanager-searchWrapper">
                        <label>Search:</label>
                        <input
                        type="text"
                        placeholder="Search Domain Name"/>
                    </div>
                    <table className="domainmanager-viewTable">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>TITLE</th>
                                <th>DOMAIN</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td colSpan="4" className="domainmanager-noData">
                                    No Data Available
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            </div>
    )
}

export default DomainManager;