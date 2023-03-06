import React,{ useState } from 'react'
import { Link } from "react-router-dom";

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditAgentfunctions from '../../pages/agency/Functions/Editagentfunctions'
import { useParams } from 'react-router-dom';

export default function Editagents() {
  const params=useParams();

  const {
    handlePasswordChange,passwordType,passwordInput,togglePassword,values,handleChange,updateagents
    
  } = EditAgentfunctions(params.id);

  
  return (
    <div className="app-wrapper mt-4">
        <div >
          <div >
            <div className="" role="alert">
              <div >
                <div >


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

                             
                  
                  
                  <div className="col-12 mt-4">
                  <input type="submit"  className="next-pre-btn mrg-r-3"   value="Update" />
                   
                    <Link to="/listagency"> <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link>

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
