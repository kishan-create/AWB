import React from 'react'
import { useRef, useState, useEffect } from 'react';
import './registration.scss'
import axios from "axios";
import swal from "sweetalert2"
import logo from '../../images/awb_logo.svg'

const Registration = (registeration_validation) => {
   const [values, SetValues] = useState({ 
    userName: "", 
    userEmail: "",
    userPhone: "",  
    password: "", 
  userFullName: "", });

const [errors, setErrors] = useState({});

const [submitted, setSubmitted] = useState(false);

 useEffect(() => {  
  if (Object.keys(errors).length === 0 && submitted) 
  {  onSubmitform(); } }, [errors]);

 const handleChange = (e) => { 
  

   const { name, value } = e.target;
     SetValues({ 
      ...values,
      [name]: value, 
    });
 };

const handleSubmit = (e) =>
 { 

   e.preventDefault();
    const test = setErrors(registeration_validation(values)); 
    setSubmitted(true); 
      
     };

     const onSubmitform = (e) => 
     {  
       const response = axios.post(  "http://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/user",  values ); 
       if (response.status == 200) {
        swal({
          title: "Good job!",
          text: "User Added successfully",
          icon: "success",
          button: "ok",
        });
      }
     }

return{handleChange,values,handleSubmit,errors};

};

export default Registration;
