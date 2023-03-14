import React from 'react'
import AwbTable from '../../components/common/AwbTable'

import AgencyHeader from '../agency/includes/AgencyHeader'
import { useParams } from 'react-router-dom'
export default function EditAddressTable() {
   const params = useParams();


  return (
    
    <div>
        
        <div className="app-wrapper mt-4">
    <div className="app-content pt-2 p-md-2">
      <div className="container-fluid">
        <div className="app-card alert alert-dismissible p-0 shadow-sm mb-4" role="alert">
          <div className="inner">
            <div className="table-responsive">
         
            <AwbTable tableHeader="DOCUMENT" tableRow={"document/orgintype/AGENCY/orgintypeid/"+params.id} id="docId" baseURL={process.env.REACT_APP_API_SERVICE_URL} displayName="Documents"/>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
       
    </div>
  )
}
