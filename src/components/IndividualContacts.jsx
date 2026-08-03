import { useState } from "react";
import "../css/IndividualContacts.css";

function IndividualContacts() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="individualcontacts-container">
      <h1 className="individualcontacts-title">Individual Contacts</h1>

      <div className="individualcontacts-tabs">
        <button
          className={activeTab === "add" ? "individualcontacts-active" : ""}
          onClick={() => setActiveTab("add")}>
          Add Contacts
        </button>

        <button
          className={activeTab === "upload" ? "individualcontacts-active" : ""}
          onClick={() => setActiveTab("upload")}>
          Upload Contacts
        </button>

        <button
          className={activeTab === "search" ? "individualcontacts-active" : ""}
          onClick={() => setActiveTab("search")}>
          Search Contacts
        </button>
      </div>

      {/* ADD CONTACTS */}
      {activeTab === "add" && (
        <div className="individualcontacts-card">
          <div className="individualcontacts-row">
            <div className="individualcontacts-field">
              <label>Group Name</label>
              <select>
                <option>Select a Group</option>
              </select>
            </div>

            <div className="individualcontacts-field">
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="individualcontacts-field">
              <label>Mobile Number</label>
              <div className="individualcontacts-mobileBox">
                <span>+91</span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <button className="individualcontacts-greenBtn">
              Add Contact
            </button>
          </div>
        </div>
      )}

      {/* UPLOAD CONTACTS */}
      {activeTab === "upload" && (
        <div className="individualcontacts-card">
          <div className="individualcontacts-row">
            <div className="individualcontacts-field">
              <label>Group Name</label>
              <select>
                <option>Select a Group</option>
              </select>
            </div>

            <div className="individualcontacts-field">
              <label>Choose File</label>
              <input type="file" />
              <small>
                NOTE: only .txt/.csv allowed
              </small>
            </div>

            <button className="individualcontacts-greenbtn">
              Upload Contact
            </button>
          </div>
        </div>
      )}

      {/* SEARCH CONTACTS */}
      {activeTab === "search" && (
        <>
          <div className="individualcontacts-card">
            <div className="individualcontacts-row">
              <div className="individualcontacts-field">
                <label>Group Name</label>
                <select>
                  <option>Select a Group</option>
                </select>
              </div>

              <div className="individualcontacts-field">
                <label>Mobile Number</label>

                <div className="individualcontacts-mobileBox">
                  <span>+91</span>

                  <input
                    type="text"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="individualcontacts-searchBtns">
                <button className="individualcontacts-greenBtn">
                  Search
                </button>

                <button className="individualcontacts-blackBtn">
                  All Contacts
                </button>
              </div>
            </div>
          </div>

          <div className="individualcontacts-tableActions">
            <button className="individualcontacts-blackBtn">
              Download
            </button>

            <button className="individualcontacts-deleteBtn">
              Delete Selected
            </button>
          </div>

          <div className="individualcontacts-searchBox">
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
                <td colSpan="4"
                className="individualcontacts-noData">
                  No contacts found.
                </td>
              </tr>
            </tbody>
          </table>

          <p className="individualcontacts-entries">There are total 0 entries</p>
        </>
      )}
    </div>
  );
}

export default IndividualContacts;