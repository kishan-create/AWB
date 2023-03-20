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
import { Link } from "react-router-dom";
export default function Addagency() {
  const [adressData, setAddressData] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [listadd, SetListadd] = useState([]);
  const { handleChange, handleSubmit, values,errors,DeleteAddress } = AgencyFunctions(
    Agency_Validation,
    adressData,
    fileData,
    listadd,
    setAddressData,
  );
  const getData = (data) => {
    console.log(data);
    setAddressData(data);
  };


  const handleChangeFileUploads = (data) => {
    setFileData(data);
  };
  const getAddressDataLatest = (listaddress) => {
    SetListadd(listaddress);
  };
  const country = [
    { name: "India" },
  { name: "Us" }
];
  const state = [
    { name: "Kerala" },
  { name: "Tamilnadu" },
];
  const addressType = [
    { name: "Work Address" },
  { name: "Billing Address"},
   { name: "Permenent Addrzess" },
    { name: "Shipping Address", },
  ];
  return (
    <div>
      <AgencyHeader />
      <div>
        <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
          <div className="app-wrapper mt-4">
            <div className="app-content pt-2 p-md-2">
              <h3 className="main-hrd-agncy">Add Agency Information </h3>

              <div className="container-fluid">
                <div
                  className="app-card alert alert-dismissible shadow-sm mb-4"
                  role="alert"
                >
                  <div class="inner p-15">
                    <div className="add-headd-wizard add-headd-wizard-active "> Basic Information </div>


                    <div className="page-grid-3">
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Agency Name <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Agency Name"
                            name="agencyName"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.agencyName}
                          />
                        </div>
                         {errors.agencyName && (<p className="message">{errors.agencyName}</p>)}
                      </div>
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Agency Npn <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Agency Npn"
                            name="agencyNpn"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.agencyNpn}
                          />
                        </div>
                         {errors.agencyNpn && (<p className="message">{errors.agencyNpn}</p>)}
                      </div>
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Agency Fbin<span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Agency Fbin"
                            name="agencyFbin"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.agencyFbin}
                          />
                        </div>
                         {errors.agencyFbin && (<p className="message">{errors.agencyFbin}</p>)}
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
                  <div className="inner">
                    <div className="app-card-body p-2 p-lg-4">
                      <div className="row gx-2 gy-2 btn-link-brd add-btn-mob">
                        <h4 className="add-headd-sub">
                          Add Address
                      </h4>
                      </div>
                      <div className="row gx-2 gy-2">
                        <div className="row gx-2 gy-2 btn-link-brd add-btn-mob">
                          <AddmultipleAdress
                            addressData={getData}
                            latestAddress={getAddressDataLatest}
                          />
                        </div>

                      </div>
                      <br>
                      </br>
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
                              <TableCell></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {adressData.map((row, index) => (
                              <TableRow
                                key={row.addrType}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                {addressType[row.addrType - 1].name}
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
                                   { row.stateId}
                                </TableCell>
                                <TableCell align="left">
                                  {row.zip}
                                </TableCell>
                                <TableCell>
                                  <DeleteIcon
                                    onClick={() => {
                                  
                                      DeleteAddress(index,row.addressId);
                                    }}
                                  />
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
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <div className="row gx-2 gy-2 btn-link-brd add-btn-mob"></div>

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
                  <div className="inner">
                    <div className="app-card-body p-2 p-lg-4">
                      <div className="row gx-2 gy-2 btn-link-brd add-btn-mob">


                        <div className="app-card-body p-2 p-lg-4">
                          <h4 className="add-headd-sub">Upload Files</h4>

                          <div className="page-grid-2 p-tb-50">
                            <div className="choose-file-sty">
                              <Multiplefileupload handleChangeFileUploads={handleChangeFileUploads} />
                            </div>
                            <div>
                              <div className="upload-righ-icon"> </div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-card-body p-2 p-lg-4">
              <div className="col-12 mt-4">
                <input
                  type="submit"
                  value="Save"
                  className="next-pre-btn mrg-r-3"
                />

                <Link to="/listagency">
                  <button type="button" className="next-pre-btn-secondary mrg-r-3">
                    Cancel
                          </button>
                </Link>
              </div>



            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
