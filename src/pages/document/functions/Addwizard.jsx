import { useState } from "react";
import { useRef, useEffect } from "react";

import axios from "axios";
import swal from "sweetalert";

import FileFormValidation from "../../validations/File_upload_validation";
function Addwizard(selectedOption, previousID, content, selectedFile) {
  const [submitted, setSubmitted] = useState(false);

  const [showfile, setShowFile] = useState(false);
  const [showtext, setShowText] = useState(true);

  const [error, setError] = useState("");
  const [values, SetValues] = useState({
    fileselected: selectedFile,
    content:content ,
 
  });

  useEffect(() => {
    if (Object.keys(error).length === 0 && submitted) {
     onSubmitfileform();
    }
  }, [error]);

  const handleSubmitFile = (e) => {
    e.preventDefault();
    
 

    setSubmitted(true);

    const test = setError(FileFormValidation(selectedFile,content));

  };

  const onSubmitfileform = (e) => {
    
 
    let formData = new FormData();
    let contentfile = selectedOption + "." + selectedOption;

    if (content != "") {
      formData.append(
        "documents",
        new Blob([content], { type: "text/plain" }),
        contentfile
      );
    } else {
      formData.append("documents", selectedFile);
    }
    formData.append("docOrginTypeId", previousID);
    formData.append("docOrginType", "DOCTEMPLATE");
    formData.append("docCategoryId", 7);
    formData.append("docSubCategoryId", 9);

    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/document", formData)
      .then((response) => {
        if (response.status === 200) {
          swal({
            title: "",
            text: "Document Uploaded successfully",
            icon: "success",
            button: "ok",
          });
        }
      });
  };

  const HideShowDivs = async (seloptions) => {
    if (seloptions == "0" || seloptions == "2") {
      setShowText(true);
      setShowFile(false);
    } else {
      setShowText(false);
      setShowFile(true);
    }
  };

  return { handleSubmitFile, HideShowDivs,error };
}

export default Addwizard;
