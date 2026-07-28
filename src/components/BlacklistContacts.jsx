import { useState } from "react";
import "../css/BlacklistContacts.css";

function BlacklistContacts() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="blacklist-container">
      <h1 className="page-title">Blacklist Contacts</h1>

      <div className="tabs">
        <button
          className={activeTab === "add" ? "active" : ""}
          onClick={() => setActiveTab("add")}
        >
          Add
        </button>

        <button
          className={activeTab === "upload" ? "active" : ""}
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </button>

        <button
          className={activeTab === "view" ? "active" : ""}
          onClick={() => setActiveTab("view")}
        >
          View/Delete
        </button>
      </div>

      {/* ADD TAB */}
      {activeTab === "add" && (
        <div className="card">
          <h2>Add Blacklist Number</h2>

          <div className="form-row">
            <label>Mobile Number</label>

            <div className="mobile-input">
              <span>+91</span>
              <input
                type="text"
                placeholder="Enter Blacklist Number"
              />
            </div>
          </div>

          <div className="form-row">
            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <div className="btn-group">
            <button className="add-btn">Add</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}

      {/* UPLOAD TAB */}
      {activeTab === "upload" && (
        <div className="card">
          <h2>Upload Blacklist Number</h2>

          <div className="form-row">
            <label>Choose File</label>

            <div>
              <input type="file" />

              <p className="note">
                NOTE: only .txt files are allowed. It'll only
                accept a file having numbers max. 50,000
              </p>

              <a href="/">Sample File</a>
            </div>
          </div>

          <div className="form-row">
            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <div className="btn-group">
            <button className="add-btn">Upload</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}

      {/* VIEW DELETE TAB */}
      {activeTab === "view" && (
        <div className="card">
          <div className="search-section">
            <div className="search-box">
              <label>Search Mobile Number</label>

              <div className="mobile-input">
                <span>+91</span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>

              <button className="search-btn">
                Search
              </button>
            </div>

            <div className="search-box">
              <label>Description</label>

              <select>
                <option>
                  --Select Description--
                </option>
              </select>

              <button className="search-btn">
                Search
              </button>
            </div>
          </div>

          <div className="top-actions">
            <button className="download-btn">
              Download
            </button>

            <button className="delete-btn">
              Delete Selected
            </button>
          </div>

          <table>
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
      )}
    </div>
  );
}

export default BlacklistContacts;