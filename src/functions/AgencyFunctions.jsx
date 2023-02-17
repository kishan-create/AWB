import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import http from "../components/common/http-common";

const AgencyFunctions = (Agency_Validation, adressData,fileData) => {
  const [values, SetValues] = useState({
    agencyName: "",
    agencyNpn: "",
    agencyFbin: "",
    // address:"",
  });
 const[returnValue,SetReturnValue]=useState({
  agencyId:"",
 })
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const submitForm = setErrors(Agency_Validation(values));
    onSubmitform();
  };

  const onSubmitform = (e) => {
    //console.log(values);
   const response = axios.post(
   "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agency",
      values
    );
    console.log(response);
   
    if(response.agencyId!=="")
    {
      SetReturnValue({
        agencyId: 1,
      })
      submitAddress();
    }
   
  };
  const submitAddress =()=>
  {
    /*const response = axios.post(
      process.env.REACT_APP_API_URL + "/addresses",
      adressData
    );*/
    submitFiles();
  } 
  const submitFiles =() =>
  {
    
    let formData = new FormData();
   
    fileData.map((file) => {
    formData.append('documents', file);
  });
    formData.append("docOrginTypeId",1);
    formData.append("docOrginType","Agency");
    formData.append("documentStorage","local");
    
    //console.log(formData);
  /*  const response= http.post("/documents", formData, {
      
     
    });*/

const response = axios.post(
      process.env.REACT_APP_API_URL + "/documents",
      formData
    );

  }

  return { handleChange, handleSubmit, values };
};
export default AgencyFunctions;
