import React,{ useState } from 'react'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditDocumentfunctions from './functions/EditDocumentFunctions';

export default function EditDocument() {
  

  const {
    handlePasswordChange,passwordType,passwordInput,togglePassword,values,handleChange,updateagents
    
  } = EditDocumentfunctions();

  
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
                      <h5>Edit Template</h5>
                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Template Name <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="templateName" value={values.templateName} onChange={handleChange} className="form-control"  aria-label="Enter Producer Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Template Description <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="templateDec" onChange={handleChange}  value={values.templateDec}  className="form-control"  aria-label="Enter Full Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
  
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Template Code<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="templateCode"  onChange={handleChange} value={values.templateCode} className="form-control" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">filter1<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="filter1"  onChange={handleChange} value={values.filter1} className="form-control"  aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">filter2<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="filter2"  onChange={handleChange} value={values.filter2} className="form-control"  aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  
                  
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
