import { useState } from "react";
// import"../css/SenderIdList.css";

function SenderIdList(){
return(
    <div className="sender-list">
    <div className="search-container">
        <input type="text" placeholder="Search Sender ID"/>
    </div>
       
       <table>
        <thead>
            <tr>
                <th></th>
                <th>SENDER ID</th>
                <th>ACTIVE</th>
                <th>DEFAULT</th>
                <th>ENTITY ID</th>
            </tr>
        </thead>
       </table>
      
        </div>
    );
}

export default SenderIdList;