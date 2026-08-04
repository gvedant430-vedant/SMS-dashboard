import { useState } from "react";
import "../css/UploadCampaign.css";

function UploadCampaign() {
  const [formData, setFormData] = useState({
    campaignName: "user4-campaign-17072026-1125",
    fileType: "TXT",
    file: null,
    messageType: "Trans",
    senderId: "",
    template: "",
    encoding: "Plain Text",
    part: "Singlepart",
    message: "",
    shortUrl: "No",
    entityId: "",
    operatorTemplateId: "",
    schedule: "No",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData((prev) => ({
      ...prev,
      file: null,
    }));
  };

  return (
    <div className="uploadcampaign-container">
      <h1 className="uploadcampaign-title">Upload Campaign</h1>

      <form
        className="uploadcampaign-card"
        onSubmit={handleSubmit}
      >
        {/* Campaign Name */}
        <div className="uploadcampaign-row">
          <label>Campaign Name</label>

          <div>
            <input
              type="text"
              name="campaignName"
              value={formData.campaignName}
              onChange={handleChange}
            />

            <p className="uploadcampaign-note">
              NOTE: Special characters like SPACE %,[]|:".?/~ are not allowed.
            </p>
          </div>
        </div>

        {/* File Type */}
        <div className="uploadcampaign-row">
          <label>File Type</label>

          <div className="uploadcampaign-radioGroup">
            {["TXT", "XLS", "CSV", "ZIP"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="fileType"
                  value={type}
                  checked={formData.fileType === type}
                  onChange={handleChange}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Select File */}
        <div className="uploadcampaign-row">
          <label>Select File</label>

          <div>
            <div className="uploadcampaign-fileRow">
              <input
                type="file"
                name="file"
                accept=".txt,.xlsx,.xls,.csv,.zip"
                onChange={handleChange}
              />

              <button
                type="button"
                className="uploadcampaign-resetBtn"
                onClick={handleReset}
              >
                Reset File
              </button>
            </div>

            <p className="uploadcampaign-note">
              NOTE: .txt, .xls, .xlsx, .csv, .zip are allowed file types.
            </p>

            <a
              href="/"
              className="uploadcampaign-sampleLink"
            >
              Sample File
            </a>
          </div>
        </div>

        {/* Message Type */}
        <div className="uploadcampaign-row">
          <label>Message Type</label>

          <div className="uploadcampaign-radioGroup">
            {["Trans", "Promo", "Service"].map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="messageType"
                  value={item}
                  checked={formData.messageType === item}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Sender ID */}
        <div className="uploadcampaign-row">
          <label>Sender ID</label>

          <select
            name="senderId"
            value={formData.senderId}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
          </select>
        </div>

        {/* Template */}
        <div className="uploadcampaign-row">
          <label>Content Template Name</label>

          <select
            name="template"
            value={formData.template}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
          </select>
        </div>

        {/* Message Encoding */}
        <div className="uploadcampaign-row">
          <label>Message Encoding</label>

          <div className="uploadcampaign-radioGroup">
            {["Plain Text", "Unicode"].map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="encoding"
                  value={item}
                  checked={formData.encoding === item}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Message Part */}
        <div className="uploadcampaign-row">
          <label>Message Part</label>

          <div className="uploadcampaign-radioGroup">
            {["Singlepart", "Multipart"].map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="part"
                  value={item}
                  checked={formData.part === item}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Message Text */}
        <div className="uploadcampaign-row">
          <label>Message Text</label>

          <div>
            <textarea
              rows="5"
              name="message"
              placeholder="Original Message Text"
              value={formData.message}
              onChange={handleChange}
            />

            <p className="uploadcampaign-note">
              NOTE: xxxxxx will be replaced by actual shortcode up to 6 chars.
            </p>

            <h3 className="uploadcampaign-count">
              {formData.message.length} Character Count | SMS Credit
            </h3>
          </div>
        </div>

        {/* Short URL */}
        <div className="uploadcampaign-row">
          <label>Is ShortUrl Selected</label>

          <div className="uploadcampaign-radioGroup">
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

        {/* Entity ID */}
        <div className="uploadcampaign-row">
          <label>Entity ID</label>

          <input
            type="text"
            name="entityId"
            placeholder="Entity ID"
            value={formData.entityId}
            onChange={handleChange}
          />
        </div>

        {/* Operator Template ID */}
        <div className="uploadcampaign-row">
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
        <div className="uploadcampaign-row">
          <label>Schedule Message</label>

          <div className="uploadcampaign-radioGroup">
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
        <div className="uploadcampaign-btnGroup">
          <button
            type="submit"
            className="uploadcampaign-submitBtn"
          >
            Submit
          </button>

          <button
            type="button"
            className="uploadcampaign-cancelBtn"
            onClick={handleReset}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadCampaign;