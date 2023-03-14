import * as React from "react";
import logo from "../../images/awb_logo.svg";
import { Link } from "react-router-dom";

import Registration from "./Registration";
import registeration_validation from "../validations/registeration_validation";


export default function UserRegistration() {
  const { handleChange, values, handleSubmit, errors } = Registration(
    registeration_validation
  );
  return (
    <div>
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4">
              
              </div>
              <h2 className="auth-heading text-center mb-4">Add User</h2>
              <div className="auth-form-container text-start mx-auto">
                <form
                  className="auth-form auth-signup-form"
                  onSubmit={handleSubmit}
                >
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signup-email">
                      {" "}
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.userName}
                      id="signup-name"
                      name="userName"
                      type="text"
                      className="form-control signup-name"
                      placeholder=" Name"
                      
                    />

                    {errors.userName && (
                      <p className="message">{errors.userName}</p>
                    )}
                  </div>

                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signup-email">
                      {" "}
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.userEmail}
                      id="userEmail"
                      name="userEmail"
                      type="email"
                      className="form-control signup-email"
                      placeholder="Email"
                      
                    />
                    {errors.userEmail && (
                      <p className="message">{errors.userEmail}</p>
                    )}
                  </div>

                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signup-email">
                      Full Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.userFullName}
                      id="userFullName"
                      name="userFullName"
                      type="text"
                      className="form-control signup-name"
                      placeholder="Full name"
                      
                    />
                    {errors.userFullName && (
                      <p className="message">{errors.userFullName}</p>
                    )}
                  </div>

                  <div className="phone mb-3">
                    <label className="sr-only" htmlFor="signup-phone">
                      Phone{" "}
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.userPhone}
                      id="userPhone"
                      name="userPhone"
                      type="text"
                      className="form-control signup-phone"
                      placeholder="Phone"
                      
                    />
                    {errors.userPhone && (
                      <p className="message">{errors.userPhone}</p>
                    )}
                  </div>

                  <div className="password mb-3">
                    <label className="sr-only" htmlFor="signup-password">
                      Password
                    </label>
                    <input
                      id="signup-password"
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      type="password"
                      className="form-control signup-password"
                      placeholder="Create a password"
                      
                    />
                    {errors.password && (
                      <p className="message">{errors.password}</p>
                    )}
                  </div>

                  <div className="extra mb-3">
                   
                  </div>
                  {/*//extra*/}
                  <div className="text-center">
                    <div className="p-l-15">
                      {" "}
                      <button className="next-pre-btn mrg-r-3" type="save">
                        Save
                      </button>{" "}
                      <Link to="/" >
                      <button
                        type="button"
                        className="next-pre-btn-secondary mrg-r-3"
                      >
                        Cancel
                      </button>{" "}
                      </Link>
                    </div>
                  
                  </div>
                </form>
              
              </div>
      
            </div>
         
          </div>
  
        </div>
  
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div className="auth-background-holder"></div>
          <div className="auth-background-mask" />
          <div className="auth-background-overlay p-3 p-lg-5">
            <div className="d-flex flex-column align-content-end h-100">
              <div className="h-100" />
            </div>
          </div>
          {/*//auth-background-overlay*/}
        </div>
        {/*//auth-background-col*/}
      </div>
      {/*//row*/}
    </div>
  );
}
