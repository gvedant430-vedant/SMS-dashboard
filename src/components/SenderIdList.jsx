import { useState } from "react";
// import"../css/SenderIdList.css";

function SenderIdList(){
return(
    <div className="senderidlist-container">
    <div className="senderidlist-searchContainer">
        <input type="text" 
        placeholder="Search Sender ID"
          className="senderidlist-searchInput"
          />
    </div>
        <table className="senderidlist-table">
        <thead>
            <tr>
               <th className="senderidlist-checkboxHeader"></th>
        <th className="senderidlist-senderIdHeader">SENDER ID</th>
        <th className="senderidlist-activeHeader">ACTIVE</th>
        <th className="senderidlist-defaultHeader">DEFAULT</th>
        <th className="senderidlist-entityIdHeader">ENTITY ID</th>
            </tr>
        </thead>
       </table>
      
        </div>
    );
}

export default SenderIdList;