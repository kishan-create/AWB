import React from "react";
import { useRef, useState, useEffect } from "react";
import "./registration.scss";
import axios from "axios";
import swal from "sweetalert";
import logo from "../../images/awb_logo.svg";
import { useNavigate } from "react-router-dom";

const Registration = (registeration_validation) => {
  const [values, SetValues] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    password: "",
    userFullName: "",
    
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      onSubmitform();
    }
  }, [errors]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(registeration_validation(values));
    setSubmitted(true);
  };

  const onSubmitform = (e) => {
    const response = axios
      .post(process.env.REACT_APP_API_ADMIN_URL + "/user", values)
      .then((responseuser) => {
 
        if (responseuser.status === 200) {
          SetValues({
            userName: "",
            userEmail: "",
            userPhone: "",
            password: "",
            userFullName: "",
          });
          swal({
            title: "",
            text: "User Added successfully",
            icon: "success",
            button: "ok",

          }).then(() => {
            // Redirect to another page using history.push
            navigate("/userlist", { replace: true });
          });;;
         
        }
      })
      .catch(function (error) {
        let dupmsg = error.response.data.apierror.message;

        if (
          error.response.data.apierror.message ===
          "Duplicate entry found with same user email id."
        ) {
          setErrors({ ...errors, userEmail: "Email already exist" });
        
        }
      });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default Registration;
