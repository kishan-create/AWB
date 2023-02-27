import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert"

const AgentFunctions = (Agent_validation, seen, adressData,listadd) => {
  const [values, SetValues] = useState({
    producerName: "",
    producerEmail: "",
    producerPhone: "",
    billingAddressId: "",
    permanentAddressId: "",
    shippingAddressId: "",
    workAddressId: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const[returnValue,SetReturnValue]=useState({
    producerId:"",
   })


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,

    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitform();

    // const test = setErrors(Agent_validation(values));
    // // const test2 = setErrors(Agent_validation(adressData));
    // setIsSubmitting(true);
  };


  // const onSubmitAddress = (e) =>{
  
  //   // const response = axios.post(
  //   //   // "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/addresses",
  //   //   "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/addresses",
  //   //   adressData

  //   // );
  // }


  const onSubmitform = (e) => {
    //console.log(values);
   const response = axios.post(
    "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/producer",
      values
    ).then((response) => {
      if (response.status === 200) {
     
       SetReturnValue({
        producerId: response.data.producerId,
      })

      submitAddress(response.data.producerId);
      }
    });;

    console.log(returnValue);
   
  
  };


  const submitAddress =(producerID)=>
  {
    listadd.map((listaddress,key) => {
      listaddress.producerId=producerID
    });
   // console.log(listadd);
    /*const response = axios.post(
      process.env.REACT_APP_API_URL + "/addresses",
      adressData
    );*/
    const response = axios.post(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/produceraddr",
      listadd
       ).then((response) => {
        if (response.status === 200) {
       
          submitFiles(producerID)
        }
      });
    
   // submitFiles(agencyID);
  } 

  const submitFiles =(producerID) =>
  {
    
    let formData = new FormData();
   
    seen.map((file) => {
    formData.append('documents', file);
  });
    formData.append("docOrginTypeId",producerID);
    formData.append("docOrginType","AGENT");
    formData.append("docCategoryId",7);
    formData.append("docSubCategoryId", 9);
 

    const response = axios.post(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/document",
      formData
       ).then((response) => {
        if (response.status === 200) {
       
         
        }
      });;
  }


  return { handleChange, values, handleSubmit, errors, adressData, };
};
export default AgentFunctions;
