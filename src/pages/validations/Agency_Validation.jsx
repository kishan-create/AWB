import React from "react";
var fbinregex = /^[0-9.-]*$/;


export default function Agency_Validation(values) {
  let errors = {};
  if (!values.agencyName.trim()) {
    errors.agencyName = "Agency Name Required";
  }
  if (!values.agencyNpn.trim()) {
    errors.agencyNpn = "Agency Npn Required";
  }
  if (!values.agencyFbin) {
    errors.agencyFbin = "Agency Fbin   Required";
  }
  else if (!fbinregex.test(values.agencyFbin)) { 
    errors.agencyFbin = "Invalid Agency Fbin ";
   }

  return errors;
}
