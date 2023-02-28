import React,{ useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Edituserfunctions from './functions/Edituserfunctions';
import { Link } from "react-router-dom";
export default function EditUsers() {
 
  const {
    handlePasswordChange,passwordType,passwordInput,togglePassword,values,handleChange,updateUsers
    
  } = Edituserfunctions();
  return (
    <div className="app-wrapper mt-4">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div className="app-card alert alert-dismissible shadow-sm mb-4" role="alert">
              <div className="inner">
                <div className="app-card-body p-2 p-lg-4">
                 
                  
                </div>
                <form onSubmit={updateUsers} noValidate>
                <div className="app-card-body p-2 p-lg-4">
                  <div className="row gx-2 gy-2">
                    <div className="col-12 mb-3">
                      <h5>Edit Users</h5>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">User Name <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="userName" value={values.userName} onChange={handleChange} className="form-control" placeholder="Enter User Name" aria-label="Enter User Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">User full Name <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="userFullName" onChange={handleChange}  value={values.userFullName}  className="form-control" placeholder="Enter User full Name" aria-label="Enter Full Name" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">User Email<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="userEmail" onChange={handleChange} value={values.userEmail} className="form-control" placeholder="Enter User Email" aria-label="Enter User Email" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">User Phone number<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="userPhone"  onChange={handleChange} value={values.userPhone} className="form-control" placeholder="Enter User phone" aria-label="Enter user Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Password <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type={passwordType}  onChange={handlePasswordChange} name="password" value={values.password} className="form-control" placeholder="Enter User phone" aria-label="Enter user Phone" aria-describedby="basic-addon1" />
                        <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <VisibilityOffIcon/> :<RemoveRedEyeIcon/> }
                     </button>
                      </div>
                    </div>
                    <div className="input-group-btn">
                    <input type="hidden" name="id" value={values.userId} />
                    </div>
                  </div>
                  
                  
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn app-btn-primary">Submit &amp; Continue</button>
                    <Link to="/" >
                    <button type="button" className="btn btn-link">Cancel</button>
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
