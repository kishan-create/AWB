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
import axios from "axios";
import Multiplefileupload from "./../../components/common/Multiplefileupload"

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

export default function FilePopUp(id) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

 
  const [listaddress, SetlistAddress] = useState([]);
  const [btnCount, setbtnCount] = useState(0);
  const [countryName, SetCountryName] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [seen,setSeen] = useState([]);

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    
     
      onSubmitform();
    
  //  getAllCountryName();
  },);
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChangeFileUploads = (data) => {
    setSeen(data)
};



  const onSubmitform = (inputs,btncount) => {
    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/addresses", inputs)
      .then((response) => {
       
        if (response.status === 200) {
        
         
          setIsSubmitting(false);
          closeModal();
         
        }
       
       
      });

  }

  
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
          Add Documents
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
     <div className="app-card-body p-2 p-lg-4">
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
              
              <button   type="button" className="next-pre-btn-secondary mrg-r-3">
                Save
              </button>

              
              

                <button type="button" className="next-pre-btn-secondary mrg-r-3">
                  Cancel
                        </button>
            </div>



          </div>
        </div>

          </div>
       
      </Modal>
    </div>
  );
}
