import { useState } from "react";
import "../css/IndividualContacts.css";

function IndividualContacts() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="individual-contacts">
      <h1 className="title">Individual Contacts</h1>

      <div className="tabs">
        <button
          className={activeTab === "add" ? "active" : ""}
          onClick={() => setActiveTab("add")}>
          Add Contacts
        </button>

        <button
          className={activeTab === "upload" ? "active" : ""}
          onClick={() => setActiveTab("upload")}>
          Upload Contacts
        </button>

        <button
          className={activeTab === "search" ? "active" : ""}
          onClick={() => setActiveTab("search")}>
          Search Contacts
        </button>
      </div>

      {/* ADD CONTACTS */}
      {activeTab === "add" && (
        <div className="card">
          <div className="row">
            <div className="field">
              <label>Group Name</label>
              <select>
                <option>Select a Group</option>
              </select>
            </div>

            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="field">
              <label>Mobile Number</label>
              <div className="mobile-box">
                <span>+91</span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <button className="green-btn">
              Add Contact
            </button>
          </div>
        </div>
      )}

      {/* UPLOAD CONTACTS */}
      {activeTab === "upload" && (
        <div className="card">
          <div className="row">
            <div className="field">
              <label>Group Name</label>
              <select>
                <option>Select a Group</option>
              </select>
            </div>

            <div className="field">
              <label>Choose File</label>
              <input type="file" />
              <small>
                NOTE: only .txt/.csv allowed
              </small>
            </div>

            <button className="green-btn">
              Upload Contact
            </button>
          </div>
        </div>
      )}

      {/* SEARCH CONTACTS */}
      {activeTab === "search" && (
        <>
          <div className="card">
            <div className="row">
              <div className="field">
                <label>Group Name</label>
                <select>
                  <option>Select a Group</option>
                </select>
              </div>

              <div className="field">
                <label>Mobile Number</label>

                <div className="mobile-box">
                  <span>+91</span>

                  <input
                    type="text"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="search-btns">
                <button className="green-btn">
                  Search
                </button>

                <button className="black-btn">
                  All Contacts
                </button>
              </div>
            </div>
          </div>

          <div className="table-actions">
            <button className="black-btn">
              Download
            </button>

            <button className="delete-btn">
              Delete Selected
            </button>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search Contact List"
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>GROUP NAME</th>
                <th>CONTACT NUMBER</th>
                <th>CONTACT NAME</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="4">
                  No contacts found.
                </td>
              </tr>
            </tbody>
          </table>

          <p>There are total 0 entries</p>
        </>
      )}
    </div>
  );
}

export default IndividualContacts;