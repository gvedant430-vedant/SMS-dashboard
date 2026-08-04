import { useState } from "react";

import AddContentTemplate from "../components/AddContentTemplate";
import UploadContentTemplate from "../components/UploadContentTemplate";
import ViewContentTemplate from "../components/ViewContentTemplate";
import "../css/TemplateManagement.css";

function TemplateManagement() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="template-management">

      <h2 className="template-management-title">
        Template Management
      </h2>

      {/* Tabs */}
      <div className="template-management-tabs">

        <button
          className={
            activeTab === "add"
              ? "template-management-tab template-management-tab-active"
              : "template-management-tab"
          }
          onClick={() => setActiveTab("add")}
        >
          Add Content Template
        </button>

        <button
          className={
            activeTab === "upload"
              ? "template-management-tab template-management-tab-active"
              : "template-management-tab"
          }
          onClick={() => setActiveTab("upload")}
        >
          Upload Content Template
        </button>

        <button
          className={
            activeTab === "view"
              ? "template-management-tab template-management-tab-active"
              : "template-management-tab"
          }
          onClick={() => setActiveTab("view")}
        >
          View Content Template
        </button>

      </div>

      {/* Tab Content */}
      <div className="template-management-content">

        {activeTab === "add" && (
          <AddContentTemplate />
        )}

        {activeTab === "upload" && (
          <UploadContentTemplate />
        )}

        {activeTab === "view" && (
          <ViewContentTemplate />
        )}

      </div>

    </div>
  );
}

export default TemplateManagement;