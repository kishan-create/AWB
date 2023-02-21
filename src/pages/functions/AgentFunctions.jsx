import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert"

const AgentFunctions = (Agent_validation, seen, adressData) => {
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
    const test = setErrors(Agent_validation(values));
    // const test2 = setErrors(Agent_validation(adressData));
    setIsSubmitting(true);
  };


  const onSubmitAddress = () =>{
    console.log(adressData);
    const response = axios.post(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/addresses",
      adressData

    );
  }



  const onSubmitform = (e) => {
    // console.log(values)
    const response = axios.post(
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/producer",
      values
    );

    response.then(function (res) {
      if (res.status === 200) {
        let producerID = res.data.producerId

        onSubmitAddress(producerID);

        

       
        
      }
    });
  };

  return { handleChange, values, handleSubmit, errors, adressData };
};
export default AgentFunctions;
