import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";
import Multiplefileupload from "../../components/common/Multiplefileupload";
import AgencyHeader from "./includes/AgencyHeader";
import AgentFunctions from "../functions/AgentFunctions"
import Agent_validation from "../validations/Agent_validation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
export default function Addagent() {
  const [seen,setSeen] = useState([]);
  const [adressData, setAddressData] = useState([]);
  const[addressvalue, setAddressValue] = useState([]);
  const [listadd, SetListadd] = useState([]);



  const { handleChange, handleSubmit, values, errors, } = AgentFunctions(Agent_validation,seen,adressData,listadd);

  const getData = (data) => {
    setAddressData(data);
  };
  const getValue = (value) =>{
    setAddressValue(value);
  }

   const getAddressDataLatest=(listaddress) =>
  {
    SetListadd(listaddress);
  }

  const RemoveAddress = (index) => {
    const rows = [...adressData];
    rows.splice(index, 1);
    setAddressData(rows);
  };
  const handleChangeFileUploads = (data) => {
       setSeen(data)
   };

  // console.log(addressvalue);
   
 
  return (
    <div>
      <AgencyHeader />
      <div className="app-wrapper mt-4">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div className="app-card alert alert-dismissible shadow-sm mb-4"
              role="alert"  >
                <div className="inner p-15">
                <h4 className="add-headd-sub1">Agent Information</h4>
                <div className="page-grid-3">
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                         Name <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                        
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agent Name"
                            name="producerName"
                            onChange={handleChange}  
                            value={values.producerName}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                          />
                        {errors.producerName && (<p className="message">{errors.producerName}</p>)}

                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                         Email <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="producerEmail"
                            onChange={handleChange}
                            value={values.producerEmail}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                          />
                        {errors.producerEmail && (<p className="message">{errors.producerEmail}</p>)}

                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Phone <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Phone"
                            name="producerPhone"
                            onChange={handleChange}
                            value={values.producerPhone}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                          />
                        {errors.producerPhone && (<p className="message">{errors.producerPhone}</p>)}

                        </div>
                      </div>
                </div>
                </div>
                
</div>
</div>
</div>
</div>
      <div className="app-wrapper ">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div
              className="app-card alert alert-dismissible shadow-sm mb-4"
              role="alert"
            >
              <form onSubmit={handleSubmit} noValidate>
                <div className="inner">
                  <div className="app-card-body p-2 p-lg-4">
                  <h4 className="add-headd-sub">Add Additional Information</h4> 
                    {(() => {
                      if (adressData.length > 0) {
                        return (
                           
                          <TableContainer component={Paper}>
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
                                      {row.addrType}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.addrLine1}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.addrLine2}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.countryId}
                                    </TableCell>
                                    <TableCell align="left">
                                      {row.stateId}
                                    </TableCell>
                                    <TableCell align="left">
                                      {row.zip}
                                    </TableCell>
                                    <TableCell>
                                      <DeleteIcon
                                        onClick={() => RemoveAddress(index)}
                                       
                                      />
                                      < EditIcon/>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        );
                      }
                    })()}
                    <div className="row gx-2 gy-2">
                    {/* <AddmultipleAdress addressData={getData} addressValue={getValue} /> */}
                    <AddmultipleAdress addressData={getData}  latestAddress={getAddressDataLatest}/>
                    
                    </div>

                    <br/>
                    <h6>Upload Documents</h6>
                    <div className="col-sm-4">
                      <Multiplefileupload handleChangeFileUploads={handleChangeFileUploads}/>
                    </div>
                  </div>
                  <div className="app-card-body p-2 p-lg-4">
                    <div className="col-12 mt-4">
                      <input
                        type="submit"
                        value="Submit"
                        className="next-pre-btn mrg-r-3"
                      />

<Link to="/listagency">
                      <button type="button" className="next-pre-btn-secondary mrg-r-3 ">
                        Cancel
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
