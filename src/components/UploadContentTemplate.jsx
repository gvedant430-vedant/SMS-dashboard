import { useState } from "react";
import "../css/UploadContentTemplate.css";

function UploadContentTemplate(){
    const[formData,setFormData]=useState({
        fileType:"TEMPLATE_FILE",
        entityId:"",
        templateFileType:"CSV",
        file:null,
        operator:""
    });
    const[error,setErrors]=useState({});
    const validationForm=()=>{
        let newErrors={};
        if(!formData.entityId.trim()){
            newErrors.entityId="Entity ID is required";
        }
        if(!formData.file){
            newErrors.file="Please select a file";
        }
        if(!formData.operator){
            newErrors.file="Operator is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    };

    const handleChange=(e)=>{
        const{name,vlaue}=e.target;

        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleFileChange=(e)=>{
        setFormData({
            ...formData,
            file:e.target.files[0]
        });
    };
    const handleReset=()=>{
        setFormData({
            ...formData,
            file:null
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
       
        if(validationForm()){
             alert("Template Uploaded Succesfully")
              console.log(formData);
        }
       
    };


    return(
        <form className="uploadCard" onSubmit={handleSubmit}>
    {/*File Type*/}
            <div className="formRow">
                <label>File Type</label>
                <div className="radioGroup">
                    <label>
                        <input 
                        type="radio"
                        name="filetype"
                        value="TEMPLATE_FILE"
                        checked={formData.fileType==="TEMPLATE_FILE"}
                        onChange={handleChange}/>
                        TEMPLATE_FILE
                    </label>
                </div>
            </div>

     {/*Entity ID*/}
            <div className="formRow">
                <label>Entity ID</label>
                <input 
                type="text"
                name="entityId"
                vlaue={formData.entityId}
                onChange={handleChange}
                placeholder="Enter Entity ID"/>
                {setErrors.entityId&&(
                    <p className="error">
                        {setErrors.entityId}
                    </p>
                )}
            </div>

    {/*Template file type*/}
            <div className="formRow">
                <label>Template File Type</label>
                <div className="radioGroup">
                    <label>
                        <input
                        type="radio"
                        name="templateFileType"
                        value="CSV"
                        checked={formData.templateFileType==="CSV"}
                        onChange={handleChange}/>
                        CSV
                    </label>
                    <label>
                         <input 
                         type="radio"
                         name="templateFileType"
                         value="XLSX"
                         checked={formData.templateFileType==="XLSX"}
                         onChange={handleChange}/>
                         XLSX
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="templatefileType"
                        value="XLS"
                        checked={formData.templateFileType==="XLS"}
                        onChange={handleChange}/>
                        XLS
                        </label>
                </div>
            </div>
     {/*File*/}
            <div className="fileUpload">
                <label>File</label>
                <div>
                    <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileChange}/>
                    {error.file&&(
                        <p className="error">
                            {error.file}
                        </p>
                    )}

                    <button
                    type="button"
                    className="resetBtn"
                    onClick={handleReset}>
                        Reset File
                    </button>
                <p className="note">
                    Only .csv,.xlsx and .xls files are allowed
                </p>
                </div>
            </div>

    {/*Operator*/}
            <div className="formRow">
                <label>Operator</label>
                <select
                name="operator"
                value={formData.operator}
                onChange={handleChange}>
                    <option value=" ">--Select--</option>
                    <option vlaue="Airtel">Airtel</option>
                    <option vlaue="Jio">Jio</option>
                    <option vlaue="Vi">vi</option>
                </select>
                {error.operator&&(
                    <p className="error">
                        {errors.operator}
                    </p>
                )}
            </div>
    {/*Buttons*/}
            <div className="buttonGroup">
                <button
                type="submit"
                className="uploadBtn">
                    Upload
                </button>
                <button
                type="button"
                className="cancel-btn">
                    Cancel
                </button>
            </div>
        </form>
    )
}
export default UploadContentTemplate;