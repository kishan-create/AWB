import * as React from "react";

import DocumentTabs from "../DocumentTabs";




export default function  ListDocumentData() {

  return (

    <div>
    <div className="app-status justify-content-between align-items-center">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
       
        <div className="col-auto">
          <div className="app-card-actions1">
            <div className="dropdown">
        
              <ul className="dropdown-menu p-3" data-popper-placement="bottom-start" style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(0px, 26px)'}}>
                <form className="app-search-form"> <input type="text" placeholder="Search by Quote id, name, location..." name="search" className="form-control search-input" /> 
                <button type="submit" className="btn search-btn btn-primary" value="Search">
                  <svg className="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                    <path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                    {/* <i class="fas fa-search"></i> Font Awesome fontawesome.com */}</button> </form>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />State</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Status</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Quote ID</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox" />Insured Name</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Coverage</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Program type</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Property</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Quote Assigned To</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox" />Comments</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox" />Submission Date &amp; Time</span></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Clear</a></li>
              </ul>
            </div>{/*//dropdown*/}
          </div>
                 </div>
      </div>
    </div>
  </div>

    <div className="app-wrapper mt-4">
    <div className="app-content pt-2 p-md-2">
      <div className="container-fluid">
        <div className="app-card alert alert-dismissible p-0 shadow-sm mb-4" role="alert">
          <div className="inner">
            <div className="table-responsive">
              
         

           <DocumentTabs/>
           
          

            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  </div>
  )
}
