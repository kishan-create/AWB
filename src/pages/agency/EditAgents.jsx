import React,{ useState } from 'react'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditAgentfunctions from '../../pages/agency/Functions/Editagentfunctions'

export default function Editagents() {
  

  const {
    handlePasswordChange,passwordType,passwordInput,togglePassword,values,handleChange,updateagents
    
  } = EditAgentfunctions();

  
  return (
    <div className="app-wrapper mt-4">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div className="app-card alert alert-dismissible shadow-sm mb-4" role="alert">
              <div className="inner">
                <div className="app-card-body p-2 p-lg-4">




                  
                </div>
                <form onSubmit={updateagents} noValidate>
                <div className="app-card-body p-2 p-lg-4">
                  <div className="row gx-2 gy-2">
                    <div className="col-12 mb-3">
                      <h5>Edit Agency</h5>
                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Agency Name <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="agencyName" value={values.agencyName} onChange={handleChange} className="form-control" placeholder="Enter Agency Name" aria-label="Enter Producer Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Agency Npn <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="agencyNpn" onChange={handleChange}  value={values.agencyNpn}  className="form-control" placeholder="Enter Producer Email" aria-label="Enter Full Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
  
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Agency Fbin<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="agencyFbin"  onChange={handleChange} value={values.agencyFbin} className="form-control" placeholder="Enter producer phone" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Agency Type<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="agencyType"  onChange={handleChange} value={values.agencyType} className="form-control" placeholder="Enter agencyId" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>

                  {/* <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">BillingAddress ID<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="billingAddressId"  onChange={handleChange} value={values.billingAddressId} className="form-control" placeholder="Enter billingAddressId" aria-label="Enter billingAddressId" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div> */}
{/* 
                       <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">PermanentAddress ID<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="permanentAddressId"  onChange={handleChange} value={values.permanentAddressId} className="form-control" placeholder="Enter permanentAddressId" aria-label="Enter permanentAddressId" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">ShippingAddress ID<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="shippingAddressId"  onChange={handleChange} value={values.shippingAddressId} className="form-control" placeholder="Enter shippingAddressId" aria-label="Enter shippingAddressId" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div> */}

{/*                   
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">WorkAddress ID<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="workAddressId"  onChange={handleChange} value={values.workAddressId} className="form-control" placeholder="Enter workAddressId" aria-label="Enter workAddressId" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div> */}


               
                  
                  
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn app-btn-primary">Submit &amp; Continue</button>
                   
                    <button type="button" className="btn btn-link">Cancel</button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
