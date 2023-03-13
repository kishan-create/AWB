import  { useState } from "react";

import axios from "axios";
import swal from "sweetalert2";
import Document_Validation from "../../validations/Document_Validation";

function Addwizard(selectedOption, previousID, content, selectedFile) {

  const [submitted, setSubmitted] = useState(false);

  const [showfile, setShowFile] = useState(false);
  const [showtext, setShowText] = useState(true);
  // const [errors, setErrors] = useState({});


  const handleSubmitFile = (e) => {
    e.preventDefault();
    // const test = setErrors(Document_Validation(values));


    setSubmitted(true);
    
    onSubmitfileform();



  };


  
  const onSubmitfileform = (e) => {

   let formData = new FormData();
   let contentfile=selectedOption+"."+selectedOption
   

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

    const response = axios.post(
      process.env.REACT_APP_API_SERVICE_URL + "/document",
      formData
    )
       .then((response) => {
        if (response.status === 200) {
          swal({
            title: "",
            text: "Document Added successfully",
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

  return { handleSubmitFile, HideShowDivs };
}

export default Addwizard;
