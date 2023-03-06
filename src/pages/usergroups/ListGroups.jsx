import * as React from "react";
import { useState, useEffect } from "react";

import filter_list from '../../images/filter_list.svg';
import exportsvg from '../../images/export.svg';
import add_circle from '../../images/add_circle.svg';
import List from "./List";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';



export default function ListGroups() {
 
  return (
    <div>
    <div className="app-status justify-content-between align-items-center">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
      
     
      </div>
    </div>
  </div>

    <div className="app-wrapper mt-4">
    <div className="app-content pt-2 p-md-2">
      <div className="container-fluid">
        <div className="app-card alert alert-dismissible p-0 shadow-sm mb-4" role="alert">
          <div className="inner">
            <div className="table-responsive">
            <List/>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  </div>
  )
}
