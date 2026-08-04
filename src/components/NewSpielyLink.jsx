import { useState } from "react";
import "../css/NewSpielyLink.css";

function NewSpielyLink() {
  const [activeTab, setActiveTab] = useState("create");

  const initialFormData = {
    name: "",
    isDynamic: "No",
    domain: "",
    headerType: "Trans",
    header: "",
    protocol: "http://",
    longUrl: "",
    callbackProtocol: "http://",
    callbackUrl: "",
    shortCode: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Short URL Created Successfully");
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="newspielylink-container">
      <h1 className="newspielylink-title">New Short URL</h1>

      {/* Tabs */}
      <div className="newspielylink-tabs">
        <button
          type="button"
          className={
            activeTab === "create"
              ? "newspielylink-active"
              : ""
          }
          onClick={() => setActiveTab("create")}
        >
          Create
        </button>

        <button
          type="button"
          className={
            activeTab === "view"
              ? "newspielylink-active"
              : ""
          }
          onClick={() => setActiveTab("view")}
        >
          View
        </button>
      </div>

      {/* CREATE TAB */}
      {activeTab === "create" && (
        <form
          className="newspielylink-formCard"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="newspielylink-row">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Dynamic */}
          <div className="newspielylink-row">
            <label>Is Dynamic</label>

            <div className="newspielylink-radioGroup">
              <label>
                <input
                  type="radio"
                  name="isDynamic"
                  value="Yes"
                  checked={formData.isDynamic === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="isDynamic"
                  value="No"
                  checked={formData.isDynamic === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Domain */}
          <div className="newspielylink-row">
            <label>Select Domain</label>

            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="Domain1">Domain 1</option>
              <option value="Domain2">Domain 2</option>
            </select>
          </div>

          {/* Header */}
          <div className="newspielylink-row">
            <label>Header</label>

            <div className="newspielylink-headerBox">
              <div className="newspielylink-radioGroup">
                <label>
                  <input
                    type="radio"
                    name="headerType"
                    value="Trans"
                    checked={formData.headerType === "Trans"}
                    onChange={handleChange}
                  />
                  Trans
                </label>

                <label>
                  <input
                    type="radio"
                    name="headerType"
                    value="Promo"
                    checked={formData.headerType === "Promo"}
                    onChange={handleChange}
                  />
                  Promo
                </label>
              </div>

              <select
                name="header"
                value={formData.header}
                onChange={handleChange}
              >
                <option value="">--Select--</option>
                <option value="ABCDEF">ABCDEF</option>
                <option value="ONEXTL">ONEXTL</option>
              </select>
            </div>
          </div>

          {/* Long URL */}
          <div className="newspielylink-row">
            <label>Long URL</label>

            <div className="newspielylink-urlBox">
              <select
                name="protocol"
                value={formData.protocol}
                onChange={handleChange}
              >
                <option value="http://">http://</option>
                <option value="https://">https://</option>
              </select>

              <input
                type="text"
                name="longUrl"
                placeholder="Enter Long URL"
                value={formData.longUrl}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Callback URL */}
          <div className="newspielylink-row">
            <label>Callback URL</label>

            <div className="newspielylink-urlBox">
              <select
                name="callbackProtocol"
                value={formData.callbackProtocol}
                onChange={handleChange}
              >
                <option value="http://">http://</option>
                <option value="https://">https://</option>
              </select>

              <input
                type="text"
                name="callbackUrl"
                placeholder="Enter Callback URL"
                value={formData.callbackUrl}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Short URL Code */}
          <div className="newspielylink-row">
            <label>Short URL Code</label>

            <input
              type="text"
              name="shortCode"
              value={formData.shortCode}
              readOnly
              placeholder="Short URL code will be generated after submit"
            />
          </div>

          {/* Buttons */}
          <div className="newspielylink-buttons">
            <button
              type="submit"
              className="newspielylink-saveBtn"
            >
              Save
            </button>

            <button
              type="button"
              className="newspielylink-resetBtn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      )}

      {/* VIEW TAB */}
      {activeTab === "view" && (
        <div className="newspielylink-viewContainer">

          <div className="newspielylink-searchBox">
            <input
              type="text"
              placeholder="Search Short URL"
            />
          </div>

          <table className="newspielylink-viewTable">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>DOMAIN</th>
                <th>LONG URL</th>
                <th>SHORT URL</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan="6"
                  className="newspielylink-noData"
                >
                  No Data Available
                </td>
              </tr>
            </tbody>
          </table>

          <p className="newspielylink-entries">
            There are total <strong>0</strong> entries
          </p>

        </div>
      )}
    </div>
  );
}

export default NewSpielyLink;
