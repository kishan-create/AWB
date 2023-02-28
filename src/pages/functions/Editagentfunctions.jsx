import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";

const Editagentfunctions = () => {
  // const params = useParams();

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [rows, setUserrows] = useState([]);

  const [values, SetValues] = useState({
    producerName: "",
    producerEmail: "",
    producerPhone: "",
    // billingAddressId: "",
    // permanentAddressId: "",
    // shippingAddressId: "",
    // workAddressId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    getAgentsbyID();
  }, []);

  const getAgentsbyID = async (id) => {
    const producerId = id;
    const reponse = await axios.get(
      process.env.REACT_APP_API_SERVICE_URL + `/producer/${producerId}`
    );

    if (reponse.status == 200) {
      SetValues({
        producerId: reponse.data.producerId,
        producerName: reponse.data.producerName,
        producerEmail: reponse.data.producerEmail,
        producerPhone: reponse.data.producerPhone,
      });
    }
  };

  const updateAgent = async (e) => {
    e.preventDefault();
    const res = axios.put(
      process.env.REACT_APP_API_SERVICE_URL + `/producer/4`,
      values
    );

    if (res.status == 200) {
      swal({
        title: "Good job!",
        text: "Job Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  };

  return { handleChange, values, handleEdit, rows, updateAgent };
};

export default Editagentfunctions;
