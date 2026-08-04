import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaDownload } from "react-icons/fa";
import "../css/VMNReport.css";

function VMNReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="vmn-report-container">

      <h1 className="vmn-report-title">
        VMN Report
      </h1>

      {/* Filter Card */}
      <div className="vmn-report-filter-card">

        {/* From Date */}
        <div className="vmn-report-field">
          <label>From Date:</label>

          <div className="vmn-report-date-box">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
              className="vmn-report-date-input"
            />

            <FaRegCalendarAlt className="vmn-report-calendar-icon" />
          </div>
        </div>

        {/* To Date */}
        <div className="vmn-report-field">
          <label>To Date:</label>

          <div className="vmn-report-date-box">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
              className="vmn-report-date-input"
            />

            <FaRegCalendarAlt className="vmn-report-calendar-icon" />
          </div>
        </div>

        {/* VMN Numbers */}
        <div className="vmn-report-field">
          <label>VMN Numbers:</label>

          <select className="vmn-report-select">
            <option value="">Select VMN Number</option>
            <option value="9876543210">9876543210</option>
            <option value="9876543211">9876543211</option>
          </select>
        </div>

      </div>

      {/* Buttons */}
      <div className="vmn-report-button-row">

        <button className="vmn-report-submit-btn">
          Submit
        </button>

        <button className="vmn-report-download-btn">
          <FaDownload />
          Download
        </button>

      </div>

      {/* Table Top */}
      <div className="vmn-report-table-top">

        <h3 className="vmn-report-total-count">
          Total VMN Count: 0
        </h3>

        <input
          type="text"
          placeholder="Search VMN Report"
          className="vmn-report-search-input"
        />

      </div>

      {/* Table */}
      <div className="vmn-report-table-wrapper">

        <table className="vmn-report-table">

          <thead>
            <tr>
              <th>VMN NUMBER</th>
              <th>MOBILE NUMBER</th>
              <th>MESSAGE CONTENT</th>
              <th>DATE</th>
              <th>CARRIER NAME</th>
              <th>CIRCLE NAME</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="6"
                className="vmn-report-no-data"
              >
                No Data Available
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default VMNReport;