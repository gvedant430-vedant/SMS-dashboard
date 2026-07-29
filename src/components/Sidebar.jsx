import { useState } from "react";
import { NavLink } from "react-router-dom";
import"../css/sidebar.css";
import{ FaTachometerAlt ,
  FaClipboardList,
  FaLink,
  FaBullhorn,
  FaFileAlt,
  FaPhoneAlt,
  FaChevronDown,
  FaChevronUp,  
  FaArrowRight,
  FaBan,
  FaCreditCard,
} from "react-icons/fa";

function Sidebar() {
    const[dltOpen,setDltOpen]=useState(false);
    const[spielyOpen,setSpielyOpen]=useState(false);
    const[campaignOpen,setCampaignOpen]=useState(false);
    const[reportOpen,setReportOpen]=useState(false);
    const[phonebookOpen,setPhonebookopenOpen]=useState(false);

  return (
    <div className="sidebar">

      <NavLink to="/dashboard" 
      className="menu-item"
       onClick={() => {
    setDltOpen(false);
    setSpielyOpen(false);
    setCampaignOpen(false);
    setReportOpen(false);
    setPhonebookopenOpen(false);
  }}>
      <FaTachometerAlt/>
        <span>Dashboard</span>
      </NavLink>

     {/*DLT*/}

    <div className="menu-item "
    onClick={()=> {
      setDltOpen(!dltOpen);
      setSpielyOpen(false);
      setCampaignOpen(false);
      setReportOpen(false);
      setPhonebookopenOpen(false);
      }} >

      <FaClipboardList/>
        <span className="menu-text"> DLT Management</span>
        <span className="arrow">
          {dltOpen? <FaChevronUp/> :<FaChevronDown/>}</span>
        </div>

     {dltOpen&&(
       <div className="submenu">
     <NavLink to="/add-sender-id" className="submenu-item"><FaArrowRight/><span>Add Sender ID</span></NavLink>
     <NavLink to="/template-management" className="submenu-item"><FaArrowRight/><span>Add Template</span></NavLink>
     <NavLink to="/dlt-chain-registration" className="submenu-item"><FaArrowRight/><span>DLT Chain Registration</span></NavLink>
     </div>
        )}

        {/*Spiely Link*/}
        <div className="menu-item" 
        onClick={()=>{
           setSpielyOpen(!spielyOpen);
             setDltOpen(false);
             setCampaignOpen(false);
              setReportOpen(false);
                setPhonebookopenOpen(false);}}>
          <FaLink/>
        <span className="menu-text"> Spiely Link Management</span>
        <span className="arrow">{spielyOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
        </div>

        {spielyOpen &&(
          <div className="submenu">
            <NavLink to="/spiely-link" className="submenu-item"> <FaArrowRight/>New Spiely Link </NavLink>
            <NavLink to ="/domain-manager" className="submenu-item"><FaArrowRight/>Domain Manager</NavLink>
            </div>
        )}

        {/*Campaign Management*/}
        <div className="menu-item" 
        onClick={()=>{
       
        setCampaignOpen(!campaignOpen);
         setDltOpen(false);
         setSpielyOpen(false);
          setReportOpen(false);
          setPhonebookopenOpen(false); }}>
          <FaBullhorn/>
            <span className="menu-text"> Campaign Management</span>
            <span className="arrow">{campaignOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
        </div>

        {campaignOpen &&(
            <div className="submenu">
                <NavLink to="/quick-campaign" className="submenu-item"><FaArrowRight/>Quick Campaign</NavLink>
                <NavLink to="/upload-campaign" className="submenu-item"><FaArrowRight/>Upload Campaign</NavLink>
                <NavLink to="/dynamaic-campaign" className="submenu-item"><FaArrowRight/>Dynamic Campaign</NavLink>
                <NavLink to="/group-campaign" className="submenu-item"><FaArrowRight/>Group Campaign</NavLink>
                <NavLink to="/scheduled-campaign" className="submenu-item"><FaArrowRight/>Scheduled Campaign</NavLink>
                </div>
        )}

        {/*Report Management*/}
        <div className="menu-item" 
        onClick={()=>{
        setReportOpen(!reportOpen)
        setDltOpen(false);
        setSpielyOpen(false);
        setCampaignOpen(false);
        setPhonebookopenOpen(false);}}>
          <FaFileAlt/>
            <span className="menu-text"> Report Management</span>
            <span className="arrow">{reportOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
            </div> 

            {reportOpen&&(
                <div className="submenu">
                    <NavLink to="/sumary-report" className="submenu-item"><FaArrowRight/>Summary Report</NavLink>
                    <NavLink to="/sender-id-wise-report" className="submenu-item"><FaArrowRight/>Sender ID Wise Report</NavLink>
                    <NavLink to="/template-id-wise-report" className="submenu-item"><FaArrowRight/>Template Id Wise Report</NavLink>
                    <NavLink to="/detailed-report" className="submenu-item"><FaArrowRight/>Detailed Report</NavLink>
                    <NavLink to="/campaign-report" className="submenu-item"><FaArrowRight/>Campaign Report</NavLink>
                    <NavLink to="/clicker-report" className="submenu-item"><FaArrowRight/>Clicker Report</NavLink>
                    <NavLink to="/download-report" className="submenu-item"><FaArrowRight/>Download Report</NavLink>
                    <NavLink to="/vwn-report" className="submenu-item"><FaArrowRight/>VMN Report</NavLink>
                    </div>
            )}

{/*Phonebook*/}
<div className="menu-item" 
onClick={()=>{
  setPhonebookopenOpen(!phonebookOpen);
  setDltOpen(false);
  setCampaignOpen(false);
  setReportOpen(false);
  setSpielyOpen(false);
}}>
  <FaPhoneAlt/>
    <span className="menu-text">PhoneBook Management</span>
    <span className="arrow">{phonebookOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
</div>
      
      {phonebookOpen&&(
        <div className="submenu">
            <NavLink to="/indiviual-contact" className="submenu-item"><FaArrowRight/>Individual Contacts</NavLink>
            <NavLink to="/group-contact" className="submenu-item"><FaArrowRight/>Group Contacts</NavLink>
            </div>
      )}

{/*BlackList Contacts*/}

      <NavLink to="/blacklist-contacts" 
      className="menu-item"
      onClick={()=>{
            setDltOpen(false);
    setSpielyOpen(false);
    setCampaignOpen(false);
    setReportOpen(false);
    setPhonebookopenOpen(false);
      }}>
      <FaBan/>
         <span>Blacklist Contacts</span>
      </NavLink>

{/*Credit History*/}
      <NavLink to="/credit-history" 
      className="menu-item"
       onClick={() => {
    setDltOpen(false);
    setSpielyOpen(false);
    setCampaignOpen(false);
    setReportOpen(false);
    setPhonebookopenOpen(false);
  }}>
       <FaCreditCard/>
        <span>Credit History</span>
      </NavLink>

    </div>
  );
}
export default Sidebar;