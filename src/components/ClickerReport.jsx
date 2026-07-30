import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../css/ClickerReport.css";

function ClickerReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="clickerreport-container">
      <h1 className="clickereport-title">Clicker Report</h1>

      <div className="clickreportfilterCard">
        <div className="clickreport-field">
          <label>From Date:</label>

          <div className="clickreport-dateWrapper">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
              className="clickerreport-dateInput"
            />
            <FaRegCalendarAlt className="clickreport-calendarIcon" />
          </div>
        </div>

        <div className="clickreport-field">
          <label>To Date:</label>

          <div className="clickreport-dateWrapper">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
              className="clickerreport-dateInput"
            />
            <FaRegCalendarAlt className="clickreport-calendarIcon" />
          </div>
        </div>

        <div className="clickreport-field">
          <label>Mobile Number:</label>

          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="mobile-input"
          />
        </div>

        <button className="clickreport-submitBtn">Submit</button>
      </div>

      <div className="clickreport-tableSection">
        <table className="clickreport-table">
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
              <td colSpan="6" className="clickreport-noData">
                No Data Available
              </td>
            </tr>
          </tbody>
        </table>

        <div className="clickreport-entryText">
          There are total <strong>0</strong> entries
        </div>
      </div>
    </div>
  );
}

export default ClickerReport;