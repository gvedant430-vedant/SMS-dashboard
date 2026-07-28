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
        <div className="domain-container">
            <h1>Domain Manager..</h1>
            {/*Tabs*/}
            <div className="tabs">
                <button
                className={activeTab==="add"?"active":""}
                onClick={()=>setActiveTab("add")}>
                    Add Domain
                </button>
                <button
                className={activeTab==="view"?"active":""}
                onClick={()=>setActiveTab("view")}>
                    View Domain
                </button>
            </div>

            {/*ADD DOMIN*/}
            {activeTab==="add"&&(
                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="row">
                        <label>Title</label>
                        <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={formData.title}
                        onChange={handleChange}/>
                    </div>
                    <div className="row">
                        <label>Domain</label>
                        <input
                        type="text"
                        name="domain"
                        placeholder="Enter Domain Name"
                        value={formData.domain}
                        onChange={handleChange}/>
                    </div>
                    <p className="note">
                          * Reduce message length. Enter the domain name
            without http/https.
                    </p>
                    <div className="buttons">
                        <button type="submit">Add</button>
                        <button type="button" onClick={handleReset}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
            {/* VIEW DOMAIN */}
            {activeTab === "view" && (
                <div className=" view-container">

                    <div className="search-wrapper">
                        <label>Search:</label>
                        <input
                        type="text"
                        placeholder="Search Domain Name"/>
                    </div>
                    <table className="view-table">
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
                                <td colSpan="4" className="no-data">
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