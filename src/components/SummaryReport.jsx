import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../css/SummaryReport.css";

function SummaryReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="summaryreport-container">
      <h1 className="summaryreport-title">Summary Report</h1>

      <div className="summaryreport-box">
        {/*From Date*/}
        <div className="summaryreport-dateSection">
          <label>From Date:</label>

          <div className="summaryreport-dateWrapper">
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            dateFormat="dd-MM-yyyy"
            className="summaryreport-dateInput"/>
            <FaRegCalendarAlt className="summaryreport-calenderIcon"/>
        </div>
        </div>

        {/*To Date*/}
        <div className="summaryreport-dateSection">
          <label>To Date:</label>

          <div className="summaryreport-dateWrapper">
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            dateFormat="dd-MM-yyyy"
            className="summartreport-dateInput"/>
            <FaRegCalendarAlt className="summaryreport-calenderIcon"/>
        </div>
        </div>

        <button className="summaryreport-submitBtn">Submit</button>

        <button className="summaryreport-downloadBtn">Download</button>
      </div>

      <div className="summaryreport-tableBox">
        <table className="summaryreort-table">
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
              <td colSpan="7" className="summaryreport-noData">No Data Available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="summaryreport-entries">
        There are total <b>0</b> entries
      </p>
    </div>
  );
}

export default SummaryReport;