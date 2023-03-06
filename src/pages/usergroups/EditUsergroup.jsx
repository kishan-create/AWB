import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editgroupfunction from './EditFunctionGroup';
import { Link } from "react-router-dom";
export default function EditUsersGroup() {
  const params = useParams();

const {handleChange,values,handleEdit,rows,updateusergroup}=Editgroupfunction(params.id);

return (
    <div className="app-wrapper mt-4">
        <div className="">
          <div className="">
            <div className="" role="alert">
              <div className="">
                <div className="">
 
                </div>
                <form  onSubmit={updateusergroup} noValidate>
                <div className="app-card-body p-2 p-lg-4">
                  <div className="row gx-2 gy-2">
                    <div className="col-12 mb-3">
                      <h5>Edit Group</h5>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    
                      <label htmlFor="Submission" className="form-label">User Group Name <span className="red">*</span></label>
                      <div className="input-group mb-3">

                            <input type="text" name="userGroupName"  onChange={handleChange}  value={values.userGroupName} className="form-control" placeholder="Enter User Group Name" aria-label="Enter Insured Name" aria-describedby="basic-addon1" />

                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">User Group Description  <span className="red">*</span></label>
                      <div className="input-group mb-3">
                     <input type="text" name="userGroupDesc" onChange={handleChange} value={values.userGroupDesc}  className="form-control" placeholder="Enter Group Description" aria-label="Enter Insured Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">User Group Code<span className="red">*</span></label>
                      <div className="input-group mb-3">
                      <input type="text" name="userGroupCode" onChange={handleChange} value={values.userGroupCode}  className="form-control" placeholder="Enter Group Code" aria-label="Enter Insured Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                 
                  
                  <div className="col-12 mt-4">
                   
                <input type="submit"  className="next-pre-btn mrg-r-3"   value="Update" />
                <Link to="/grouplist">
                <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link>



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
