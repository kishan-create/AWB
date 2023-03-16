import React, { useEffect } from "react";

var zipregex = /^[0-9.-]*$/;

export default function MultipleAddressValidation(values) {
  let errors = {};
  console.log(values);

  
  if (!values.addrLine1.trim()) {
    errors.addrLine1 = "Address  Required";
  }
  

 
  if (!values.zip.trim()) {
    errors.zip = "ZIP Code Required";
  }
  else if (!zipregex.test(values.zip)) { 
    errors.zip = "Invalid ZIP Code";
   }

   if (values.countryId === "") {
    errors.countryId = "Country Required";
  }

   if (values.stateId === "") {
    errors.stateId = "State  Required";
  }
  if (values.countyId ==="") {
    errors.countyId = "County  Required";
  }


  
  return errors;
}
