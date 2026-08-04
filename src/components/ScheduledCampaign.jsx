import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../css/ScheduledCampaign.css";

function ScheduledCampaign() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [campaignType, setCampaignType] = useState("All");

  return (
    <div className="scheduledcampaign-container">
      <h1 className="scheduledcampaign-title">Scheduled Campaign</h1>

      <div className="scheduledcampaign-filterBox">

        {/* From Date */}
        <div className="scheduledcampaign-formGroup">
          <label>From Date:</label>

          <div className="scheduledcampaign-dateWrapper">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
              className="scheduledcampaign-dateInput"
            />
            <FaRegCalendarAlt className="scheduledcampaign-calendarIcon" />
          </div>
        </div>

        {/* To Date */}
        <div className="scheduledcampaign-formGroup">
          <label>To Date:</label>

          <div className="scheduledcampaign-dateWrapper">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              minDate={fromDate}
              dateFormat="dd-MM-yyyy"
              className="scheduledcampaign-dateInput"
            />
            <FaRegCalendarAlt className="scheduledcampaign-calendarIcon" />
          </div>
        </div>

        {/* Campaign Type */}
        <div className="scheduledcampaign-formGroup">
          <label>Campaign Type:</label>

          <select
            value={campaignType}
            onChange={(e) => setCampaignType(e.target.value)}
            className="scheduledcampaign-selectBox"
          >
            <option>All</option>
            <option>Quick Campaign</option>
            <option>Dynamic Campaign</option>
            <option>Group Campaign</option>
            <option>Upload Campaign</option>
          </select>
        </div>

        <button className="scheduledcampaign-submitBtn">Submit</button>
      </div>

      {/* Search */}
      <div className="scheduledcampaign-searchBox">
        <input type="text" placeholder="Search Campaign" />
      </div>

      {/* Table */}
      <table className="scheduledcampaign-table">
        <thead>
          <tr>
            <th>CAMPAIGN TYPE</th>
            <th>CAMPAIGN NAME</th>
            <th>SCHEDULED DATE</th>
            <th>SCHEDULED TIME</th>
            <th>SENDER ID</th>
            <th>MESSAGE TEXT</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="6"  className="scheduledcampaign-noData">
              No scheduled campaigns found
            </td>
          </tr>
        </tbody>
      </table>

      <p className="scheduledcampaign-entries">There are total <b>0</b> entries</p>
    </div>
  );
}

export default ScheduledCampaign;