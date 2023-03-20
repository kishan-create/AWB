import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";
import Multiplefileupload from "../../components/common/Multiplefileupload";
import AgencyHeader from "./../agency/includes/AgencyHeader"
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
import swal from "sweetalert";
import axios from "axios";



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

   const country = [
    { name: "India" },
  { name: "Us" }
];
  const state = [
    { name: "Kerala" },
  { name: "Tamilnadu" },
];

const county = [
  { name: "Ernamkulam" },
{ name: "Trissur" },
];
  const addressType = [
    { name: "Work Address" },
  { name: "Billing Address"},
   { name: "Permenent Addrzess" },
    { name: "Shipping Address", },
  ];

  
  const deleteAddress = async (e, id, index) => {
    console.log(index);
    console.log(id);
    e.preventDefault();
    const thisclickrow = e.currentTarget;
    swal({
      title: "Are you sure ??",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const response = axios
            .delete(process.env.REACT_APP_API_SERVICE_URL + `/addresses/${id}`)
            .then((response) => {
              if (response.status === 200) {
                swal({
                  title: "",
                  text: " Record deleted successfully",
                  icon: "success",
                  button: "OK",
                });
              }
              RemoveAddress(index);

            });
        }
        else {
          swal("Your file is safe!");
        }
      });
  };


   
 
  return (<div>
    <AgencyHeader />
    <div>
      <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
        <div className="app-wrapper mt-4">
          <div className="app-content pt-2 p-md-2">
            <h3 className="main-hrd-agncy">Add Agent Information </h3>

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
                        Agent Name <span className="red">*</span>
                      </label>
                      <div className="input-group mb-3">
                      <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Agent Name"
                            name="producerName"
                            onChange={handleChange}  
                            value={values.producerName}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                          />
                      </div>
                       {errors.producerName && (<p className="message">{errors.producerName}</p>)}
                    </div>
                    <div className="">
                      <label htmlFor="Submission" className="form-label">
                      Agent Email <span className="red">*</span>
                      </label>
                      <div className="input-group mb-3">
                      <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Agent Email"
                            name="producerEmail"
                            onChange={handleChange}
                            value={values.producerEmail}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                          />
                      </div>
                       {errors.producerEmail && (<p className="message">{errors.producerEmail}</p>)}
                    </div>
                    <div className="">
                      <label htmlFor="Submission" className="form-label">
                      Agent Phone Number<span className="red">*</span>
                      </label>
                      <div className="input-group mb-3">
                      <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Agent Phone Number"
                            name="producerPhone"
                            onChange={handleChange}
                            value={values.producerPhone}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                          />
                      </div>
                       {errors.producerPhone && (<p className="message">{errors.producerPhone}</p>)}
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
                            <TableCell>County</TableCell>

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
                            
                              <TableCell align="left">
                               {row.countryId}
                              </TableCell>
                              <TableCell align="left">
                                 { row.stateId}
                              </TableCell>
                              <TableCell align="right">
                              {row.countyId}
                              </TableCell>
                              <TableCell align="left">
                                {row.zip}
                              </TableCell>
                              <TableCell>
                                <DeleteIcon
                                   onClick={(e) => {

                                    deleteAddress(e, row.addrId, index);
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
                            <Multiplefileupload handleChangeFileUploads={handleChangeFileUploads}/>
                            </div> 
                            <div>
                              <div className="upload-righ-icon"></div>
                              
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

              <Link to="/listagent">
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
