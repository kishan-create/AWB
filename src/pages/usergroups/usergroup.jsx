import React from "react";
import usergroup_validation from "../validations/usergroup_validation";
import Usergroupform from "./usergroupform";
import "./usergroup.scss";
import { Link } from "react-router-dom";

export default function UserGroup() {
  const { handleChange, values, handleSubmit, errors } =
    Usergroupform(usergroup_validation);
  return (
    <div className="app-wrapper mt-4">
      <div className="app-content pt-2 p-md-2">
        <div className="container-fluid">
          <div
            className="app-card alert alert-dismissible shadow-sm mb-4"
            role="alert"
          >
            <div className="inner">
              <div className="app-card-body p-2 p-lg-4"></div>
              <div className="app-card-body p-2 p-lg-4">
                <div className="row gx-2 gy-2">
                  <div className="col-12 mb-3">
                    <h5>Add User Groups</h5>
                  </div>
                </div>

                <div className="row gx-2 gy-2">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="Submission" className="form-label">
                      User Group Name <span className="red">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        name="userGroupName"
                        onChange={handleChange}
                        value={values.userGroupName}
                        className="form-control"
                        placeholder="Enter User Group Name"
                        aria-label="Enter Insured Name"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {errors.userGroupName && (
                      <p className="message">{errors.userGroupName}</p>
                    )}
                  </div>
                </div>

                <div className="row gx-2 gy-2">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="Submission" className="form-label">
                      User Group Description<span className="red">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        name="userGroupDesc"
                        onChange={handleChange}
                        value={values.userGroupDesc}
                        className="form-control"
                        placeholder="Enter User Group Description"
                        aria-label="Enter Insured Name"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {errors.userGroupDesc && (
                      <p className="message">{errors.userGroupDesc}</p>
                    )}
                  </div>
                </div>

                <div className="row gx-2 gy-2">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="Submission" className="form-label">
                      User Group Code <span className="red">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        name="userGroupCode"
                        onChange={handleChange}
                        value={values.userGroupCode}
                        className="form-control"
                        placeholder="Enter User Group Code"
                        aria-label="Enter Insured Name"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {errors.userGroupCode && (
                      <p className="message">{errors.userGroupCode}</p>
                    )}
                  </div>
                </div>

             
             

                <div className="col-12 mt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="next-pre-btn mrg-r-3"
                  >
                    Save
                  </button>
                  <Link to="/grouplist">
                    <button
                      type="button"
                      className="next-pre-btn-secondary mrg-r-3"
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
