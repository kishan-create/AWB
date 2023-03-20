import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import {useNavigate} from 'react-router-dom';
const AgentFunctions = (Agent_validation, seen, adressData, listadd) => {
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
  const [returnValue, SetReturnValue] = useState({
    producerId: "",
  });

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
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(Agent_validation(values));
    setIsSubmitting(true);
  };

  const onSubmitform = (e) => {
    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/producer", values)
      .then((response) => {
        if (response.status === 208) {
          setErrors({ ...errors, producerEmail: "Email Address already exist" });
  
        }
        else if (response.status === 200) {
          SetReturnValue({
            producerId: response.data.producerId,
          });

          submitAddress(response.data.producerId);
        }
      });
  };
  
  const submitAddress = (producerID) => {
    listadd.map((listaddress, key) => {
      listaddress.producerId = producerID;
    });

    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/produceraddr", listadd)
      .then((response) => {
        if (response.status === 200) {
          submitFiles(producerID);
        }
      });
  };

  const submitFiles = (producerID) => {
    let formData = new FormData();

    seen.map((file) => {
      formData.append("documents", file);
    });
    formData.append("docOrginTypeId", producerID);
    formData.append("docOrginType", "AGENT");
    formData.append("docCategoryId", 7);
    formData.append("docSubCategoryId", 9);

    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/document", formData)
      .then((responseuser) => {
       
        if (responseuser.status === 200) {
          swal({
            title: "",
            text: "Agent Added successfully",
            icon: "success",
            button: "OK",
          }).then(() => {
            // Redirect to another page using history.push
            navigate("/listagent", { replace: true });
          });;;
        }
      }
      )


  };

  return { handleChange, values, handleSubmit, errors, adressData };
};
export default AgentFunctions;
