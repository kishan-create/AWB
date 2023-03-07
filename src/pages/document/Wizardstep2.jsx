import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import insurnnew from "../../images/insurancenew.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";

export default function Wizardstep1({ next, previous }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [content, setContent] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [showtext, setShowText] = useState(true);
  const [showfile, setShowFile] = useState(false);
  useEffect(() => {
    HideShowDivs(selectedOption);
  }, [selectedOption]);
  const handleSelect = async (e) => {
    setSelectedOption(e.target.value);
    HideShowDivs(selectedOption);
  };
  const HideShowDivs = async (seloptions) => {
    if (seloptions == "0" || seloptions == "2") {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    console.log("test");
    // TODO: Handle the file upload here
    console.log(selectedFile);
    console.log(selectedOption);
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
        <form noValidate encType="multipart/form-data" onSubmit={handleSubmit}>
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

                <div  className="p-b-15" >
                 <div className=" col-12 col-sm-6 col-md-4 col-lg-6">
                  <label htmlFor="options"  className="form-label" >
                    Select Type of Document :<span className="red"> *</span>
                  </label>
                  <div className="input-group mb-3">
                  <select
                    id="options"
                    className="form-control"
                    value={selectedOption}
                    onChange={handleSelect}
                  >
                    <option value="">Select Upload File Type</option>

                    <option value="0">SMS</option>
                    <option value="1">DOCX</option>
                    <option value="2"> EMAIL </option>
                  </select>
                  </div>
                </div>
                </div>

                <div className="page-grid-2">
                  <div className="">
                    <div>
                      {showfile && (
                        <div>
                          <label>
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
            <button className="next-pre-btn  mrg-r-3" type="button">
              Save
            </button>
            <button type="button" className="next-pre-btn-secondary mrg-r-3">
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
