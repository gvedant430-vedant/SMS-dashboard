import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../css/ClickerReport.css";

function ClickerReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="clicker-report">
      <h1 className="clicker-title">Clicker Report</h1>

      <div className="filter-card">
        <div className="field">
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

        <div className="field">
          <label>To Date:</label>

          <div className="date-wrapper">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
              className="date-input"
            />
            <FaRegCalendarAlt className="calendar-icon" />
          </div>
        </div>

        <div className="field">
          <label>Mobile Number:</label>

          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="mobile-input"
          />
        </div>

        <button className="submit-btn">Submit</button>
      </div>

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>CAMPAIGN NAME</th>
              <th>CHILD SHORTURL</th>
              <th>MOBILE NUMBER</th>
              <th>CREATED DATE</th>
              <th>USER IP ADDRESS</th>
              <th>BROWSER DETAILS</th>
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

        <div className="entry-text">
          There are total <strong>0</strong> entries
        </div>
      </div>
    </div>
  );
}

export default ClickerReport;