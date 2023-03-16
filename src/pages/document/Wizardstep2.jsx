import React, { useState } from "react";
import { useEffect } from "react";



import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import insurnnew from "../../images/insurancenew.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import Addwizard from "./functions/Addwizard";

export default function Wizardstep1({ previousID, previous }) {
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [content, setContent] = useState("");

  const [showtext, setShowText] = useState(true);
  const [showfile, setShowFile] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  

  const { handleSubmitFile, fileData,errors } = Addwizard(selectedOption, previousID,content,selectedFile);

  useEffect(() => {
    HideShowDivs(selectedOption);
  }, [selectedOption]);
  const handleSelect = async (e) => {
    setSelectedOption(e.target.value);
    HideShowDivs(selectedOption);
  };

  const HideShowDivs = async (seloptions) => {
    if (seloptions == "SMS" || seloptions == "EMAIL") {
      setShowText(true);
      setShowFile(false);
    } else {
      setShowText(false);
      setShowFile(true);
    }
  };
  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const toggleVisibility = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <div>
        <form
          noValidate
          encType="multipart/form-data"
          onSubmit={handleSubmitFile}
        >
          <div className=" ">
            <div className=" " role="alert">
              <div class="inner p-15">
                <div className="wizrd-bar-head m-b-15">
                  <div className="add-headd-wizard add-headd-wizard-active ">
                    {" "}
                    Document Form
                    <div class="bottom-arrow">.
                      <CheckCircleIcon />
                    

                    </div>
                  </div>
                  <div className="add-headd-wizard">
                    {" "}
                    Upload Document
                  
                    <div class="bottom-arrow">
                    <CheckCircleIcon />
                   
                      
                    </div>
                  </div>
                </div>

                <div className="page-grid-2">
                  <div className="">
                    <div>
                      <label htmlFor="options" className="form-label">
                        Select Type of Document :<span className="red"> *</span>
                      </label>
                      <div className="input-group mb-3">
                        <select
                          id="options"
                          className="form-control"
                          value={selectedOption}
                          onChange={handleSelect}
                        >

                          <option value="DOCX">DOCX</option>

                          <option value="SMS">SMS</option>
                          <option value="EMAIL"> EMAIL </option>
                        </select>
                        
                      </div>
                    </div>
                    <div>
                      {showfile && (
                        <div className="file-input">
                          <label for="file" class="btn choosefile-attach-txt">
                            <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              {" "}
                              <g>
                                {" "}
                                <path fill="none" d="M0 0h24v24H0z" />{" "}
                                <path d="M14.828 7.757l-5.656 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 1 0 12 4.929l-5.657 5.657a5 5 0 1 0 7.071 7.07L19.071 12l1.414 1.414-5.657 5.657a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 0 1 7.07 7.07L12 16.244A3 3 0 1 1 7.757 12l5.657-5.657 1.414 1.414z" />{" "}
                              </g>{" "}
                            </svg>
                            Select Document file:
                            <input
                              type="file"
                              accept=".dotx"
                              onChange={handleFileInputChange}
                            />
                          </label>
                       

                        </div>
                          
                      )}
                    </div>
                        
                    <div>
                      {showtext && (
                        <div>
                          <ReactQuill value={content} onChange={handleChange} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <img className="opc-9" src={insurnnew} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-l-15 m-b-50 ">
            <button
              className="next-pre-btn  mrg-r-3"
              type="button"
              onClick={previous}
            >
              Back
            </button>
            <button className="next-pre-btn  mrg-r-3" type="submit">
              Save
            </button>
          

            <Link to="/document">
            <button type="button" className="next-pre-btn-secondary mrg-r-3">
              Cancel{" "}
             
            </button>
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}
