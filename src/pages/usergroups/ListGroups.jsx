import React from 'react'
import AwbTable from '../../components/common/AwbTable'
import AgencyHeader from '../agency/includes/AgencyHeader'
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
         
            <AwbTable tableHeader="USERGROUP" tableRow="usergroup" id="userGroupId" baseURL={process.env.REACT_APP_API_ADMIN_URL} displayName="User Group"/>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
       
    </div>
  )
}
