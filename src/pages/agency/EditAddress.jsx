import React,{ useState } from 'react'
import { Link } from "react-router-dom";

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditAgentfunctions from '../../pages/agency/Functions/Editagentfunctions'
import EditAddressFunctions from './EditAddressFunctions'
import CountryStateCountyDropdown from '../common/CountryStateCountyDropdown';
import { useParams } from 'react-router-dom';
import MultipleAddressValidation from '../validations/Edit_Address_validation';
export default function EditAddress() {
  const params=useParams();

  const {
    handleChange,values,handleEdit,updateAddress, countries,
    states,
    counties,
    handleCountryChange,
    handleStateChange,
    selectedCountry,
    handleCountryEditChange,
    selectedState,
    handlestateEditChange,
    errors

    
  } = EditAddressFunctions(params.id, MultipleAddressValidation);

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
                  {errors.addrType && (
                    <p className="message">{errors.addrType}</p>
                  )}
                  
                  </div>

            
                
                </div>

                <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" className="form-label">Address Line 1 <span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="addrLine1" onChange={handleChange}  value={values.addrLine1}  className="form-control" placeholder="Enter Address" aria-label="Enter Full Name" aria-describedby="basic-addon1" />
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
                        <input type="text" name="addrLine2"  onChange={handleChange} value={values.addrLine2} className="form-control" placeholder="Enter Address" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                  <label htmlFor="Submission" className="form-label">
                    Country <span className="red">*</span>
                  </label>
                  
                 
                  <select
                    class="form-control"
                    name="countryId"
                    onChange={handleCountryEditChange}
                    value={values.countryId}
                   
                   
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country.dataId} value={country.dataId}>
                        {country.dataName}
                      </option>
                    ))}
                  </select>
                  {errors.countryId && (
                    <p className="message">{errors.countryId}</p>
                  )}
                  
                  </div>
                
                </div>

                <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                  <label htmlFor="Submission" className="form-label">
                    State <span className="red">*</span>
                  </label>
                  
                  <select
                    class="form-control"
                    name="stateId"
                   
                    onChange={handlestateEditChange}
                  
                    value={values.stateId}
                 
                  >
                    <option value="">Select a state</option>
                    {states.map((state) => (
                      <option key={state.dataCode} value={state.dataId}>
                        {state.dataName}
                      </option>
                    ))}
                  </select>
                  {errors.stateId && (
                    <p className="message">{errors.stateId}</p>
                  )}
                  
                  </div>
                
                </div>
                <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                  <label htmlFor="Submission" className="form-label">
                    County <span className="red">*</span>
                  </label>
                  
                  <select
                    class="form-control"
                    name="countyId"
                  
                    value={values.countyId}
                    onChange={handleChange}
                  >
                    <option value="">Select a County</option>
                    {counties.map((county) => (
                      <option key={county.dataCode} value={county.dataId}>
                        {county.dataName}
                      </option>
                    ))}
                  </select>
                  {errors.countyId && (
                    <p className="message">{errors.countyId}</p>
                  )}
                  
                  </div>
                
                </div>

             

                  <div className="row gx-2 gy-2">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <label htmlFor="Submission" n className="form-label">ZIP Code<span className="red">*</span></label>
                      <div className="input-group mb-3">
                        <input type="text" name="zip"  onChange={handleChange} value={values.zip} className="form-control" placeholder="Enter ZIP Code" aria-label="Enter agent Phone" aria-describedby="basic-addon1" />
                      </div>
                  {errors.zip && <p className="message">{errors.zip}</p>}

                    </div>
                  </div>

                             
                  
                  
                  <div className="col-12 mt-4">
                  <input type="submit"  className="next-pre-btn mrg-r-3"   value="Update" />
                  {(() => {
                              if (params.url === "agent") {
                                return (
                                  
                                   <Link to={"/editproducer/" + params.type}> <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link>

                                );
                              }

                              else   {
                                return (
                                  
                                   <Link to={"/editagency/" + params.type}> <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link>

                                );
                              }

                            })()}
                   
                    {/* <Link to="/listagency"> <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link> */}

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
