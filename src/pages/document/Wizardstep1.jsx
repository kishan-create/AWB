import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";



import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import insurnnew from "../../images/insurancenew.svg";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Wizardstep1({next,previous}) {
  
 
  
  const handleChange =()=>
  {
    console.log("handle change");
   
  }
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (

    
    <div>
      
      
      <div>

        <form  noValidate encType="multipart/form-data">
   
              <div className=" ">
                
            
                <div
                  className=" "
                  role="alert"
                >
                  <div class="inner p-15">
                    <div className="wizrd-bar-head m-b-15">
                        <div className="add-headd-wizard add-headd-wizard-active "> Document Form
                        <div class="bottom-arrow"><CheckCircleIcon /></div>
                        </div>
                        <div className="add-headd-wizard"> Upload Document
                        <div class="bottom-arrow-1"><CircleIcon /></div></div>
            
                    </div>
                    <div className="page-grid-2">
                      <div className="">

 <div  className="p-b-15">


 <div className="">
                        <label htmlFor="Submission" className="form-label">
                        Temporary Name<span className="red"> *</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Fbin"
                            name="agencyFbin"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={" Temporary Name"}
                          />
                        </div>
                      </div>

      <label htmlFor="options">Template-Code :<span className="red"> *</span></label>
      <select id="options"   className="form-control" value={selectedOption} onChange={handleSelect}>
        <option value="">-- Please select --</option>
        <option value="Motor Vehicle insurance offer you">Vehicle insurance</option>
        <option value="Land insurance offer you">Property insurance</option>
        <option value="Health insurance oofer you">Health INsurance</option>
      </select>

    </div>

    <div className="p-b-15">
                        <label htmlFor="Submission" className="form-label">
                        Temporary Description <span className="red"> *</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agency Npn"
                            name="agencyNpn"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                            value={"Temporary Description"}
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
                            placeholder="Agency Name"
                            name="agencyName"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                           value={"Tag 1"}
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
                            placeholder="Agency Name"
                            name="agencyName"
                            onChange={handleChange}
                            aria-label="Date of Submission"
                            aria-describedby="basic-addon1"
                           value={"Tag 2"}
                          />
                        </div>
                      </div>


                                        
                      </div>
                       
                      <div>
                      <img className="opc-9" src={insurnnew}/>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            
              <div className='p-l-15'> 
                  <button className='next-pre-btn  mrg-r-3' type="button" onClick={next}>Next</button>
                  <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel </button>
              </div>
        </form>
      </div>
    </div>
  );
}
