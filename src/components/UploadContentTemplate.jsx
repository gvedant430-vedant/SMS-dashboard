import { useState } from "react";
import "../css/UploadContentTemplate.css";

function UploadContentTemplate() {
  const [formData, setFormData] = useState({
    fileType: "TEMPLATE_FILE",
    entityId: "",
    templateFileType: "CSV",
    file: null,
    operator: "",
  });

  const [errors, setErrors] = useState({});

  const validationForm = () => {
    const newErrors = {};

    if (!formData.entityId.trim()) {
      newErrors.entityId = "Entity ID is required";
    }

    if (!formData.file) {
      newErrors.file = "Please select a file";
    }

    if (!formData.operator) {
      newErrors.operator = "Operator is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));

    setErrors((prev) => ({
      ...prev,
      file: "",
    }));
  };

  const handleReset = () => {
    setFormData((prev) => ({
      ...prev,
      file: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationForm()) {
      alert("Template Uploaded Successfully");
      console.log(formData);
    }
  };

  const handleCancel = () => {
    setFormData({
      fileType: "TEMPLATE_FILE",
      entityId: "",
      templateFileType: "CSV",
      file: null,
      operator: "",
    });

    setErrors({});
  };

  return (
    <form
      className="upload-content-template"
      onSubmit={handleSubmit}
    >

      {/* File Type */}
      <div className="upload-content-template-row">
        <label>File Type</label>

        <div className="upload-content-template-radio-group">
          <label>
            <input
              type="radio"
              name="fileType"
              value="TEMPLATE_FILE"
              checked={formData.fileType === "TEMPLATE_FILE"}
              onChange={handleChange}
            />
            TEMPLATE_FILE
          </label>
        </div>
      </div>

      {/* Entity ID */}
      <div className="upload-content-template-row">
        <label>Entity ID</label>

        <input
          className="upload-content-template-input"
          type="text"
          name="entityId"
          value={formData.entityId}
          onChange={handleChange}
          placeholder="Enter Entity ID"
        />

        {errors.entityId && (
          <p className="upload-content-template-error">
            {errors.entityId}
          </p>
        )}
      </div>

      {/* Template File Type */}
      <div className="upload-content-template-row">
        <label>Template File Type</label>

        <div className="upload-content-template-radio-group">

          <label>
            <input
              type="radio"
              name="templateFileType"
              value="CSV"
              checked={formData.templateFileType === "CSV"}
              onChange={handleChange}
            />
            CSV
          </label>

          <label>
            <input
              type="radio"
              name="templateFileType"
              value="XLSX"
              checked={formData.templateFileType === "XLSX"}
              onChange={handleChange}
            />
            XLSX
          </label>

          <label>
            <input
              type="radio"
              name="templateFileType"
              value="XLS"
              checked={formData.templateFileType === "XLS"}
              onChange={handleChange}
            />
            XLS
          </label>

        </div>
      </div>

      {/* File */}
      <div className="upload-content-template-file-upload">
        <label>File</label>

        <div className="upload-content-template-file-box">

          <input
            className="upload-content-template-file-input"
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
          />

          {errors.file && (
            <p className="upload-content-template-error">
              {errors.file}
            </p>
          )}

          <button
            type="button"
            className="upload-content-template-reset-btn"
            onClick={handleReset}
          >
            Reset File
          </button>

          <p className="upload-content-template-note">
            Only .csv, .xlsx and .xls files are allowed
          </p>

        </div>
      </div>

      {/* Operator */}
      <div className="upload-content-template-row">
        <label>Operator</label>

        <select
          className="upload-content-template-select"
          name="operator"
          value={formData.operator}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="Airtel">Airtel</option>
          <option value="Jio">Jio</option>
          <option value="Vi">Vi</option>
        </select>

        {errors.operator && (
          <p className="upload-content-template-error">
            {errors.operator}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="upload-content-template-buttons">

        <button
          type="submit"
          className="upload-content-template-upload-btn"
        >
          Upload
        </button>

        <button
          type="button"
          className="upload-content-template-cancel-btn"
          onClick={handleCancel}
        >
          Cancel
        </button>

      </div>

    </form>
  );
}

export default UploadContentTemplate;