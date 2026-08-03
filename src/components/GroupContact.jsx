import { useState } from "react";
import "../css/GroupContact.css";

function GroupContacts() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="groupcontacts-container">
      <h1 className="groupcontacts-title">Group Contacts</h1>

      <div className="groupcontacts-tabs">
        <button
          className={activeTab === "add" ? "groupcontacts-active" : ""}
          onClick={() => setActiveTab("add")}
        >
          Add Group
        </button>

        <button
          className={activeTab === "list" ? "groupcontacts-active" : ""}
          onClick={() => setActiveTab("list")}
        >
          List Group
        </button>
      </div>

      {/* ADD GROUP */}

      {activeTab === "add" && (
        <div className="groupcontacts-card">
          <div className="groupcontacts-row">

            <div className="groupcontacts-field">
              <label>Group Name</label>

              <input
                type="text"
                placeholder="Group Name"
              />

              <small>
                NOTE: *no space allowed
              </small>
            </div>

            <div className="groupcontacts-field">
              <label>Description</label>

              <input
                type="text"
                placeholder="Department Name"
              />
            </div>

            <div className="groupcontacts-btnGroup">
              <button className="groupcontacts-submitBtn">
                Submit
              </button>

              <button className="groupcontacts-cancelBtn">
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

      {/* LIST GROUP */}

      {activeTab === "list" && (
        <>
          <div className="groupcontacts-searchBox">
            <input
              type="text"
              placeholder="Search Group Contact"
            />
          </div>

          <table className="groupcontacts-groupTable">
            <thead>
              <tr>
                <th>SR. NO.</th>
                <th>GROUP NAME</th>
                <th>DESCRIPTION</th>
                <th>TOTAL NUMBERS IN GROUP</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan="5"
                  className="groupcontacts-noData"
                >
                  No group found.
                </td>
              </tr>
            </tbody>
          </table>

          <p className="groupcontacts-entries">
            There are total 0 entries
          </p>
        </>
      )}
    </div>
  );
}

export default GroupContacts;