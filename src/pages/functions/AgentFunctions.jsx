import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import swal from "sweetalert"

const AgentFunctions = (Agent_validation,seen,adressData) => {
    const [values, SetValues] = useState({
      producerName: "",
      producerEmail: "",
      producerPhone: "",
      // billingAddressId: "",
      // permanentAddressId: "",
      // shippingAddressId: "",
      // workAddressId: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const[isSubmittingFile, setIsSubmittingFile] = useState(false);
  
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
      const test2 = setErrors(Agent_validation(adressData));
        setIsSubmitting(true);
    };



    // const handleSubmitFile = (e) =>{
    //   e.preventDefault();
    //   setIsSubmittingFile(true);
    // }

    // const requests = [
    //   { url: "http://localhost:3000/api/add_agent", body: { some: "body" } },
    //   { url: "http://localhost:3000/api/add_address", body: { some: "other body" } },
    //   { url: "http://localhost:3000/api/add_file", body: { some: "other body" } },

    //   // As many as you like
    // ];
    // const promises = requests.map(request => axios.post(request.url, request.body));
    // const result = Promise.all(promises).catch(error => console.log(`Someting went wrong: ${error}`);
  
    const onSubmitform = (e) => { 
      const response = axios.post(
        "http://localhost:3000/api/add_agent",
        values
      );

      response.then(function(res) {
        if (res.data.status === 200) {
          swal({
            title: "Good job!",
            text: "Agent Details added successfully",
            icon: "success",
            button: "ok",
          });
          SetValues({
            producerName: "",
            producerEmail: "",
            producerPhone: "",
            // billingAddressId: "",
            // permanentAddressId: "",
            // shippingAddressId: "",
            // workAddressId: "",
          });
        }
      });
    };
  
    return { handleChange, values, handleSubmit, errors,adressData };
  };
  export default AgentFunctions;
  