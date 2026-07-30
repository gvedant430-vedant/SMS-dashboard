import { useState } from "react";
import"../css/AddContentTemplate.css";

function AddContentTemplate(){
    const[variableCount,setVariableCount]=useState(1);
    const [formData,setFormData]=useState({
        contentType:"Transactional",
        senderId:"",
        entityId:"",
        templateName:"",
        templateDescription:"",
        operatorTemplatedId:"",
        templateType:"Plain Text",
        messageText:"",
        status:"Active",
    });
    const[errors,setErrors]=useState({});

    const validateForm=()=>{
        let newErrors={}
        if(!formData.senderId){
            newErrors.senderId="Sender ID is required";
        }

        if(!formData.entityId.trim()){
            newErrors.entityId="Entity ID is requrired";
        }

        if(!formData.templateName.trim()){
            newErrors.templateName="Template Name is required";
        }

        if(!formData.operatorTemplatedId.trim()){
            newErrors.operatorTemplatedId="Operator Template Id is required";
        }
        if (!formData.messageText.trim()) {
        newErrors.messageText = "Message Text is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
     };

    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (validateForm()){
            alert("Template Saved Successfully");
            console.log(formData);
        }
    };

    {/*Add Variable Function*/}
    const handleAddVariable = () => {

    const variable = `{#var${variableCount}#}`;

    const updatedMessage =
        formData.messageText.trim() === ""
            ? variable
            : formData.messageText + " " + variable;

    setFormData({
        ...formData,
        messageText: updatedMessage,
    });

    setVariableCount(prev => prev + 1);
};

    return(

        <div className="addcontent-template-container">
    {/*Form*/}
            <div className="addcontent-templateCard">
    {/*Content Template Type*/}
                <div className="addcontent-template-formGroup">
                    <label>Content Template Type:</label>
                    <div className="addcontent-template-radioGroup">
                        <label>
                            <input 
                            type="radio" 
                            name="contentType" 
                            value="Transactional"
                            checked={formData.contentType==="Transactional"}
                            onChange={handleChange}/>
                            Transactional
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="contentType"
                            value="Promotional"
                            checked={formData.contentType==="Promotional"}
                            onChange={handleChange}/>
                            Promotional
                        </label>
                        <label>
                            <input 
                            type="radio" 
                            name="contentType"
                            value="Service"
                            checked={formData.contentType==="Service"}
                            onChange={handleChange}/>
                            Service
                        </label>
                    </div>
                </div>

    {/*Sender ID*/}
                <div className="addcontent-template-formGroup"
                name="senderId"
                value={formData.senderId}
                onChange={handleChange}>
                    <label>Select Sender ID:</label>
                    <select 
                    name="senderId"
                    value={formData.senderId}
                    onChange={handleChange}>
                        <option value="">--Select--</option>
                        <option value="ABCDEF">ABCDEF</option>
                        <option value="ONEXTL">ONEXTL</option>
                    </select>
                    {errors.senderId&&(
                        <p className="error">{errors.senderId}</p>
                    )}
                </div>
              
            
    {/*Entity ID*/}
                <div className="addcontent-template-formGroup">
                    <label>Entity ID:</label>
                    <input
                    type="text"
                    name="entityId"
                    value={formData.entityId}
                    onChange={handleChange}
                    placeholder="Entity ID"/>
                    {errors.entityId&&(
                        <p className="error">{errors.entityId}</p>
                    )}
                </div>

                
    {/*Template Name*/}
                <div className="addcontent-template-formGroup">
                    <label>Content Template Name:</label>
                    <input
                    type="text"
                    name="templateName"
                    value={formData.templateName}
                    onChange={handleChange}
                    placeholder="Template Name"/>
                     {errors.templateName && (
                         <p className="error">
                            {errors.templateName}
                                </p> 
                                  )}
                        </div>
                
                
    {/*Template description*/}
                <div className="addcontent-template-formGroup">
                    <label>Content Template Description:</label>
                    <textarea
                    name="templateDescription"
                    value={formData.templateDescription}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Template Description"></textarea>
                    {errors.templateDescription && (
                    <p className="error">
                    {errors.templateDescription}
                    </p>
                )}
                </div>

    {/*Operator Template ID*/}
                <div className="addcontent-template-formGroup">
                    <label>Operator Template ID:</label>
                    <input 
                    type="text"
                    
                    name="operatorTemplatedId"
                    value={formData.operatorTemplatedId}
                    onChange={handleChange}
                    placeholder="Operator Template Id"/>
                    {errors.operatorTemplatedId && (
                     <p className="error">
                       {errors.operatorTemplatedId}
                           </p>
                      )}
                </div>
               
    {/*Template Type*/}
                <div className="addcontent-template-formGroup">
                <label> TemplateType:</label>
                    <div className="radioGroup">
                        <label>
                         <input 
                            type="radio"
                            name="templateType"
                            value="Plain Text"
                            checked={formData.templateType==="Plain Text"}
                            onChange={handleChange}/>
                            Plain Text
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="templateType"
                            value="Unicode"
                            checked={formData.templateType==="Unicode"}
                            onChange={handleChange}/>
                            Unicode
                        </label>
                    </div>
                </div>
                
                
    {/*Message Text*/}
                    <div className="addcontent-template-messageRow">
                     <label>Message Text:</label>
                      <div className="addcontent-template-messageBox">
                    <textarea
                        name="messageText"
                        value={formData.messageText}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Message Text"
                        ></textarea>
                        <div className="variablebtn">
                            <button 
                            type="button"
                            onClick={handleAddVariable}
                            >Add Variales</button>
                        </div>
                        {errors.messageText && (
                          <p className="error">
                            {errors.messageText}
                          </p>
                          )}
                        </div>
                        </div>
                
                
    {/*Status*/}
                <div className="addcontent-template-formGroup">
                    <label>Status:</label>
                    <select 
                    name="status"
                    value={formData.status}
                    onChange={handleChange}> 
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                
                
    {/*Buttons*/}
    <form onSubmit={handleSubmit}>
    <div className="addcontent-template-buttongroup">
    <button className="addcontetn-template-previewBtn"
       type="submit">
          Preview
         </button>

       <button className="addcontent-tempalte-cancelBtn"
                    type="button">
                        Cancel
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default AddContentTemplate;