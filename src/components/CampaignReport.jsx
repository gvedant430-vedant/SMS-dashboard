import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import "../css/CampaignReport.css";

function CampaignReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="campaign-container">
      <h1 className="campaign-title">Campaign Report</h1>

      <div className="report-card">
        <div className="date-group">
          <label>From Date:</label>

          <div className="date-picker-box">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="calendar-icon" />
          </div>
        </div>

        <div className="date-group">
          <label>To Date:</label>

          <div className="date-picker-box">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="calendar-icon" />
          </div>
        </div>

        <div className="btn-section">
          <button className="submit-btn">Submit</button>
          <button className="download-btn">Download</button>
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search Campaign Report"
          className="search-box"
        />
      </div>

      <table className="report-table">
        <thead>
          <tr>
            <th>SUMMARY DATE</th>
            <th>CAMPAIGN NAME</th>
            <th>TOTAL REQUEST</th>
            <th>TOTAL REJECTED</th>
            <th>TOTAL SUBMIT</th>
            <th>TOTAL DELIVERED</th>
            <th>TOTAL FAILED</th>
            <th>TOTAL AWAITED</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="8" className="no-data">
              No Data Available
            </td>
          </tr>
        </tbody>
      </table>

      <p className="entries-text">There are total 0 entries</p>
    </div>
  );
}

export default CampaignReport;