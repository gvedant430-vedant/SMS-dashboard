import"../css/CreditHistory.css";
import { FaDownload,FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function CreditHistory() {
    const[fromdate,setFromDate]=useState(new Date());
    const[todate,setToDate]=useState(new Date());

  return (
    <div className="credit-history">
      <h1 className="credit-heading">Credit History</h1>
      <div className="credit-card">
        <div className="date-section">
            <div className="field">
  <label>From Date:</label>

  <div className="date-picker-wrapper">
    <DatePicker
      selected={fromdate}
      onChange={(date) => setFromDate(date)}
      dateFormat="dd-MM-yyyy"
      className="date-input"
    />

    <FaCalendarAlt className="calendar-icon" />
  </div>
</div>

            <div className="field">
  <label>To Date:</label>

  <div className="date-picker-wrapper">
    <DatePicker
      selected={todate}
      onChange={(date) => setToDate(date)}
      dateFormat="dd-MM-yyyy"
      className="date-input"
    />

    <FaCalendarAlt className="calendar-icon" />
  </div>
</div>
<button className="submit-btn">Submit </button>
            <button className="export-btn"><FaDownload/>.csv</button>
            <button className="export-btn"><FaDownload/>.pdf</button>
        </div>
        </div>

        <div className="search-area">
            <input  
            type="text"
            placeholder="Search Credit History"/>
        </div>

        <div className="table-card">
            <table>
                <thead>
                    <tr>
                        <th>CREATED DATE</th>
                        <th>CREDIT</th>
                        <th>STATUS</th>
                        <th>UPDATED CREDIT</th>
                        <th>UPDATED BY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="5" className="no-data">
                            No Data Available
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="entries">
            There are Total <strong>0</strong> entries
        </p>
        </div>
        );
        }

        export default CreditHistory;