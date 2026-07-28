import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../css/SummaryReport.css";

function SummaryReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="summary-container">
      <h1>Summary Report</h1>

      <div className="summary-box">
        {/*From Date*/}
        <div className="date-section">
          <label>From Date:</label>

          <div className="date-wrapper">
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            dateFormat="dd-MM-yyyy"
            className="date-input"/>
            <FaRegCalendarAlt className="calender-icon"/>
        </div>
        </div>

        {/*To Date*/}
        <div className="date-section">
          <label>To Date:</label>

          <div className="date-wrapper">
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            dateFormat="dd-MM-yyyy"
            className="date-input"/>
            <FaRegCalendarAlt className="calender-icon"/>
        </div>
        </div>

        <button className="submit-btn">Submit</button>

        <button className="download-btn">Download</button>
      </div>

      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>SUMMARY DATE</th>
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
              <td colSpan="7">No Data Available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="entries">
        There are total <b>0</b> entries
      </p>
    </div>
  );
}

export default SummaryReport;