import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../css/DetailedReport.css";

function DetailedReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="detailed-report-container">
      <h1 className="report-title">Detailed Report</h1>

      <div className="report-card">
        <div className="form-row">
          {/* From Date */}
          <div className="form-group">
            <label>From Date:</label>

            <div className="date-picker-wrapper">
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

            <div className="date-picker-wrapper">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd-MM-yyyy"
                className="date-input"
              />
              <FaRegCalendarAlt className="calendar-icon" />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="input-field"
            />
          </div>
        </div>

        <div className="form-row">
          {/* Sender ID */}
          <div className="form-group">
            <label>Sender ID:</label>
            <input
              type="text"
              placeholder="Enter Sender Id"
              className="input-field"
            />
          </div>

          {/* Message ID */}
          <div className="form-group">
            <label>Message ID:</label>
            <input
              type="text"
              placeholder="Enter Message Id"
              className="input-field"
            />
          </div>

          <div className="btn-box">
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>RECEIVE DATE</th>
              <th>MESSAGE ID</th>
              <th>MOBILE NUMBER</th>
              <th>SENT DATE</th>
              <th>SENDER ID</th>
              <th>DELIVERY STATUS</th>
              <th>ERROR CODE</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="7" className="no-data">
                No Data Available
              </td>
            </tr>
          </tbody>
        </table>

        <p className="entries-text">
          There are total <strong>0</strong> entries
        </p>
      </div>
    </div>
  );
}

export default DetailedReport;