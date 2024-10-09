import React from 'react'
import AwbTable from '../../components/common/AwbTable'
import AgencyHeader from '../agency/includes/AgencyHeader'
export default function ListAgent() {
  return (
    <div>
           <AgencyHeader/>
        <div className="app-wrapper mt-4">
    <div className="app-content pt-2 p-md-2">
      <div className="container-fluid">
        <div className="app-card alert alert-dismissible p-0 shadow-sm mb-4" role="alert">
          <div className="inner">
            <div className="table-responsive">
            <AwbTable tableHeader="AGENT" tableRow="producer" id="producerId" baseURL={process.env.REACT_APP_API_SERVICE_URL} displayName="Agent"/>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
       
    </div>
  )
}
