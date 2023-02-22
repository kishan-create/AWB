import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Edituserfunctions = () => {
  const params = useParams();

  const [rows, setUserrows] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [values, SetValues] = useState({
    userId: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    password: "",
  });
  useEffect(() => {
    getUsersbyID(params.id);
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
  //Get user by ID
  const getUsersbyID = async (id) => {
   

    const response = await axios.get(
      process.env.REACT_APP_API_ADMIN_URL + `/user/${id}`
    );
    

    if (response.status == 200) {
      SetValues({
        userId:response.data.userId,
        userName: response.data.userName,
        userEmail: response.data.userEmail,
        userFullName: response.data.userFullName,
        password: response.data.password,
        userPhone:response.data.userPhone
      });
    }
  };
  // console.log(values);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const updateUsers = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      process.env.REACT_APP_API_ADMIN_URL + `/user/${values.userId}`,
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
    updateUsers,
  };
};
export default Edituserfunctions;
