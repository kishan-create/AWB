import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";



import DocumentHeader from "../../pages/document/Includes/DocumentHeader"

import DocumentMultiStepForm from "./DocumentMultiStepForm";
export default function AddDocumentWizard() {
  

  
  
  const handleSubmit =()=>
  {
    console.log("handle submit");
  }
 
  return (
    <div>
      <DocumentHeader />
     
      <div>
        <form   onSubmit={handleSubmit} noValidate encType="multipart/form-data">
            
          <div className="app-wrapper mt-4">
            <div className="app-content pt-2 p-md-2">
                
              <div className="container-fluid">
            
                <div
                  className="app-card alert alert-dismissible shadow-sm mb-4"
                  role="alert"
                >
                  <div class="inner p-15">
                    
                      <h3 className="main-hrd-agncy">Add Document Information </h3>
                  <DocumentMultiStepForm />
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
