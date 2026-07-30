import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import "../css/CampaignReport.css";

function CampaignReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="campaignreport-container">
      <h1 className="campaignreport-title">Campaign Report</h1>

      <div className="campaignreport-card">
        <div className="campaignreport-dateGroup">
          <label>From Date:</label>

          <div className="campaignreport-datePickerBox">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="campaignreport-calendarIcon" />
          </div>
        </div>

        <div className="campaignreport-dateGroup">
          <label>To Date:</label>

          <div className="campaignreport-datePickerBox">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="campaignreport-calendarIcon" />
          </div>
        </div>

        <div className="campaignreport-btnSection">
          <button className="campaignreport-submitBtn">Submit</button>
          <button className="campaignreport-downloadBtn">Download</button>
        </div>
      </div>

      <div className="campaignreport-searchSection">
        <input
          type="text"
          placeholder="Search Campaign Report"
          className="campaignreport-searchBox"
        />
      </div>

      <table className="campaignreport-table">
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
            <td colSpan="8" className="campaignreport-noData">
              No Data Available
            </td>
          </tr>
        </tbody>
      </table>

      <p className="campaignreport-entriesText">There are total 0 entries</p>
    </div>
  );
}

export default CampaignReport;