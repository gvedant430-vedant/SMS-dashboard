import { useState } from "react";
import "../css/AddSenderId.css";
import AddSenderform from "../components/AddSenderForm";
import UploadSenderId from "../components/UploadSenderId";
import SenderIdList from "../components/SenderIdList";

function AddSenderID() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="add-sender-id-container">

      <h1 className="add-sender-id-title">
        Add Sender ID
      </h1>

      <div className="add-sender-id-tabs">

        <button
          className={
            activeTab === "add"
              ? "add-sender-id-tab add-sender-id-active"
              : "add-sender-id-tab"
          }
          onClick={() => setActiveTab("add")}
        >
          Add
        </button>

        <button
          className={
            activeTab === "upload"
              ? "add-sender-id-tab add-sender-id-active"
              : "add-sender-id-tab"
          }
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </button>

        <button
          className={
            activeTab === "list"
              ? "add-sender-id-tab add-sender-id-active"
              : "add-sender-id-tab"
          }
          onClick={() => setActiveTab("list")}
        >
          Sender ID List
        </button>

      </div>

      {/* Add */}
      {activeTab === "add" && (
        <div className="add-sender-id-content">
          <AddSenderform />
        </div>
      )}

      {/* Upload */}
      {activeTab === "upload" && (
        <div className="add-sender-id-content">
          <UploadSenderId />
        </div>
      )}

      {/* Sender ID List */}
      {activeTab === "list" && (
        <div className="add-sender-id-content">
          <SenderIdList />
        </div>
      )}

    </div>
  );
}

export default AddSenderID;