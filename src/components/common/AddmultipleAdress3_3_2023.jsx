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
import http from "./http-common";
import axios from "axios";
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

export default function AddmultipleAdress(props) {
  const [name, SetName] = useState("shanu");
  let subtitle;
  let count = 0;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // const [address1,setAddress1]=useState("");
  const [inputFields, setInputFields] = useState([
    {
      addrType: "",
      addrLine1: "",
      addrLine2: "",

      countryId: "",
      stateId: "",
      countyId: "3",
      zip: "",
    },
  ]);

  const [listaddress, SetlistAddress] = useState([]);
  const [btnCount, setbtnCount] = useState(0);
  const [countryName, SetCountryName] = useState([]);
  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    getAllCountryName();
    props.latestAddress(listaddress);
  }, [listaddress]);
  const getAllCountryName = async () => {
    const response = http.get("/lookupdata/2").then((response) => {
      if (response.status === 200) {
        SetCountryName(response.data);
      }
    });
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
   
    setIsOpen(false);
  }
  const handleChangeDrop = (index, evnt) => {};

  const handleChange = (index, evnt) => {
    if (evnt.target.name === "country" && evnt.target.value !== "") {
      getStateValues(evnt.target.value);
    }
    inputFields[index][evnt.target.name] = evnt.target.value;
  };
  const getStateValues = async (id) => {};
  const addAddress = () => {
    {
      setbtnCount(btnCount + 1);
      let data = {
        addrType: "",
        addrLine1: "",
        addrLine2: "",

        countryId: "",
        stateId: "",
        countyId: "3",
        zip: "",
      };
      //  data[evnt.target.name] = evnt.target.value;
      setInputFields((prevState) => [...prevState, data]);
      SetlistAddress(inputFields);
      submitEachAddress(inputFields[btnCount], btnCount);
      SetlistAddress({
        addrType: "",
        addrLine1: "",
        addrLine2: "",

        countryId: "",
        stateId: "",
        countyId: "3",
        zip: "",
      });
    }
    props.addressData(inputFields);
    closeModal();
  };
  const submitEachAddress = (inputs, btnCount) => {
    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/addresses", inputs)
      .then((response) => {
       
        if (response.status === 200) {
          SetlistAddress([...listaddress,{
            agyAddrTypeCode : response.data.addrType,
            agencyId : "",
            addressId:response.data.addrId

          }])
         
        }
       
       
      });
  };
 
  return (
    <div>
      <div class="col-12">
        <button onClick={openModal} type="button" class="btn btn-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 25 24"
          >
            <path fill="#158AF5" d="M11.594 19v-6h-6v-2h6V5h2v6h6v2h-6v6h-2Z" />
          </svg>
          Add Address
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
                    defaultValue={inputFields.agent_Type}
                  >
                    <option selected="" value="1">
                      Work Address
                    </option>
                    <option value="2">Billing Address</option>
                    <option value="3">Permenent Address </option>
                    <option value="4">Shipping Address</option>
                  </select>
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
                      value={listaddress.agent_Address}
                    />
                  </div>
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
                      value={inputFields.agent_Address2}
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
                </div>
                <div className=""></div>
              </div>
            </div>

            <div className="row gx-2 gy-4"></div>
          </div>

          <div class="col-12">
            <button type="button" class="btn btn-link" onClick={addAddress}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                fill="none"
                viewBox="0 0 25 24"
              >
                <path
                  fill="#158AF5"
                  d="M11.594 19v-6h-6v-2h6V5h2v6h6v2h-6v6h-2Z"
                />
              </svg>
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
