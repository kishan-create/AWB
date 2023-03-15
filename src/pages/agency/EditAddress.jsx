import React,{ useState } from 'react'
import { Link } from "react-router-dom";

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditAgentfunctions from '../../pages/agency/Functions/Editagentfunctions'
import EditAddressFunctions from './EditAddressFunctions'
import MultipleAddressValidation from '../validations/Edit_Address_validation'

import { useParams } from 'react-router-dom';

export default function EditAddress() {
  const params=useParams();

  const {
    handleChange,values,handleEdit,updateAddress, errors
    
  } = EditAddressFunctions(params.id,MultipleAddressValidation);

const id =params.id;

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


  
  return (
    <div className="app-wrapper mt-4">
   <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div className="app-card alert alert-dismissible shadow-sm mb-4" role="alert">
              <div className="inner">
                <div className="app-card-body p-2 p-lg-4">


                </div>
                <form onSubmit={updateAddress} noValidate>
                <div className="app-card-body p-2 p-lg-4">
                  <div className="row gx-2 gy-2">
                   
                    <div className="col-12 mb-3">

                      <h5>Edit Address</h5>
                    </div>
                  </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                  <label htmlFor="Submission" className="form-label">
                    AddressType <span className="red">*</span>
                  </label>
                  
                  <select
                  defaultValue={values.addrType}
                  
                    class="form-control"
                    name="addrType"
                    onChange={handleChange} 
                    value={values.addrType}
                  >
                    <option value="Select Country">Select</option>
                    <option value="1">Work Address</option>
                    <option value="2">Billing Address</option>
                    <option value="3">Permenant Address</option>
                    <option value="4">Shipping Address</option>


                  </select>
                  
                  </div>

            
                
                </div>

                <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Address Line 1 <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="addrLine1" onChange={handleChange}  value={values.addrLine1}  className="form-control" placeholder="Enter Producer Email" aria-label="Enter Full Name" aria-describedby="basic-addon1" />
                      </div>
                      {errors.addrLine1 && (
                    <p className="message">{errors.addrLine1}</p>
                  )}
                    </div>
                  </div>
  
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Address Line 2<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="addrLine2"  onChange={handleChange} value={values.addrLine2} className="form-control" placeholder="Enter producer phone" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                  <label htmlFor="Submission" className="form-label">
                    Country <span className="red">*</span>
                  </label>
                  
                  <select
                  defaultValue={values.countryId}

                    class="form-control"
                    name="countryId"
                    onChange={handleChange} 
                    value={values.countryId}
                  >
                    <option value="Select Country">Select</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                  </select>
                  
                  </div>
                
                </div>

                <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                  <label htmlFor="Submission" className="form-label">
                    State <span className="red">*</span>
                  </label>
                  
                  <select 
                  defaultValue={values.stateId}

                    class="form-control"
                    name="stateId"
                    onChange={handleChange} 
                    value={values.stateId}
                  >
                    <option value="Select State">Select</option>
                    <option value="1">Kerala</option>
                    <option value="2">TamilNadu</option>
                  </select>
                  
                  </div>
                
                </div>

                <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                  <label htmlFor="Submission" className="form-label">
                    County <span className="red">*</span>
                  </label>
                  
                  <select 
                  defaultValue={values.countyId}

                    class="form-control"
                    name="countyId"
                    onChange={handleChange} 
                    value={values.countyId}
                  >
                    <option value="Select Country">Select</option>
                    <option value="1">Ernamkulam</option>
                    <option value="2">Trissur</option>
                  </select>
                  
                  </div>
                
                </div>

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">Zipcode<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="zip"  onChange={handleChange} value={values.zip} className="form-control" placeholder="Enter agencyId" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                  {errors.zip && <p className="message">{errors.zip}</p>}

                    </div>
                  </div>

                             
                  
                  
                  <div className="col-12 mt-4">
                  <input type="submit"  className="next-pre-btn mrg-r-3"   value="Update" />
                   
                    <Link to="/listagency"> <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link>

                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
