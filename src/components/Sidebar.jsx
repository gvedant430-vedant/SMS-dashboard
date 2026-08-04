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

function Sidebar({isOpen}) {
    const[dltOpen,setDltOpen]=useState(false);
    const[spielyOpen,setSpielyOpen]=useState(false);
    const[campaignOpen,setCampaignOpen]=useState(false);
    const[reportOpen,setReportOpen]=useState(false);
    const[phonebookOpen,setPhonebookopenOpen]=useState(false);

  return (
    <div className={ `sidebar-container 
    ${isOpen ? "sidebar-open" : "sidebar-close"}`}>

      <NavLink to="/dashboard" 
      className="sidebar-menuItem"
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

 <div className="sidebar-menuItem"
    onClick={()=> {
      setDltOpen(!dltOpen);
      setSpielyOpen(false);
      setCampaignOpen(false);
      setReportOpen(false);
      setPhonebookopenOpen(false);
      }} >

      <FaClipboardList/>
       <span className="sidebar-menuText"> DLT Management</span>
       <span className="sidebar-arrow">
          {dltOpen? <FaChevronUp/> :<FaChevronDown/>}</span>
        </div>

     {dltOpen&&(
     <div className="sidebar-submenu">
     <NavLink to="/add-sender-id" className="sidebar-submenuItem"><FaArrowRight/><span>Add Sender ID</span></NavLink>
     <NavLink to="/template-management" className="sidebar-submenuItem"><FaArrowRight/><span>Add Template</span></NavLink>
     <NavLink to="/dlt-chain-registration" className="sidebar-submenuItem"><FaArrowRight/><span>DLT Chain Registration</span></NavLink>
     </div>
        )}

        {/*Spiely Link*/}
        <div className="sidebar-menuItem"
        onClick={()=>{
           setSpielyOpen(!spielyOpen);
             setDltOpen(false);
             setCampaignOpen(false);
              setReportOpen(false);
                setPhonebookopenOpen(false);}}>
          <FaLink/>
        <span className="sidebar-menuText"> Spiely Link Management</span>
        <span className="sidebar-arrow">{spielyOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
        </div>

        {spielyOpen &&(
          <div className="sidebar-submenu">
            <NavLink to="/spiely-link" className="sidebar-submenuItem"> <FaArrowRight/>New Spiely Link </NavLink>
            <NavLink to ="/domain-manager" className="sidebar-submenuItem"><FaArrowRight/>Domain Manager</NavLink>
            </div>
        )}

        {/*Campaign Management*/}
        <div className="sidebar-menuItem" 
        onClick={()=>{
       
        setCampaignOpen(!campaignOpen);
         setDltOpen(false);
         setSpielyOpen(false);
          setReportOpen(false);
          setPhonebookopenOpen(false); }}>
          <FaBullhorn/>
            <span className="sidebarmenuText"> Campaign Management</span>
            <span className="sidebar-arrow">{campaignOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
        </div>

        {campaignOpen &&(
            <div className="sidebar-submenu">
                <NavLink to="/quick-campaign" className="sidebar-submenuItem"><FaArrowRight/>Quick Campaign</NavLink>
                <NavLink to="/upload-campaign" className="sidebar-submenuItem"><FaArrowRight/>Upload Campaign</NavLink>
                <NavLink to="/dynamaic-campaign" className="sideabrsubmenuItem"><FaArrowRight/>Dynamic Campaign</NavLink>
                <NavLink to="/group-campaign" className="sidebar-submenuItem"><FaArrowRight/>Group Campaign</NavLink>
                <NavLink to="/scheduled-campaign" className="sidebar-submenuItem"><FaArrowRight/>Scheduled Campaign</NavLink>
                </div>
        )}

        {/*Report Management*/}
        <div className="sidebar-menuItem" 
        onClick={()=>{
        setReportOpen(!reportOpen)
        setDltOpen(false);
        setSpielyOpen(false);
        setCampaignOpen(false);
        setPhonebookopenOpen(false);}}>
          <FaFileAlt/>
            <span className="sidebar-menuText"> Report Management</span>
            <span className="sudebar-arrow">{reportOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
            </div> 

            {reportOpen&&(
                <div className="sidebar-submenu">
                    <NavLink to="/sumary-report" className="sidebar-submenuItem"><FaArrowRight/>Summary Report</NavLink>
                    <NavLink to="/sender-id-wise-report" className="sidebar-submenuItem"><FaArrowRight/>Sender ID Wise Report</NavLink>
                    <NavLink to="/template-id-wise-report" className="sidebar-submenuItem"><FaArrowRight/>Template Id Wise Report</NavLink>
                    <NavLink to="/detailed-report" className="sidebar-submenuItem"><FaArrowRight/>Detailed Report</NavLink>
                    <NavLink to="/campaign-report" className="sidebar-submenuItem"><FaArrowRight/>Campaign Report</NavLink>
                    <NavLink to="/clicker-report" className="sidebar-submenuItem"><FaArrowRight/>Clicker Report</NavLink>
                    <NavLink to="/download-report" className="sidebar-submenuItem"><FaArrowRight/>Download Report</NavLink>
                    <NavLink to="/vwn-report" className="sidebar-submenuItem"><FaArrowRight/>VMN Report</NavLink>
                    </div>
            )}

{/*Phonebook*/}
<div className="sidebar-menuItem" 
onClick={()=>{
  setPhonebookopenOpen(!phonebookOpen);
  setDltOpen(false);
  setCampaignOpen(false);
  setReportOpen(false);
  setSpielyOpen(false);
}}>
  <FaPhoneAlt/>
    <span className="sidebar-menuText">PhoneBook Management</span>
    <span className="sidebar-arrow">{phonebookOpen?<FaChevronUp/>:<FaChevronDown/>}</span>
</div>
      
      {phonebookOpen&&(
        <div className="sidebar-submenu">
            <NavLink to="/indiviual-contact" className="sidebar-submenuItem"><FaArrowRight/>Individual Contacts</NavLink>
            <NavLink to="/group-contact" className="sidebar-submenuItem"><FaArrowRight/>Group Contacts</NavLink>
            </div>
      )}

{/*BlackList Contacts*/}

      <NavLink to="/blacklist-contacts" 
      className="sidebar-menuItem"
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
      className="sidebar-menuItem"
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