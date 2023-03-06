import React, { useState } from "react";
import AddmultipleAdress from "../../components/common/AddmultipleAdress";



import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import insurnnew from "../../images/insurancenew.svg"
export default function Wizardstep1() {
  
  // const [adressData, setAddressData] = useState([]);
  // const [fileData, setFileData] = useState([]);
  // const { handleChange, handleSubmit, values } = AgencyFunctions(
  //   Agency_Validation,
  //   adressData,
  //   fileData
  // );
  // const getData = (data) => {

  //   setAddressData(data);
  // };
  // const RemoveAddress = (index) => {
  //   const rows = [...adressData];
  //   rows.splice(index, 1);
  //   setAddressData(rows);
  // };
  
  const handleChange =()=>
  {
    console.log("handle change");
    // setFileData(data);
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
                        {/* <div className="add-headd-wizard"> Upload Files 
                        <div class="bottom-arrow-1"><CircleIcon /></div></div> */}
                    </div>
                    <div className="page-grid-2">
                      <div className="">
 <div>
      <label htmlFor="options">Select Type of  Document :</label>
      <select id="options" value={selectedOption} onChange={handleSelect}>
        <option value="">-- Please select --</option>
        <option value="Motor Vehicle insurance offer you">Email</option>
        <option value="Land insurance offer you">Property insurance</option>
        <option value="Health insurance oofer you">Health INsurance</option>
      </select>
      <p>You selected type: {selectedOption}</p>
    </div>

                        
                      


                     


                      <div className="p-b-15">
                        <label htmlFor="Submission" className="form-label">
                        TEMP DESC <span className="red">*</span>
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
                            value={"TEM DESC"}
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="Submission" className="form-label">
                        TEMP-NAME<span className="red">*</span>
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
                            value={" TEMP-NAME"}
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
            
          
        </form>
      </div>
    </div>
  );
}
