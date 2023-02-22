import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import http from "../components/common/http-common";

const AgencyFunctions = (Agency_Validation, adressData,fileData,listadd) => {
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
    ).then((response) => {
      if (response.status === 200) {
     
       SetReturnValue({
        agencyId: response.data.agencyId,
      })

      submitAddress(response.data.agencyId);
      }
    });;

    console.log(returnValue);
   
  
  };
  const submitAddress =(agencyID)=>
  {
    listadd.map((listaddress,key) => {
      listaddress.agencyId=agencyID
    });
   // console.log(listadd);
    /*const response = axios.post(
      process.env.REACT_APP_API_URL + "/addresses",
      adressData
    );*/
    const response = axios.post(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agencyaddr",
      listadd
       ).then((response) => {
        if (response.status === 200) {
       
          submitFiles(agencyID)
        }
      });
    
   // submitFiles(agencyID);
  } 
  const submitFiles =(agencyID) =>
  {
    
    let formData = new FormData();
   
    fileData.map((file) => {
    formData.append('documents', file);
  });
    formData.append("docOrginTypeId",agencyID);
    formData.append("docOrginType","AGENCY");
    formData.append("docCategoryId",7);
    formData.append("docSubCategoryId", 9);
   // formData.append("documentStorage","local");
    
    //console.log(formData);
  /*  const response= http.post("/documents", formData, {
      const response = axios.post(
      process.env.REACT_APP_API_URL + "/documents",
      formData
    );

     
    });*/

    const response = axios.post(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/document",
      formData
       ).then((response) => {
        if (response.status === 200) {
       
         
        }
      });;
  }

  return { handleChange, handleSubmit, values };
};
export default AgencyFunctions;
