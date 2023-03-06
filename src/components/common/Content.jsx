import React from 'react'
import { Route, Routes } from "react-router-dom";

import { Login } from '../auth/Login';
import Userslist from '../../pages/users/Userslist';
import EditUsers from '../../pages/users/EditUsers';
import UserGroup from '../../pages/usergroups/usergroup';
import ListGroups from '../../pages/usergroups/ListGroups';

import EditUsergroup from '../../pages/usergroups/EditUsergroup';
import EditAgent from '../../pages/agents/EditAgent'

import UserRegistration from '../../pages/registration/UserRegistration';
import Addagent from '../../pages/agents/Addagent';


import AddUserstogroup from '../../pages/users/AddUserstogroup';


import Addagency from '../../pages/agency/Addagency';
import AgentDataTable from '../../pages/agency/AgentDataTable';
import ListAgentsData from '../../pages/agency/ListAgentsData'
import AgentTable from '../../pages/agents/AgentTable';

import AddDocumentWizard from '../../pages/document/AddDocumentWizard'
function Content() {
  return (

  <Routes>
   <Route path="/" exact={true} element={<Userslist/>}/>
  <Route path="/registration" exact={true} element={<UserRegistration/>}/>
  <Route path="/login" exact={true} element={<Login/>}/>
  <Route path="/userlist" exact={true} element={<Userslist/>}/>
  <Route  path="/edituser/:id" exact={true} element={<EditUsers/>} /> 
  <Route  path="/usergroup" exact={true} element={<UserGroup/>} /> 
  <Route path="/editagent/:id" exact={true} element={<EditAgent />} />
  <Route path="/agents" exact={true} element={<Addagent />} />
  <Route path="/grouplist" exact={true} element={<ListGroups/>}/>
  <Route path="/togroup/:id" exact={true} element={<AddUserstogroup/>}/>
  <Route path="/addagency" exact={true} element={<Addagency/>}/>
  <Route path="/listagency" exact={true} element={<AgentDataTable />} />
  <Route path="/listagentheaddata/:id" exact={true} element={<ListAgentsData />}/>
  <Route path="/editusergroup/:id" exact={true} element={<EditUsergroup />} />
  <Route path="/listagent" exact={true} element={<AgentTable />} />
  <Route path="/addDocument-wizard" exact={true} element={<AddDocumentWizard/>}/>

  
  


    
  </Routes>

  )
}

export default Content