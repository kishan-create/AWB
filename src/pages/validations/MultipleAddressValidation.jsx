import React, { useEffect } from "react";

var zipregex = /^[0-9.-]*$/;

export default function MultipleAddressValidation(values) {
  let errors = {};

  if (!values.addrType.trim()) {
    errors.addrType = "Address Type Required";
  }
  if (!values.addrLine1.trim()) {
    errors.addrLine1 = "Address  Required";
  }
  if (!values.countryId.trim()) {
    errors.countryId = "Country  Required";
  }
  if (!values.stateId.trim()) {
    errors.stateId = "State  Required";
  }
  if (!values.countyId.trim()) {
    errors.countyId = "County  Required";
  }
  if (!values.zip.trim()) {
    errors.zip = "ZIP Code Required";
  }
  else if (!zipregex.test(values.zip)) { 
    errors.zip = "Invalid ZIP Code";
   }


  
  return errors;
}
