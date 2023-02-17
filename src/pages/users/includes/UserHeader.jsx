import React from 'react'

export default function UserHeader() {
   
  return (
    <div className="app-status">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="progress-bar-container col-9">
        {/*  <ul>
            <li className="step step01 active"><img src="assets/images/check.svg" alt="" title />
              <div className="step-inner">Create New Submission</div>
            </li>
            <li className="step step02">
              <div className="step-inner">Property Details</div>
            </li>
            <li className="step step03">
              <div className="step-inner">Additional info</div>
            </li>
            <li className="step step04">
              <div className="step-inner">Ratings</div>
            </li>
            <li className="step step05">
              <div className="step-inner">Quote Summary</div>
            </li>
            <li className="step step06">
              <div className="step-inner">Binder Generation</div>
            </li>
          </ul>*/ }
         {/* <div id="line">
            <div id="line-progress" />
          </div>
        </div>*/ }
        </div>
        <div className="col-auto">
          <button type="button" className="btn app-btn-primary">Upload Documents</button>
        </div>
      </div>
    </div>
  </div>
  )
}
