import React, { useEffect } from "react";

export default function MultipleAddressValidation(values,contry,state) {
  
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
    errors.zip = "Address  Required";
  }

  
  return errors;
}
