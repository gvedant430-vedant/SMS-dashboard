import { useState } from "react";
import "../css/BlacklistContacts.css";

function BlacklistContacts() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="blacklist-container">
      <h1 className="blacklist-title">Blacklist Contacts</h1>

      <div className="blacklist-tabs">
        <button
          className={`blacklist-tab ${activeTab === "add" ? "blacklist-tab-active" : ""}`}
          onClick={() => setActiveTab("add")}
        >
          Add
        </button>

        <button
          className={`blacklist-tab ${activeTab === "upload" ? "blacklist-tab-active" : ""}`}
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </button>

        <button
          className={`blacklist-tab ${activeTab === "view" ? "blacklist-tab-active" : ""}`}
          onClick={() => setActiveTab("view")}
        >
          View/Delete
        </button>
      </div>

      {/* ADD TAB */}
      {activeTab === "add" && (
        <div className="blacklist-card">
          <h2>Add Blacklist Number</h2>

          <div className="blacklist-form-row">
            <label>Mobile Number</label>

            <div className="blacklist-mobile-input">
              <span>+91</span>
              <input
                type="text"
                placeholder="Enter Blacklist Number"
              />
            </div>
          </div>

          <div className="blacklist-form-row">
            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <div className="blacklist-btn-group">
            <button className="blacklist-add-btn">Add</button>
            <button className="blacklist-cancel-btn">Cancel</button>
          </div>
        </div>
      )}

      {/* UPLOAD TAB */}
      {activeTab === "upload" && (
        <div className="blacklist-card">
          <h2>Upload Blacklist Number</h2>

          <div className="blacklist-form-row">
            <label>Choose File</label>

            <div>
              <input type="file" />

              <p className="blacklist-note">
                NOTE: only .txt files are allowed. It'll only
                accept a file having numbers max. 50,000
              </p>

              <a href="/">Sample File</a>
            </div>
          </div>

          <div className="blacklist-form-row">
            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <div className="blacklist-btn-group">
            <button className="blacklist-add-btn">Upload</button>
            <button className="blacklist-cancel-btn">Cancel</button>
          </div>
        </div>
      )}

      {/* VIEW DELETE TAB */}
      {activeTab === "view" && (
        <div className="blacklist-card">
          <div className="blacklist-search-section">
            <div className="blacklist-search-box">
              <label>Search Mobile Number</label>

              <div className="blacklist-mobile-input">
                <span>+91</span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>

              <button className="blacklist-search-btn">
                Search
              </button>
            </div>

            <div className="blacklist-search-box">
              <label>Description</label>

              <select>
                <option>
                  --Select Description--
                </option>
              </select>

              <button className="blacklist-search-btn">
                Search
              </button>
            </div>
          </div>

          <div className="blacklist-top-actions">
            <button className="blacklist-download-btn">
              Download
            </button>

            <button className="blacklist-delete-btn">
              Delete Selected
            </button>
          </div>
<div className="blacklist-table-wrapper">
          <table className="blacklist-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>USER BLACKLIST NUMBER</th>
                <th>DESCRIPTION</th>
                <th>CREATED DATE</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>9876543210</td>
                <td>Testing</td>
                <td>22-07-2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      )}
    </div>
  );
}

export default BlacklistContacts;