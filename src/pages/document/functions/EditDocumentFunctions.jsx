import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const EditDocumentfunctions = () => {
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
  useEffect(() => {
    getDocumentbyID(params.id);
    
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


  const getDocumentbyID = async (id) => {
   
    const response = await axios.get(
      `http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/docgeneration/${id}`
    );
 

    if (response.status == 200) {
      SetValues({
        templateId: 1,
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
    const res = await axios.put(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/docgeneration/1",
      
      values
    );
    
    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Job Updated successfully",
        icon: "success",
        button: "ok",
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
  };
};
export default EditDocumentfunctions;
