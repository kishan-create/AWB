import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import http from "./../../components/common/http-common"
import axios from "axios";
import { useParams } from 'react-router-dom';

import MultipleAddressValidation from "../../pages/validations/MultipleAddressValidation";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    with: "75%",
    height: "440px",
  },
};

export default function EditMultipleAddress(props) {
  const [name, SetName] = useState("");
  const [errors, setErrors] = useState({});
  let subtitle;
  let count = 0;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputFields, setInputFields] = useState([
    {
      addrType: "",
      addrLine1: "",
      addrLine2: "",

      countryId: "",
      stateId: "",
      countyId: "",
      zip: "",
    },
  ]);
  const countries = [
    {value: "0", text: "Select"}, 
    {value: "1", text: "USA"}, 
    {value: "2", text: "Canada"}, 
    {value: "3", text: "Japan"}, 
    {value: "4", text: "Mexico"}
  ]
  const [listaddress, SetlistAddress] = useState([]);
  const [btnCount, setbtnCount] = useState(0);
  const [countryName, SetCountryName] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
const params=useParams();
const agencyID = params.id 
//console.log(agencyID);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
     
      onSubmitform(inputFields[btnCount], btnCount);
    }
  //  getAllCountryName();
    props.latestAddress(listaddress);
  }, [listaddress, errors]);
  const getAllCountryName = async () => {
    const response = http.get("/lookupdata/2").then((response) => {
      if (response.status === 200) {
        SetCountryName(response.data);
      }
    });
  };
  function afterOpenModal() {
  }

  function closeModal() {
    props.method(agencyID);

    setIsOpen(false);
  }
  const handleChangeDrop = (index, evnt) => {};

  const handleChange = (index, evnt) => {
   
    inputFields[index][evnt.target.name] = evnt.target.value;
  };
  const getStateValues = async (id) => {};
  const addAddress = () => {
   
    submitEachAddress(inputFields[btnCount], btnCount);
  };
  const submitEachAddress = (inputs, btnCount) => {
    let error = MultipleAddressValidation(inputs);
    setErrors(error);
    setIsSubmitting(true);
  };
  
  const onSubmitform = (inputs,btncount) => {
      
    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/addresses", inputs)
      .then((response) => {

        if ( response.status === 200) {
         
       
        // else if (response.status === 200) {
          let data = {
            addrType: "",
            addrLine1: "",
            addrLine2: "",
      
            countryId: "",
            stateId: "",
            countyId: "",
            zip: "",
          };
          setInputFields((prevState) => [...prevState, data]);
          setbtnCount(btnCount + 1);
          props.addressData(inputFields);
          SetlistAddress([...listaddress,{
            agyAddrTypeCode : response.data.addrType,
            agencyId : agencyID,
            addressId:response.data.addrId

          }])

      submitAddress( listaddress, agencyID);
      


          
         
        }
       
       
      });

  }


  const submitAddress = () => {
  // console.log(listaddress);
    
    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/agencyaddr", listaddress)
      .then((response) => {
        if (response.status === 200) {
            setIsSubmitting(false);
          closeModal();
        }

    })
  };
  

  
  return (
    <div>
      <div class="col-12">
      
        <button onClick={openModal}
                              type="button"
                              class="next-pre-btn mrg-r-3 fl-right"
                            >
                              + Add Address
                            </button>
      </div>
      <div></div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div>
            <div class="row gx-2 gy-2">
              <div class="col-12 mb-3"></div>
            </div>
            <div className="row gx-2 gy-2">
              <div className="page-grid-3">
                <div className="">
                  <label htmlFor="Submission" class="form-label">
                    Agency address Type <span class="red">*</span>
                  </label>
                  <select
                    class="form-select mb-3"
                    name="addrType"
                    onChange={(evnt) => handleChange(btnCount, evnt)}
                    defaultValue={inputFields.addrType}
                  >
                    <option value="Select Address">Select your Address</option>
                    <option value="1">Work Address</option>
                    <option value="2">Billing Address</option>
                    <option value="3">Permenent Address </option>
                    <option value="4">Shipping Address</option>
                  </select>
                  {errors.addrType && (
                    <p className="message">{errors.addrType}</p>
                  )}
                </div>

                <div class="">
                  <label htmlFor="Submission" className="form-label">
                    {" "}
                    Address line 1<span className="red">*</span>
                  </label>
                  <div className="input-group ">
                    <input
                      type="text"
                      name="addrLine1"
                      className="form-control"
                      placeholder="Enter Address line 1"
                      aria-label="Enter Insured Name"
                      aria-describedby="basic-addon1"
                      onChange={(evnt) => handleChange(btnCount, evnt)}
                      value={inputFields.addrLine1}
                    />
                  </div>
                  {errors.addrLine1 && (
                    <p className="message">{errors.addrLine1}</p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="Submission" className="form-label">
                    {" "}
                    Address line 2<span className="red">*</span>
                  </label>
                  <div className="input-group ">
                    <input
                      type="text"
                      name="addrLine2"
                      className="form-control"
                      placeholder="Address line 2"
                      aria-label="Enter Insured Name"
                      aria-describedby="basic-addon1"
                      onChange={(evnt) => handleChange(btnCount, evnt)}
                      value={inputFields.addrLine2}
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="Submission" className="form-label">
                    Country <span className="red">*</span>
                  </label>
                  
                  <select
                    class="form-control"
                    name="countryId"
                    onChange={(evnt) => handleChange(btnCount, evnt)}
                    value={inputFields.countryId}
                  >
                    <option value="Select Country">Select</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                  </select>
                  {errors.countryId && (
                    <p className="message">{errors.countryId}</p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="Submission" className="form-label">
                    State <span className="red">*</span>
                  </label>
                  <select
                    class="form-control"
                    name="stateId"
                    onChange={(evnt) => handleChange(btnCount, evnt)}
                    value={inputFields.stateId}
                  >
                    <option value="Select State">Select</option>
                    <option value="1">Kerala</option>
                    <option value="2">TamilNadu</option>
                  </select>
                  {errors.stateId && (
                    <p className="message">{errors.stateId}</p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="Submission" className="form-label">
                    County <span className="red">*</span>
                  </label>
                  <select
                    class="form-control"
                    name="countyId"
                    onChange={(evnt) => handleChange(btnCount, evnt)}
                    value={inputFields.countyId}
                  >
                    <option value="Select State">Select</option>
                    <option value="1">Ernamkulam</option>
                    <option value="2">Trissur</option>
                  </select>
                  {errors.countyId && (
                    <p className="message">{errors.countyId}</p>
                  )}
                </div>

                <div className="">
                  <label htmlFor="Submission" className="form-label">
                    Zip <span className="red">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name="zip"
                      className="form-control"
                      placeholder="zip"
                      aria-label="Date of Submission"
                      aria-describedby="basic-addon1"
                      onChange={(evnt) => handleChange(btnCount, evnt)}
                      value={inputFields.zip}
                    />
                  </div>
                  {errors.zip && <p className="message">{errors.zip}</p>}
                </div>
                <div className=""></div>
              </div>
            </div>

            <div className="row gx-2 gy-4"></div>
          </div>

          <div class="col-12">
            <button type="button" class="next-pre-btn mrg-r-3" onClick={addAddress}>
            
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
