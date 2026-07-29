import Statcard from"../components/Statcard";
import Footer from "../components/Footer";
import "../css/dashboard.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {Bar, Line} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard(){
  const barData={
    labels:["Request","Rejected","Submit","Delivered","Failed","Awaited"],
    datasets:[
      {
        label:"SMS Count",
        data:[1200,150,1050,980,70,40],
      backgroundColor:"#f4c542",
      },
    ],
  };

  const lineData={
    labels:[
      "0:00",
      "2:00",
      "4:00",
      "6:00",
      "8:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00"
    ],
    datasets:[
      {
        label:"Hourly SMS",
        data:[20,35,15,40,80,120,160,140,180,130,90,50],
        borderColor:"#f4c542",
        tension:0.4,
      },
    ],
  };
    return(
      <div className="dashboard-page">
        <div className="dashboard-content">

        <div className="cards">
      <Statcard
        title="Today's SMS Count"
           value="1200"
          icon="📅"/>

        <Statcard
        title="Current Month SMS Count"
         value="28500"
         icon="📅"/>

        <Statcard
         title="Available Credit"
         value="15000"
         icon="₹"/>
         </div>

         {/*Chart Section*/}

         <div className="charts-container">
          <div className="chart-box">
            <h3>Today's SMS Count</h3>
            <Bar data={barData}/>
          </div>

          <div className="chart-box">
            <h3>Hourly SMS Summary</h3>
            <Line data={lineData}/>
          </div>
         </div>
         </div>
         
         <Footer/>
         </div>
        
        );
}

export default Dashboard;