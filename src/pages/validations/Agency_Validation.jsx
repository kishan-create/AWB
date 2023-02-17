import React from "react";

export default function Agency_Validation(values) {
  let errors = {};
  if (!values.agencyName.trim()) {
    errors.agencyName = "Agency Name Required";
  }
  if (!values.agencyNpn.trim()) {
    errors.agencyNpn = "Agency Npn Required";
  }
  if (!values.agencyFbin.trim()) {
    errors.agencyFbin = "Agency agencyFbin Required";
  }

  return errors;
}
