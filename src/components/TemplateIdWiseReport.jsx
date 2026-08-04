import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaDownload } from "react-icons/fa";
import "../css/TemplateIdWiseReport.css";

function TemplateIdReport() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="templateidreport-container">

      <h1 className="templateidreport-title">
        Template ID Report
      </h1>

      {/* Card */}
      <div className="templateidreport-card">

        <div className="templateidreport-leftSection">
          <label>Date:</label>

          <div className="templateidreport-dateWrapper">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyyy"
              className="templateidreport-dateInput"
            />

            <FaRegCalendarAlt className="templateidreport-calendarIcon" />
          </div>

          <button className="templateidreport-submitBtn">
            Submit
          </button>
        </div>

        <div className="templateidreport-rightSection">

          <button className="templateidreport-downloadBtn">
            <FaDownload />
            .csv
          </button>

          <button className="templateidreport-downloadBtn">
            <FaDownload />
            .pdf
          </button>

        </div>
      </div>

      {/* Search */}
      <div className="templateidreport-searchContainer">
        <input
          type="text"
          placeholder="Enter Template ID"
        />
      </div>

      {/* Table */}
      <div className="templateidreport-tableContainer">

        <table className="templateidreport-table">

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
              <td
                colSpan="6"
                className="templateidreport-noData"
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

export default TemplateIdReport;