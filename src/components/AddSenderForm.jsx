import { useState } from "react";
import "../css/AddSenderId.css";

function AddSenderform() {
  const [formData, setFormData] = useState({
    senderType: "Promotional",
    entityId: "",
    headerId: "",
    senderId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Sender ID Added Successfully");

    setFormData({
      senderType: "Promotional",
      entityId: "",
      headerId: "",
      senderId: "",
    });
  };

  return (
    <div className="sender-card">
      <form onSubmit={handleSubmit}>

        {/* Sender Type */}
        <div className="form-group">
          <label>Sender ID Type:</label>

          <div className="radio-group">
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
        <div className="form-group">
          <label>New / Existing Entity ID:</label>

          <select
            name="entityId"
            value={formData.entityId}
            onChange={handleChange}
          >
            <option value="">Enter Existing/New Entity ID</option>
            <option value="Entity1">Entity 1</option>
            <option value="Entity2">Entity 2</option>
            <option value="Entity3">Entity 3</option>
          </select>
        </div>

        {/* Header ID */}
        <div className="form-group">
          <label>Header ID:</label>

          <input
            type="text"
            name="headerId"
            placeholder="Enter Header ID"
            value={formData.headerId}
            onChange={handleChange}
          />
        </div>

        {/* Sender ID */}
        <div className="form-group">
          <label>Sender ID:</label>

          <input
            type="text"
            name="senderId"
            placeholder="Enter Numeric Sender ID"
            value={formData.senderId}
            onChange={handleChange}
          />
        </div>

        {/* Button */}
        <div className="btn-box">
          <button type="submit">Add</button>
        </div>

      </form>
    </div>
  );
}

export default AddSenderform;