

import React, { useState } from "react";
import { useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import Document_Validation from "../validations/Document_Validation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import insurnnew from "../../images/insurancenew.svg";


export default function Wizardstep1({ next, previous }) {
  //  const { } =Addwizard(tempid)
  const [tempid, setTempid] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});


   const [values, SetValues] = useState({

    templateName:"", 
  templateDec: "",
  templateCode: "",
  filter1: "",
  filter2: "",
 
 
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    

    const test = setErrors(Document_Validation(values));
    setSubmitted(true);
    onSubmitform();
  };
  const onSubmitform = (e) => {
      
    const response = axios.post(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/docgeneration",
      values
    ).then((response) => {
      if (response.status === 200) {
                 let templateID= response.data.templateId;
                 setTempid(templateID);
           
  
      
  next(templateID);

      }
    });;



    
  };


 
  return (
    <div>
      <div>
              
        <form noValidate encType="multipart/form-data"   onSubmit={handleSubmit} >
          <div className=" ">
            <div className=" " role="alert">
              <div class="inner p-15">
                <div className="wizrd-bar-head m-b-15">
                  <div className="add-headd-wizard add-headd-wizard-active ">
                    {" "}
                    Document Form
                    <div class="bottom-arrow">
                      <CheckCircleIcon />
                    </div>
                  </div>
                  <div className="add-headd-wizard">
                    {" "}
                    Upload Document
                    <div class="bottom-arrow-1">
                      <CircleIcon />
                    </div>
                  </div>
                </div>
                <div className="page-grid-2">
                  <div className="">
                    <div className="p-b-15">
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                          Template Name<span className="red"> *</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Template Name"
                            name="templateName"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.templateName}
                          />
                    {errors.templateName && (<p className="message">{errors.templateName}</p>)}

                        </div>
                      </div>

                      <label htmlFor="options">
                        Template-Code :<span className="red"> *</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Template Description"
                          name="templateCode"
                          onChange={handleChange}
                          aria-label="Date of Submission"
                          aria-describedby="basic-addon1"
                          value={values.templateCode}
                        />
                    {errors.templateCode && (<p className="message">{errors.templateCode}</p>)}

                      </div>
                    </div>

                    <div className="p-b-15">
                      <label htmlFor="Submission" className="form-label">
                        Temporary Description <span className="red"> *</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Template Description"
                          name="templateDec"
                          onChange={handleChange}
                          aria-label="Date of Submission"
                          aria-describedby="basic-addon1"
                          value={values.templateDec}
                        />
                    {errors.templateDec && (<p className="message">{errors.templateDec}</p>)}

                      </div>
                    </div>

                    <div className="p-b-15">
                      <label htmlFor="Submission" className="form-label">
                        Tag 1<span className="red"> *</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Filter 1"
                          name="filter1"
                          onChange={handleChange}
                          aria-label="Date of Submission"
                          aria-describedby="basic-addon1"
                          value={values.filter1}
                        />
                                                {errors.filter1 && (<p className="message">{errors.filter1}</p>)}

          
                      </div>
                    </div>

                    <div className="p-b-15">
                      <label htmlFor="Submission" className="form-label">
                        Tag 2<span className="red"> *</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Filter 2"
                          name="filter2"
                          onChange={handleChange}
                          aria-label="Date of Submission"
                          aria-describedby="basic-addon1"
                          value={values.filter2}
                        />
                         {errors.filter2 && (<p className="message">{errors.filter2}</p>)}

                      </div>
                    </div>
                  </div>

                  <div>
                    <img className="opc-9" src={insurnnew} />
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="p-l-15">
            <button
              className="next-pre-btn  mrg-r-3"
              type="submit"
              // onClick={next}
            >
              Next
            </button>
            <Link to="/listdocument">
            <button
              type="button"
              className="next-pre-btn-secondary mrg-r-3"
            >
              Cancel{" "}
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
