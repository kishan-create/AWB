import React from 'react'
import { inputFormElements } from './inputFormElements'
export default function FormNew() {
   
  return (
    <div className="app-wrapper mt-4">
    <div className="app-content pt-2 p-md-2">
      <div className="container-fluid">
        <div className="app-card alert alert-dismissible shadow-sm mb-4" role="alert">

          <form>
           
          <div className="inner">
          {inputFormElements.map(forminputs=>{
         
           <div>{forminputs.label}</div>
        })}
            <div className="app-card-body p-2 p-lg-4">
              
              
              <div className="col-12 mt-4">
                <button type="button" className="btn app-btn-primary">Update</button>
                <button type="button" className="btn app-btn-secondary mx-3">Put on Hold</button>
                <button type="button" className="btn btn-link">Cancel</button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
