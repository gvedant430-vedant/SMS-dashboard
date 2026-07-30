import"../css/CreditHistory.css";
import { FaDownload,FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function CreditHistory() {
    const[fromdate,setFromDate]=useState(new Date());
    const[todate,setToDate]=useState(new Date());

  return (
    <div className="credithistory-container">
      <h1 className="credithistory-heading">Credit History</h1>
      <div className="credithistory-card">
        <div className="credithistory-dateSection">
            <div className="credithistory-field">
  <label>From Date:</label>

  <div className="credithistory-datePickerWrapper">
    <DatePicker
      selected={fromdate}
      onChange={(date) => setFromDate(date)}
      dateFormat="dd-MM-yyyy"
      className="credithistory-dateInput"
    />

    <FaCalendarAlt className="credithistory-calendarIcon" />
  </div>
</div>

            <div className="credithistoy-field">
  <label>To Date:</label>

  <div className="credithistory-datePickerWrapper">
    <DatePicker
      selected={todate}
      onChange={(date) => setToDate(date)}
      dateFormat="dd-MM-yyyy"
      className="credithistory-dateInput"
    />

    <FaCalendarAlt className="credithistory-calendarIcon" />
  </div>
</div>
<button className="credithistory-submitBtn">Submit </button>
            <button className="credithistory-exportBtn"><FaDownload/>.csv</button>
            <button className="credithistory-exportBtn"><FaDownload/>.pdf</button>
        </div>
        </div>

        <div className="credithistory-searchArea">
            <input  
            type="text"
            placeholder="Search Credit History"/>
        </div>

        <div className="credithistory-tableCard">
            <table className="credithistory-table">
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
                        <td colSpan="5" className="credithistory-noData">
                            No Data Available
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="credithistory-entries">
            There are Total <strong>0</strong> entries
        </p>
        </div>
        );
        }

        export default CreditHistory;