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
    <div className="scheduled-container">
      <h1>Scheduled Campaign</h1>

      <div className="filter-box">

        {/* From Date */}
        <div className="form-group">
          <label>From Date:</label>

          <div className="date-wrapper">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
              className="date-input"
            />
            <FaRegCalendarAlt className="calendar-icon" />
          </div>
        </div>

        {/* To Date */}
        <div className="form-group">
          <label>To Date:</label>

          <div className="date-wrapper">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              minDate={fromDate}
              dateFormat="dd-MM-yyyy"
              className="date-input"
            />
            <FaRegCalendarAlt className="calendar-icon" />
          </div>
        </div>

        {/* Campaign Type */}
        <div className="form-group">
          <label>Campaign Type:</label>

          <select
            value={campaignType}
            onChange={(e) => setCampaignType(e.target.value)}
            className="select-box"
          >
            <option>All</option>
            <option>Quick Campaign</option>
            <option>Dynamic Campaign</option>
            <option>Group Campaign</option>
            <option>Upload Campaign</option>
          </select>
        </div>

        <button className="submit-btn">Submit</button>
      </div>

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search Campaign" />
      </div>

      {/* Table */}
      <table className="campaign-table">
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
            <td colSpan="6" className="no-data">
              No scheduled campaigns found
            </td>
          </tr>
        </tbody>
      </table>

      <p className="entries">There are total <b>0</b> entries</p>
    </div>
  );
}

export default ScheduledCampaign;