import Statcard from"../components/Statcard";
import Footer from "../components/Footer";
import "../css/dashboard.css";
function Dashboard(){
    return(
      <div className="dashboard-page">

        <div className="dashboard-content">
        <div className="cards">
      <Statcard
        title="Today's SMS Count"
           value="0"
          icon="📅"/>

        <Statcard
        title="Current Month SMS Count"
         value="0"
         icon="📅"/>

        <Statcard
         title="Available Credit"
         value="0"
         icon="₹"/>
         </div>
         </div>
         <Footer/>
         </div>
        
        );
}

export default Dashboard;