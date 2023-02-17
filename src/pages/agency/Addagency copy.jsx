import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";
import Multiplefileupload from "../../components/common/Multiplefileupload";
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
export default function Addagency() {
  const [adressData, setAddressData] = useState([]);
  const { handleChange, handleSubmit } = AgencyFunctions(Agency_Validation);
  const getData = (data) => {
    //console.log(data);
    setAddressData(data);
  };
  const RemoveAddress = (index) => {
    const rows = [...adressData];
    rows.splice(index, 1);
    setAddressData(rows);
  };
  return (
    <div>
      <AgencyHeader />
      <div className="app-wrapper mt-4">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div
              className="app-card alert alert-dismissible shadow-sm mb-4"
              role="alert"
            >
              <form onSubmit={handleSubmit} noValidate>
                <div className="inner">
                  <div className="app-card-body p-2 p-lg-4">
                    <div className="row gx-2 gy-2">
                      <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <label htmlFor="Submission" className="form-label">
                          Agency Name <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Name"
                            name="agencyName"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <label htmlFor="Submission" className="form-label">
                          Agency Npn <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Npn"
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            name="agencyNpn"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <label htmlFor="Submission" className="form-label">
                          Agency Fbin <span className="red">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Fbin"
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            name="agencyFbin"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    {(() => {
                      if (adressData.length > 0) {
                        return (
                          <TableContainer component={Paper}>
                            <Table
                              sx={{ width: "75%" }}
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
                                        onClick={() => RemoveAddress(index)}
                                      />
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
                      <AddmultipleAdress addressData={getData} />
                    </div>
                    <div className="col-sm-4">
                      <Multiplefileupload />
                    </div>
                  </div>
                  <div className="app-card-body p-2 p-lg-4">
                    <div className="col-12 mt-4">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn app-btn-primary"
                      />

                      <button
                        type="button"
                        className="btn app-btn-secondary mx-3"
                      >
                        Put on Hold
                      </button>
                      <button type="button" className="btn btn-link">
                        Cancel
                      </button>
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
