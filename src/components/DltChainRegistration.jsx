import { useState } from "react";
import "../css/DltChainRegistration.css";

function DltChainRegistration() {
  const [dltValue, setDltValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dltValue);
  };

  return (
    <div className="dltchainregistration-container">

      <h1 className="dltchainregistration-title">DLT Chain Registration</h1>

      <div className="dltchainregistration-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter DLT Chain Number"
            value={dltValue}
            onChange={(e) => setDltValue(e.target.value)}
            className="dltchainregistration-input"
          />

          <div className="dltchainregistration-inputInfo">
            <h2>
              Input String:
              <span> PEID, TM1ID, TM2ID, TVL</span>
            </h2>

            <p>
              <strong>Sample:</strong>
              1000000000,1000000001,1000000002,1000000004
            </p>
          </div>

          <button type="submit" className="dltchainregistration-submitBtn">
            Submit
          </button>
        </form>
      </div>

      <div className="dltchainregistration-tableCard">
        <table className="dltchainregistration-table">
          <thead>
            <tr>
              <th>DLT VALUE</th>
              <th>DLT HASH VALUE</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                1201159146243676111,1302157483670783292
              </td>
              <td>
                d3c6b0bf30e0f907aa7ee20f6d003f91f34c210ad308732eafca9fb2
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default DltChainRegistration;