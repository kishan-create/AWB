

import AddmultipleAdress from "../../components/common/AddmultipleAdress";


import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import insurnnew from "../../images/insurancenew.svg";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Addwizard from "./functions/Addwizard";

export default function Wizardstep1({ next, previous }) {
   const { handleSubmit,handleChange,values} =Addwizard(next)


  // const [selectedOption, setSelectedOption] = useState("");



  // // useEffect(() => {
  // //   // if (Object.keys(errors).length === 0 && submitted) {
  // //   // onSubmitform();
  // //   // }
  // // }, []);
  // const handleSelect = (e) => {
   
  //   setSelectedOption(e.target.value);
  // };

  

 

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
                            placeholder="Agency Fbin"
                            name="templateName"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={values.templateName}
                          />
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
              
            >
              Next
            </button>
            <button
              type="button"
              className="next-pre-btn-secondary mrg-r-3"
            >
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
