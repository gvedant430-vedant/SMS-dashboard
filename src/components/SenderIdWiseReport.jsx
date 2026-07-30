import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "../css/SenderIdWiseReport.css";

function SenderIdWiseReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const data = [];

  return (
    <div className="sender-report">
      <h1 className="report-title">Sender ID Report</h1>

      {/* Filter Section */}
      <div className="report-card">
        <div className="senderidwisereport-date-section">
          <label>From Date:</label>

          <div className="datepicker-wrapper">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="calendar-icon" />
          </div>
        </div>

        <div className="senderidwisereport-date-section">
          <label>To Date:</label>

          <div className="datepicker-wrapper">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="calendar-icon" />
          </div>
        </div>

        <div className="button-group">
          <button className="submit-btn">Submit</button>
          <button className="download-btn">Download</button>
        </div>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Enter Sender ID" />
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>SUMMARY DATE</th>
              <th>SENDER ID</th>
              <th>TOTAL REQUEST</th>
              <th>TOTAL REJECTED</th>
              <th>TOTAL SUBMIT</th>
              <th>TOTAL DELIVERED</th>
              <th>TOTAL FAILED</th>
              <th>TOTAL AWAITED</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">
                  No Data Available
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.summaryDate}</td>
                  <td>{item.senderId}</td>
                  <td>{item.totalRequest}</td>
                  <td>{item.totalRejected}</td>
                  <td>{item.totalSubmit}</td>
                  <td>{item.totalDelivered}</td>
                  <td>{item.totalFailed}</td>
                  <td>{item.totalAwaited}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="entries-text">
        There are total <strong>0</strong> entries
      </p>
    </div>
  );
}

export default SenderIdWiseReport;