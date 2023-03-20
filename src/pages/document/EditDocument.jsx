import React,{ useState } from 'react'
import EditDocumentfunctions from './functions/EditDocumentFunctions';
import { Link } from "react-router-dom";
import Document_Validation from './../validations/Document_Validation'

export default function EditDocument() {
  

  const {
    handlePasswordChange,passwordType,passwordInput,togglePassword,values,handleChange,updateagents,
    
    errors } = EditDocumentfunctions(Document_Validation);

  
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
                    {errors.templateName && (<p className="message validation-sty" >{errors.templateName}</p>)}

                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Template Description <span className="red"> *</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="templateDec" onChange={handleChange}  value={values.templateDec}  className="form-control"  aria-label="Enter Full Name" aria-describedby="basic-addon1" />
                      </div>
                    {errors.templateDec && (<p className="message validation-sty">{errors.templateDec}</p>)}


                    </div>
                  </div>
  
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Template Code<span className="red"> *</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="templateCode"  onChange={handleChange} value={values.templateCode} className="form-control" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    {errors.templateCode && (<p className="message validation-sty">{errors.templateCode}</p>)}

                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Tag 1<span className="red"> *</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="filter1"  onChange={handleChange} value={values.filter1} className="form-control"  aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                      {errors.filter1 && (<p className="message validation-sty">{errors.filter1}</p>)}

                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Tag 2<span className="red"> *</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="filter2"  onChange={handleChange} value={values.filter2} className="form-control"  aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                      {errors.filter2 && (<p className="message validation-sty">{errors.filter2}</p>)}


                    </div>
                  </div>
                  
                  
                  <div className="col-12 mt-4">
                    <button type="submit" className="next-pre-btn mrg-r-3">Update</button>
                    <Link to="/document">
                    <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button>
                   </Link>
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
