
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";

function Addwizard(next) {

    const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showfile, setShowFile] = useState(false);
  const [showtext, setShowText] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  

  const [tempid, SetTempID] = useState(1);



     useEffect(() => {
    
        HideShowDivs(selectedOption);
       
      }, [selectedOption,tempid]);
  
     const handleChange = (e) => {
      const { name, value } = e.target;
      SetValues({
        ...values,
        [name]: value,
      });
    };
  
    const [values, SetValues] = useState({
        templateName:"", 
      templateDec: "",
      templateCode: "",
      filter1: "",
      filter2: "",
    //   templateId:"",
     
    });
  
    const handleSelect = (e) => {
   
        setSelectedOption(e.target.value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
  
      // const test = setErrors(registeration_validation(values));
      setSubmitted(true);
      onSubmitform();
    };
   
  
    const onSubmitform = (e) => {
      
      const response = axios.post(
        "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/docgeneration",
        values
      ).then((response) => {
        if (response.status === 200) {
                   let templateID= response.data.templateId;
                   SetTempID(templateID);
             
    console.log(tempid);
        
    next();
  
        }
      });;


  
      
    };


    // console.log(returnValue.templateId);
///////////////

const handleSubmitFile = (e) => {
    e.preventDefault();

    // console.log(response.data.templateId);

    // const test = setErrors(registeration_validation(values));
    setSubmitted(true);
    onSubmitfileform();
  };
 const onSubmitfileform = (e) => {
    let formData = new FormData();

    selectedFile.map((file) => {
      formData.append("documents", file);
    });
    formData.append("docOrginTypeId",tempid);
    formData.append("docOrginType", "DOCTEMPLATE");
    formData.append("docCategoryId", 7);
    formData.append("docSubCategoryId", 9);
    

    const response = axios.post(process.env.REACT_APP_API_SERVICE_URL + "/document", formData);
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


  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    { handleSubmit,handleChange,values,handleSubmitFile,HideShowDivs,handleFileInputChange,handleSelect} 
  )
}

export default Addwizard