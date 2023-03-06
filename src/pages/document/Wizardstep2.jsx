import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";

import AgencyHeader from "./Includes/DocumentHeader";
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
import CircleIcon from '@mui/icons-material/Circle';
export default function Wizardstep2() {
  
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
                        <div class="bottom-arrow"><CheckCircleIcon /></div>
                        </div>
                        <div className="add-headd-wizard add-headd-wizard-active "> Upload Document
                        <div class="bottom-arrow"><CheckCircleIcon /></div>
                        </div>
                        <div className="add-headd-wizard"> Upload Files 
                        <div class="bottom-arrow-1"><CircleIcon /></div></div>
                    </div>
                      <div className=" p-tb-50">
                       
                      <div className="row gx-2 gy-2 btn-link-brd add-btn-mob">
                        <AddmultipleAdress addressData={getData}/>
                        <TableContainer component={Paper} >
                              <Table
                                sx={{ width: "100%" }}
                                aria-label="simple table"
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Address line 1</TableCell>
                                    <TableCell>Address line 2</TableCell>
                                    <TableCell>Country</TableCell>
                                    <TableCell>State</TableCell>
                                    <TableCell>Zip</TableCell>
                                    <TableCell>Delete</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                {adressData.map((row, index) => (
                                    <TableRow
                                      key={row.agent_Type}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell component="th" scope="row">
                                        {row.agent_Type}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.agent_Adress}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.agent_Address2}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.country}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.state}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.zip}
                                      </TableCell>
                                      <TableCell>
                                        <DeleteIcon
                                          onClick={() => {
                                            if (
                                              window.confirm(
                                                "Are you sure you wish to delete this item?"
                                              )
                                            )
                                              RemoveAddress(index);
                                          }}
                                        />
                                        <EditIcon />
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                  
                                    <TableRow >
                                      <TableCell component="th" scope="row">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell>
                                        <DeleteIcon />
                                        <EditIcon />
                                      </TableCell>
                                    </TableRow> 
                                    <TableRow >
                                      <TableCell component="th" scope="row">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell>
                                        <DeleteIcon />
                                        <EditIcon />
                                      </TableCell>
                                    </TableRow> 
                                    <TableRow >
                                      <TableCell component="th" scope="row">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell>
                                        <DeleteIcon />
                                        <EditIcon />
                                      </TableCell>
                                    </TableRow> 
                                    <TableRow >
                                      <TableCell component="th" scope="row">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="right">
                                      <div className="td-sample-txt1">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <div className="td-sample-txt">.</div>
                                      </TableCell>
                                      <TableCell>
                                        <DeleteIcon />
                                        <EditIcon />
                                      </TableCell>
                                    </TableRow> 
                                </TableBody>
                              </Table>
                            </TableContainer>
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
