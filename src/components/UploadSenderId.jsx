import { useState } from "react";
import "../css/UploadSenderId.css";

function UploadSenderId() {
  const [formData, setFormData] = useState({
    senderType: "Promotional",
    entityId: "",
    headerId: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleReset = () => {
    setFormData({
      senderType: "Promotional",
      entityId: "",
      headerId: "",
      file: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted");
    console.log(formData);
  };

  return (
    <div className="upload-sender-id-container">

      <div className="upload-sender-id-card">

        <form onSubmit={handleSubmit}>

          {/* Sender Type */}
          <div className="upload-sender-id-row">
            <label>Sender Id Type:</label>

            <div className="upload-sender-id-radio-group">

              <label>
                <input
                  type="radio"
                  name="senderType"
                  value="Promotional"
                  checked={formData.senderType === "Promotional"}
                  onChange={handleChange}
                />
                Promotional
              </label>

              <label>
                <input
                  type="radio"
                  name="senderType"
                  value="Others"
                  checked={formData.senderType === "Others"}
                  onChange={handleChange}
                />
                Others (Transactional/Service Implicit/Service Explicit)
              </label>

            </div>
          </div>

          {/* Entity ID */}
          <div className="upload-sender-id-row">
            <label>New/Existing Entity ID:</label>

            <select
              className="upload-sender-id-select"
              name="entityId"
              value={formData.entityId}
              onChange={handleChange}
            >
              <option value="">
                Enter Existing/New Entity ID
              </option>

              <option value="Entity1">Entity 1</option>
              <option value="Entity2">Entity 2</option>
            </select>
          </div>

          {/* Header ID */}
          <div className="upload-sender-id-row">
            <label>Header ID:</label>

            <input
              className="upload-sender-id-input"
              type="text"
              name="headerId"
              placeholder="Enter Header Id"
              value={formData.headerId}
              onChange={handleChange}
            />
          </div>

          {/* File Upload */}
          <div className="upload-sender-id-row">

            <label>Add Sender Id File:</label>

            <div className="upload-sender-id-file-section">

              <input
                className="upload-sender-id-file-input"
                type="file"
                name="file"
                accept=".csv"
                onChange={handleChange}
              />

              <button
                type="button"
                className="upload-sender-id-reset-btn"
                onClick={handleReset}
              >
                Reset File
              </button>

              <p className="upload-sender-id-note">
                NOTE: only .csv (comma separated) file is allowed
              </p>

              <a
                href="."
                className="upload-sender-id-sample-link"
              >
                Sample File
              </a>

            </div>

          </div>

          {/* Upload Button */}
          <button
            type="submit"
            className="upload-sender-id-upload-btn"
          >
            Upload
          </button>

        </form>

      </div>

    </div>
  );
}

export default UploadSenderId;