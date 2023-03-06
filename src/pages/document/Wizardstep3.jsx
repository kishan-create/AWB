import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";

import AgencyHeader from "./includes/AgencyHeader";
import AgencyFunctions from "../../functions/AgencyFunctions";
import Agency_Validation from "../validations/Agency_Validation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteConfirm from "../../components/common/DeleteConfirm";
import Multiplefileupload from "../../components/common/Multiplefileupload"; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import insurn from "../../images/Insurance2.svg"
export default function Wizardstep3() {
  
  const [adressData, setAddressData] = useState([]);
  const [fileData, setFileData] = useState([]);
  const { handleChange, handleSubmit, values } = AgencyFunctions(
    Agency_Validation,
    adressData,
    fileData
  );
  const getData = (data) => {
    //console.log(data);
    setAddressData(data);
  };
  const RemoveAddress = (index) => {
    const rows = [...adressData];
    rows.splice(index, 1);
    setAddressData(rows);
  };
  
  const handleChangeFileUploads =(data)=>
  {
    setFileData(data);
  }
  
  //console.log(fileData);
  return (
    <div>
      
      <div>
        <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
            
          
                
              <div className=" ">
            
                <div
                  className=" "
                  role="alert"
                >
                  <div class="inner p-15">
                  
                  <div className="">
                       
                  <div className="wizrd-bar-head m-b-15">
                        <div className="add-headd-wizard"> Basic Information 
                        <div class="bottom-arrow"><CheckCircleIcon /></div></div>
                        <div className="add-headd-wizard"> Add Address
                        <div class="bottom-arrow"><CheckCircleIcon /></div>
                        </div>
                        <div className="add-headd-wizard add-headd-wizard-active "> Upload Files
                        <div class="bottom-arrow"><CheckCircleIcon /></div> </div>
                    </div>
                      <div className="page-grid-2 p-tb-50">
                            <div className="choose-file-sty">
                            <Multiplefileupload handleChangeFileUploads={handleChangeFileUploads}/>
                            </div> 
                            <div>
                              <div className="upload-righ-icon"> <img src={insurn}/></div>
                              
                            </div>
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
