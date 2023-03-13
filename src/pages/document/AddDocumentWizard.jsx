import React, { useState } from "react";
import DocumentHeader from "../../pages/document/Includes/DocumentHeader";
import DocumentMultiStepForm from "./DocumentMultiStepForm";
export default function AddDocumentWizard() {


  return (
    <div>
      <DocumentHeader />

      <div>

          <div className="app-wrapper mt-4">
            <div className="app-content pt-2 p-md-2">
              <div className="container-fluid">
                <div
                  className="app-card alert alert-dismissible shadow-sm mb-4"
                  role="alert"
                >
                  <div class="inner p-15">
                    <h3 className="main-hrd-agncy">
                      Add Document Information{" "}
                    </h3>
                    <DocumentMultiStepForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}
