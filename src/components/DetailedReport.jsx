import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../css/DetailedReport.css";

function DetailedReport() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="detailedreport-container">
      <h1 className="detailedreport-title">Detailed Report</h1>

      <div className="detailedreport-card">
        <div className="detailedreport-formRow">
          {/* From Date */}
          <div className="detailedreport-formGroup">
            <label>From Date:</label>

            <div className="detailedreport-datePickerwrapper">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd-MM-yyyy"
                className="detailedreport-dateInput"
              />
              <FaRegCalendarAlt className="detailedreport-calendarIcon" />
            </div>
          </div>

          {/* To Date */}
          <div className="detailedreport-formGroup">
            <label>To Date:</label>

            <div className="detailedreport-datePickerWrapper">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd-MM-yyyy"
                className="detailedreport-dateInput"
              />
              <FaRegCalendarAlt className="detailedreport-calendarIcon" />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="detailedreport-formGroup">
            <label>Mobile Number:</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="detailedreport-inputField"
            />
          </div>
        </div>

        <div className="detailedreport-formRow">
          {/* Sender ID */}
          <div className="detailedreport-formGroup">
            <label>Sender ID:</label>
            <input
              type="text"
              placeholder="Enter Sender Id"
              className="detailedreport-inputField"
            />
          </div>

          {/* Message ID */}
          <div className="detailedreport-formGroup">
            <label>Message ID:</label>
            <input
              type="text"
              placeholder="Enter Message Id"
              className="detailedreport-inputField"
            />
          </div>

          <div className="detailedreport-btnBox">
            <button className="detailedreport-submitBtn">Submit</button>
          </div>
        </div>
      </div>

      <div className="detailedreport-tableSection">
        <table className="detailedreport-table"> 
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
              <td colSpan="7" className="detailedreport-noData">
                No Data Available
              </td>
            </tr>
          </tbody>
        </table>

        <p className="detailedreport-entriesText">
          There are total <strong>0</strong> entries
        </p>
      </div>
    </div>
  );
}

export default DetailedReport;