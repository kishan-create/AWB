import React, { useEffect } from "react";

export default function MultipleAddressValidation(values,contry,state) {
  
var zipregex = /^[0-9.-]*$/;

  let errors = {};

  if (!values.addrType.trim()) {
    errors.addrType = "Address Type Required";
  }
  if (!values.addrLine1.trim()) {
    errors.addrLine1 = "Address  Required";
  }
  if (!contry.trim()) {
    errors.countryId = "Country  Required";
  }
  if (!state.trim()) {
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

  //   errors.zip = "Address  Required";
  // }

  
  return errors;
}
