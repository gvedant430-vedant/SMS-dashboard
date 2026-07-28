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
      <h1 className="vmn-title">VMN Report</h1>

      <div className="vmn-filter-card">
        <div className="vmn-field">
          <label>From Date:</label>

          <div className="date-box">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
              className="date-input"
            />
            <FaRegCalendarAlt className="calendar-icon" />
          </div>
        </div>

        <div className="vmn-field">
          <label>To Date:</label>

          <div className="date-box">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
              className="date-input"
            />
            <FaRegCalendarAlt className="calendar-icon" />
          </div>
        </div>

        <div className="vmn-field">
          <label>VMN Numbers:</label>

          <select className="vmn-select">
            <option>Select VMN Number</option>
            <option>9876543210</option>
            <option>9876543211</option>
          </select>
        </div>
      </div>

      <div className="btn-row">
        <button className="submit-btn">Submit</button>

        <button className="download-btn">
          <FaDownload />
          Download
        </button>
      </div>

      <div className="table-top">
        <h3>Total VMN Count: 0</h3>

        <input
          type="text"
          placeholder="Search VMN Report"
          className="search-input"
        />
      </div>

      <div className="table-wrapper">
        <table>
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
              <td colSpan="6" className="no-data">
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