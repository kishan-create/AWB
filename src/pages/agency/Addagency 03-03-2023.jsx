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
  const { handleChange, handleSubmit, values,errors } = AgencyFunctions(
    Agency_Validation,
    adressData,
    fileData,
    listadd
  );
  const getData = (data) => {
    setAddressData(data);
  };
  const RemoveAddress = (index) => {
    const rows = [...adressData];
    rows.splice(index, 1);
    setAddressData(rows);
  };

  const handleChangeFileUploads = (data) => {
    setFileData(data);
  };
  const getAddressDataLatest = (listaddress) => {
    SetListadd(listaddress);
  };

  return (
    <div>
      <AgencyHeader />
      <div>
        <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
          <div className="app-wrapper mt-4">
            <div className="app-content pt-2 p-md-2">
              <div className="container-fluid">
                <div
                  className="app-card alert alert-dismissible shadow-sm mb-4"
                  role="alert"
                >
                  <div class="inner p-15">
                    <h4 className="add-headd-sub1">Agency Details</h4>
                    <div className="page-grid-3">
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Agency Name <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Name"
                            name="agencyName"
                            required
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.agencyName}
                          />
                        </div>
                        {errors.agencyName && (
                        <p className="message">{errors.agencyName}</p>
                      )}
                      </div>
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Agency Npn <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Npn"
                            name="agencyNpn"
                            required
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.agencyNpn}
                          />
                        </div>
                        {errors.agencyNpn && (
                        <p className="message">{errors.agencyNpn}</p>
                      )}
                      </div>
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Agency Fbin<span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Fbin"
                            name="agencyFbin"
                            required
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.agencyFbin}
                          />
                          
                        </div>
                        {errors.agencyFbin && (
                        <p className="message">{errors.agencyFbin}</p>
                      )}
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
                      <h4 className="add-headd-sub">
                        Add Additional Information
                      </h4>
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
                                </TableBody>
                              </Table>
                            </TableContainer>
                          );
                        }
                      })()}
                      <div className="row gx-2 gy-2">
                        <AddmultipleAdress
                          addressData={getData}
                          latestAddress={getAddressDataLatest}
                        />
                      </div>
                    </div>
                    <div className="app-card-body p-2 p-lg-4">
                      <h4 className="add-headd-sub">Upload Files</h4>

                      <div className="row gx-2 gy-2">
                        <Multiplefileupload
                          handleChangeFileUploads={handleChangeFileUploads}
                        />
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
                          <button type="button" className="next-pre-btn-secondary mrg-r-3">
                            Cancel
                          </button>
                        </Link>
                      </div>
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
