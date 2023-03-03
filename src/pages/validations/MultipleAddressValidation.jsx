import React, { useEffect } from "react";

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
  if (!values.zip.trim()) {
    errors.zip = "Address  Required";
  }

  
  return errors;
}
