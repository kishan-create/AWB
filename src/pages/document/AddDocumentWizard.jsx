import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";


import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteConfirm from "../../components/common/DeleteConfirm";
import Multiplefileupload from "../../components/common/Multiplefileupload"; 
import DocumentHeader from "../../pages/document/Includes/DocumentHeader"

import DocumentMultiStepForm from "./DocumentMultiStepForm";
export default function AddDocumentWizard() {
  

  // const { handleChange, handleSubmit, values } = AgencyFunctions(
  //   Agency_Validation,
  //   adressData,
  //   fileData
  // );
  // const getData = (data) => {
  //   //console.log(data);
  //   setAddressData(data);
  // };
  // const RemoveAddress = (index) => {
  //   const rows = [...adressData];
  //   rows.splice(index, 1);
  //   setAddressData(rows);
  // };
  
  // const handleChangeFileUploads =(data)=>
  // {
  //   setFileData(data);
  // }
  
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
