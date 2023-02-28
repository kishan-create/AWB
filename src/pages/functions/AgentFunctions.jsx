import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(Agent_validation(values));
    setIsSubmitting(true);
  };

  const onSubmitform = (e) => {
    //console.log(values);
    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/producer", values)
      .then((response) => {
        if (response.status === 200) {
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
      .then((response) => {
        if (response.status === 200) {
        }
      });
  };

  return { handleChange, values, handleSubmit, errors, adressData };
};
export default AgentFunctions;
