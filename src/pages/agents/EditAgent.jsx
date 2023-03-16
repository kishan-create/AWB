import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Agent_validation from "../validations/Agent_validation"
import Editagentfunctions from '../functions/Editagentfunctions'


export default function EditAgent() {
  const params = useParams();
const {handleChange,values,handleEdit,updateAgent, errors}=Editagentfunctions(params.id, Agent_validation);

return (
    <div className="app-wrapper mt-4">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div className="app-card alert alert-dismissible shadow-sm mb-4" role="alert">
              <div className="inner">
                <div className="app-card-body p-2 p-lg-4">
 
                </div>
                <form   onSubmit={updateAgent}>
                <div className="app-card-body p-2 p-lg-4">
                  <div className="row gx-2 gy-2">
                    <div className="col-12 mb-3">
                      <h5>Edit Agent</h5>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    
                      <label htmlFor="Submission" className="form-label">Agent Name <span className="red">*</span></label>
                      <div className="input-group mb-3">

                            <input type="text" name="producerName"  onChange={handleChange}  value={values.producerName} className="form-control" placeholder="Enter Agent Name" aria-label="Enter Agent Name" aria-describedby="basic-addon1" />

                      </div>
                       {errors.producerName && (<p className="message">{errors.producerName}</p>)}

                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label"> Email <span className="red">*</span></label>
                      <div className="input-group mb-3">
                     <input type="text" name="producerEmail" onChange={handleChange} value={values.producerEmail}  className="form-control" placeholder="Enter Agent Email" aria-label="Enter Agent Email" aria-describedby="basic-addon1" />
                      </div>
                       {errors.producerEmail && (<p className="message">{errors.producerEmail}</p>)}


                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Phone Number<span className="red">*</span></label>
                      <div className="input-group mb-3">
                      <input type="number" name="producerPhone" onChange={handleChange} value={values.producerPhone}   className="form-control" placeholder="Enter Agent Phone number" aria-label="Enter Enter Agent Phone number" aria-describedby="basic-addon1" />
                      </div>
                       {errors.producerPhone && (<p className="message">{errors.producerPhone}</p>)}

                    </div>
                  </div>
                 
                  
                  <div className="col-12 mt-4">
                   
                <input type="submit"  className="next-pre-btn mrg-r-3"   value="Update" />
                <Link to="/listagent"> <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link>



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
