import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Editagentfunctions = () => {
  const params = useParams();

  const [rows, setUserrows] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [values, SetValues] = useState({
    agencyId: "",
    agencyName: "",
    agencyNpn: "",
    agencyFbin: "",
    agencyType: "",
  });
  useEffect(() => {
    getagentsbyID(params.id);
  }, []);
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const getagentsbyID = async (id) => {
    const response = await axios.get(
      process.env.REACT_APP_API_SERVICE_URL + `/agency/${id}`
    );

    if (response.status == 200) {
      SetValues({
        agencyId: 1,
        agencyName: response.data.agencyName,
        agencyNpn: response.data.agencyNpn,
        agencyFbin: response.data.agencyFbin,
        agencyType: response.data.agencyType,
      });
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const updateagents = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      process.env.REACT_APP_API_SERVICE_URL + `/agency/4`,

      values
    );

    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Job Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  };
  return {
    handlePasswordChange,
    passwordType,
    passwordInput,
    togglePassword,
    values,
    handleChange,
    updateagents,
  };
};
export default Editagentfunctions;
