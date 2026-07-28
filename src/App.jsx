import { useState } from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SendSMS from "./pages/SendSMS";
import History from "./pages/History";
import Contact from "./pages/Contacts";
import Layout from "./components/Layout";
import AddSenderId from "./pages/AddSenderId";
import DltChainRegistration from"./components/DltChainRegistration";
import './App.css'
import TemplateManagement from "./pages/TemplateMangement";
import NewSpielyLink from"./components/NewSpielyLink";
import DomainManager from "./components/DomainManager";
import QuickCampaign from "./components/QuickCampaign";
import UploadCampaign from "./components/UploadCampaign";
import DynamicCampaign from "./components/DynamicCampaign";
import GroupCampaign from "./components/GroupCampaign";
import ScheduledCampaign from "./components/ScheduledCampaign";
import SummaryReport from"./components/SummaryReport";
import SenderIdWiseReport from"./components/SenderIdWiseReport";
import TemplateIdReport from "./components/TemplateIdWiseReport";
import DetailedReport from "./components/DetailedReport";
import CampaignReport from "./components/CampaignReport";
import ClickerReport from "./components/ClickerReport";
import DownloadReport from "./components/DownloadReport";
import VMNReport from "./components/VMNReport";
import IndividualContacts from "./components/IndividualContacts";
import GroupContacts from "./components/GroupContact";
import BlacklistContacts from "./components/BlacklistContacts";
import CreditHistory from "./components/CreditHistory";
function App() {
  return (

     <BrowserRouter>
    <Routes>
      {/*Login Pages*/}
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
 <Route element={<Layout/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/send-sms" element={<SendSMS/>}/>
      <Route path="/contacts" element={<Contact/>}/>
      <Route path="/history" element={<History/>}/>

      

      {/*DLT*/}
      <Route path="/add-sender-id" element={<AddSenderId/>}/>
      <Route path="/template-management" element={<TemplateManagement/>}/>
      <Route path="/dlt-chain-registration"element={<DltChainRegistration/>}/>


      <Route path="/view-content-template" element={<TemplateManagement/>}/> 

      {/*Spiely*/}
      <Route path="/spiely-link" element={<NewSpielyLink/>}/>
      <Route path="/domain-manager" element={<DomainManager/>}/>

      {/*Campaign*/}
      <Route path="/quick-campaign" element={<QuickCampaign/>}/>
      <Route path="/upload-campaign" element={<UploadCampaign/>}/>
      <Route path="/dynamaic-campaign" element={<DynamicCampaign/>}/>
      <Route path="/group-campaign" element={<GroupCampaign/>}/>
      <Route path="/scheduled-campaign" element={<ScheduledCampaign/>}/>

      {/*Reports*/}
      <Route path="/sumary-report" element={<SummaryReport/>}/>
      <Route path="/sender-id-wise-report" element={<SenderIdWiseReport/>}/>
      <Route path="/template-id-wise-report" element={<TemplateIdReport/>}/>
      <Route path="/detailed-report" element={<DetailedReport/>}/>
      <Route path="/campaign-report" element={<CampaignReport/>}/>
      <Route path="/clicker-report" element={<ClickerReport/>}/>
      <Route path="/download-report" element={<DownloadReport/>}/>
      <Route path="/vwn-report" element={<VMNReport/>}/>

      {/*Phonebook*/}
      <Route path="/indiviual-contact" element={<IndividualContacts/>}/>
      <Route path="/group-contact" element={<GroupContacts/>}/>


      <Route path="/blacklist-contacts" element={<BlacklistContacts/>}/>
      <Route path="/credit-history" element={<CreditHistory/>}/>
      {/*Dashboard Layout*/}
     

      </Route>
    </Routes>
    </BrowserRouter>
   
  );

}

export default App;
