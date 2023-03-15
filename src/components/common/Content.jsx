import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../auth/Login";
import Userslist from "../../pages/users/Userslist";
import EditUsers from "../../pages/users/EditUsers";
import UserGroup from "../../pages/usergroups/usergroup";
import ListGroups from "../../pages/usergroups/ListGroups";

import EditUsergroup from "../../pages/usergroups/EditUsergroup";
import EditAgent from "../../pages/agents/EditAgent";

import UserRegistration from "../../pages/registration/UserRegistration";
import Addagent from "../../pages/agents/Addagent";

import AddUserstogroup from "../../pages/users/AddUserstogroup";





import Addagency from '../../pages/agency/Addagency';
import AgentDataTable from '../../pages/agency/AgentDataTable';
import ListAgentsData from '../../pages/agency/ListAgentsData'
import AgentTable from '../../pages/agents/AgentTable'
import EditAddress from '../../pages/agency/EditAddress'
// import ListAgentData from '../../pages/agents/ListAgentData'
import EditAgentAddress from '../../pages/agents/EditAgentAddress'

import AddDocumentWizard from "../../pages/document/AddDocumentWizard";
import ListDocument from "../../pages/document/ListDocument";
import ListDocumentData from "../../pages/document/Includes/ListDocumentData";
import Users from "../../pages/users/Users";
import ListAgent from "../../pages/agents/ListAgent";
import ListAgency from "../../pages/agency/ListAgency";
import ListAgentData from "../../pages/agents/ListAgentData"
function Content() {
  return (
    

  <Routes>
   <Route path="/" exact={true} element={<Users/>}/>
  <Route path="/user" exact={true} element={<UserRegistration/>}/>
  <Route path="/login" exact={true} element={<Login/>}/>
  <Route path="/userlist" exact={true} element={<Users/>}/>
  <Route  path="/edituser/:id" exact={true} element={<EditUsers/>} /> 
  <Route  path="/usergroup" exact={true} element={<UserGroup/>} /> 
  <Route path="/editproducer/:id" exact={true} element={<ListAgentData />} />
  <Route path="/producer" exact={true} element={<Addagent />} />
  <Route path="/grouplist" exact={true} element={<ListGroups/>}/>
  <Route path="/togroup/:id" exact={true} element={<AddUserstogroup/>}/>
  <Route path="/agency" exact={true} element={<Addagency/>}/>
  <Route path="/listagency" exact={true} element={<ListAgency />} />
  <Route path="/listagentheaddata/:id" exact={true} element={<ListAgentsData />}/>
  <Route path="/editusergroup/:id" exact={true} element={<AddUserstogroup />} />
  <Route path="/listagent" exact={true} element={<ListAgent />} />
  <Route path="/editaddress/:id" exact={true} element={<EditAddress />} />
  {/* <Route path="/listdata/:id" exact={true} element={<ListAgentData />} /> */}
  <Route path="/editagentaddress/:id" exact={true} element={<EditAgentAddress />} />
  <Route path="/document" exact={true} element={<ListDocument />} />


      <Route
        path="/editdocgeneration/:id"
        exact={true}
        element={<ListDocumentData />}
      />

      <Route
        path="/docgeneration"
        exact={true}
        element={<AddDocumentWizard />}
      />
 <Route
        path="/editagency/:id"
        exact={true}
        element={<ListAgentsData />}
      />
      <Route
        path="/editusergroupbyid/:id"
        exact={true}
        element={<EditUsergroup />}
      />
      
    </Routes>
    
  );
}

export default Content;
