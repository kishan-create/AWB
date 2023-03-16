import React, { useEffect } from "react";

export default function FileFormValidation(file,content) {
  let errors = {};
let fileval=file?file:content
    

 if (!fileval  ) {
    errors.selectedFile = "Document  File Required";
  }



  return errors;
}
