import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const EditDocumentfunctions = (Document_Validation) => {
  const params = useParams();

  const [rows, setUserrows] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [errors, setErrors] = useState({});

  const [values, SetValues] = useState({
    templateId: "",
    templateName: "",
    templateDec: "",
    templateCode: "",
    filter1: "",
    filter2: "",


  });
  
const [submitted, setSubmitted] = useState(false);

useEffect(() => {


if (Object.keys(errors).length === 0 && submitted) {
  onSubmitform();
}

}, [errors]);


  useEffect(() => {
    getDocumentbyID(params.id);
    
  }, []);
  const id =params.id;
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
      process.env.REACT_APP_API_SERVICE_URL +`/docgeneration/${id}`
     
    );
   

    if (response.status == 200) {
      SetValues({
        templateId: id,
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
    
    e.preventDefault();
    const res = await axios.put(
      process.env.REACT_APP_API_SERVICE_URL +`/docgeneration/${id}`,
      values
    )
    .then((response) => {
  
    if (response.status == 200) {
      swal({
        title: "",
        text: "Document Updated successfully",
        icon: "success",
        button: "OK",
      });


    }
  });



  
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
