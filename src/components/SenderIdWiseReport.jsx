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
   <div className="senderidwisereport-container">
      <h1 className="senderidwisereport-title">Sender ID Report</h1>

      {/* Filter Section */}
     <div className="senderidwisereport-card">
       <div className="senderidwisereport-dateSection">
          <label>From Date:</label>

         <div className="senderidwisereport-datepickerWrapper">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="senderidwisereport-calendarIcon" />
          </div>
        </div>

        <div className="senderidwisereportdateSection">
          <label>To Date:</label>

          <div className="senderidwisereport-datepickerWrapper">
          <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd-MM-yyyy"
            />
            <FaCalendarAlt className="senderidwisereport-calendarIcon" />
          </div>
        </div>

        <div className="senderidwisereport-buttonGroup">
          <button className="senderidwisereport-submitBtn">Submit</button>
          <button className="senderidwisereport-downloadBtn">Download</button>
        </div>
      </div>

      {/* Search */}
      <div className="senderidwisereport-searchContainer">
        <input 
          className="senderidwisereport-searchInput"
        type="text" 
        placeholder="Enter Sender ID" />
      </div>

      {/* Table */}
     <div className="senderidwisereport-tableWrapper">
        <table className="senderidwisereport-table">
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
                <td colSpan="8" className="senderidwisereport-noData">
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

<p className="senderidwisereport-entriesText">
        There are total <strong>0</strong> entries
      </p>
    </div>
  );
}

export default SenderIdWiseReport;