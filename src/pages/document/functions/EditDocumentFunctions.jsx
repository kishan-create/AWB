import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const EditDocumentfunctions = (Document_Validation) => {
  const params = useParams();

  const [rows, setUserrows] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [values, SetValues] = useState({
    templateId: "",
    templateName: "",
    templateDec: "",
    templateCode: "",
    filter1: "",
    filter2: "",


  });
  
const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
useEffect(() => {


if (Object.keys(errors).length === 0 && submitted) {
  onSubmitform();
}

}, [errors]);


  useEffect(() => {
    getDocumentbyID(params.id);
    updateagents(params.id);
    
  }, []);
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };
const id=params.id

  const getDocumentbyID = async () => {
   
    const response = await axios.get(
      `http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/docgeneration/${id}`
    );
 

    if (response.status == 200) {
      SetValues({
        // templateId: id,
        templateName: response.data.templateName,
        templateDec: response.data.templateDec,
        templateCode: response.data.templateCode,
        filter1: response.data.filter1,
        filter2: response.data.filter2,

   
      });
    }
  };
 
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };


  const updateagents = async (e) => {
    e.preventDefault();
    const test = setErrors(Document_Validation(values));
    setSubmitted(true);
  
  };
  const onSubmitform = async (e) => {
    
   
    const res = await axios.put(
      `http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/docgeneration/${id}`,
      
      values
    );
    
    if (res.data.status == 200) {
      swal({
        title: "",
        text: "Document Updated successfully",
        icon: "success",
        button: "OK",
      });
    }
  };
  return {    
    handlePasswordChange,
    passwordType,
    passwordInput,
    togglePassword,
    values,
    handleChange,
    updateagents,
    errors,
  };
};
export default EditDocumentfunctions;
