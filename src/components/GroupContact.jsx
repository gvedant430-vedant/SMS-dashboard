import { useState } from "react";
import "../css/GroupContact.css";

function GroupContacts() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="group-contacts">
      <h1 className="title">Group Contacts</h1>

      <div className="tabs">
        <button
          className={activeTab === "add" ? "active" : ""}
          onClick={() => setActiveTab("add")}
        >
          Add Group
        </button>

        <button
          className={activeTab === "list" ? "active" : ""}
          onClick={() => setActiveTab("list")}
        >
          List Group
        </button>
      </div>

      {/* ADD GROUP */}

      {activeTab === "add" && (
        <div className="card">
          <div className="row">

            <div className="field">
              <label>Group Name</label>

              <input
                type="text"
                placeholder="Group Name"
              />

              <small>
                NOTE: *no space allowed
              </small>
            </div>

            <div className="field">
              <label>Description</label>

              <input
                type="text"
                placeholder="Department Name"
              />
            </div>

            <div className="btn-group">
              <button className="submit-btn">
                Submit
              </button>

              <button className="cancel-btn">
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

      {/* LIST GROUP */}

      {activeTab === "list" && (
        <>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Group Contact"
            />
          </div>

          <table className="group-table">
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
                  className="no-data"
                >
                  No group found.
                </td>
              </tr>
            </tbody>
          </table>

          <p className="entries">
            There are total 0 entries
          </p>
        </>
      )}
    </div>
  );
}

export default GroupContacts;