import React, { useEffect } from "react";

var zipregex = /^[0-9.-]*$/;

export default function MultipleAddressValidation(values) {
  let errors = {};

  
  if (!values.addrLine1.trim()) {
    errors.addrLine1 = "Address  Required";
  }
  

 
  if (!values.zip.trim()) {
    errors.zip = "ZIP Code Required";
  }
  else if (!zipregex.test(values.zip)) { 
    errors.zip = "Invalid ZIP Code";
   }


  
  return errors;
}
