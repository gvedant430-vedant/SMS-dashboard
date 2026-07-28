import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaDownload } from "react-icons/fa";
import"../css/TemplateIdWiseReport.css";

function TemplateIdReport() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="template-report-container">
      <h1 className="report-title">Template ID Report</h1>

      {/* Card */}
      <div className="report-card">
        <div className="left-section">
          <label>Date:</label>

          <div className="date-wrapper">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyyy"
              className="date-input"
            />
            <FaRegCalendarAlt className="calendar-icon" />
          </div>

          <button className="submit-btn">Submit</button>
        </div>

        <div className="right-section">
          <button className="download-btn">
            <FaDownload /> .csv
          </button>

          <button className="download-btn">
            <FaDownload /> .pdf
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Enter Template ID" />
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>TEMPLATE ID</th>
              <th>TOTAL SUBMIT</th>
              <th>TOTAL DELIVERED</th>
              <th>TOTAL FAILED</th>
              <th>TOTAL AWAITED</th>
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

export default TemplateIdReport;