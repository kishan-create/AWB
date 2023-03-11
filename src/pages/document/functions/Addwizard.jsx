import  { useState } from "react";

import axios from "axios";
import swal from "sweetalert2";

function Addwizard(selectedOption, previousID, content, selectedFile) {

  const [submitted, setSubmitted] = useState(false);

  const [showfile, setShowFile] = useState(false);
  const [showtext, setShowText] = useState(true);

  const handleSubmitFile = (e) => {
    e.preventDefault();

    console.log("content", content);

    setSubmitted(true);
    onSubmitfileform();
  };
  const onSubmitfileform = (e,previousID) => {
console.log(previousID);
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
    );
    response.then(function (res) {
      if (res.data.status === 200) {
        swal({
          title: "Good job!",
          text: "Usergroup Details added successfully",
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
