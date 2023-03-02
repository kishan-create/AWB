import React from "react";

export default function MultipleAddressValidation(values) {
    let errors = {};
  if (!values.agent_Type.trim()) {
    errors.agent_Type = "Address Type Required";
  }
  if (!values.agent_Address.trim()) {
    errors.agent_Address = "Address Required";
  }
  if (!values.countryId.trim()) {
    errors.countryId = "Country Required";
  }
  if (!values.stateId.trim()) {
    errors.stateId = "State Required";
  }
  if (!values.zip.trim()) {
    errors.zip = "State Required";
  }
  return errors;
}
