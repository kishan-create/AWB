import React, { useEffect } from "react";

export default function Document_Validation(values) {
  let errors = {};

  if (!values.templateName.trim()) {
    errors.templateName = "Template Name Required";
  }
  if (!values.templateDec.trim()) {
    errors.templateDec = "Template Description  Required";
  }
  if (!values.templateCode.trim()) {
    errors.templateCode = "Template Code  Required";
  }
  
  if (!values.filter1.trim()) {
    errors.filter1 = "Tag 1  Required";
  }
  if (!values.filter2.trim()) {
    errors.filter2 = "Tag 2  Required";
  }

 
   

  return errors;
}
