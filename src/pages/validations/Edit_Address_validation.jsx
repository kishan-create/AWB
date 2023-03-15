import React, { useEffect } from "react";

var zipregex = /^[0-9.-]*$/;

export default function MultipleAddressValidation(values) {
  let errors = {};

  
  if (!values.addrLine1.trim()) {
    errors.addrLine1 = "Address  Required";
  }
  

 
  if (!values.zip.trim()) {
    errors.zip = "Zipcode Required";
  }
  else if (!zipregex.test(values.zip)) { 
    errors.zip = "Invalid Zip code";
   }


  
  return errors;
}
