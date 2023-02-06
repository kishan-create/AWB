import React from 'react'
import {Route,Routes} from "react-router-dom";

import { Login } from '../auth/Login';
import Userslist from '../../pages/users/Userslist';
import EditUsers from '../../pages/users/EditUsers';
import UserGroup from '../../pages/usergroups/usergroup';
import ListGroups from '../../pages/usergroups/ListGroups';

import EditUsergroup from '../../pages/usergroups/EditUsergroup';

import UserRegistration from '../../pages/registration/UserRegistration';


function Content() {
  return (
  <Routes>
  <Route path="/" exact={true} element={<UserRegistration/>}/>
  <Route path="/login" exact={true} element={<Login/>}/>
  <Route path="/userlist" exact={true} element={<Userslist/>}/>
  <Route  path="/edituser/:id" exact={true} element={<EditUsers/>} /> 
  <Route  path="/usergroup" exact={true} element={<UserGroup/>} /> 
  <Route  path="/ListGroups" exact={true} element={<ListGroups/>} /> 


  <Route  path="/editusergroup/:id" exact={true} element={<EditUsergroup/>} />

  <Route path="/grouplist" exact={true} element={<ListGroups/>}/>
  <Route />
 </Routes>
  )
}

export default Content