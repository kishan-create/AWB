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
    console.log(id);

    const response = await axios.get(
      `http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agency/${id}`
    );
    console.log(response)

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
      "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agency/53",
      
      values
    );
    console.log(res.data);
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
