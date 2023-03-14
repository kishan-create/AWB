import React from 'react'


import { useParams } from 'react-router-dom'
import AwbTable from '../../components/common/AwbTableChild'
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
         
            <AwbTable tableHeader="ADDRESS" paramid={params.id} tableType="childTable" tableRow={"agencyaddr/agency/ " + params.id + "/address"} id="addrId"  baseURL={process.env.REACT_APP_API_SERVICE_URL} displayName="Address"/>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
       
    </div>
  )
}
