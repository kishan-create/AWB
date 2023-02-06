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
    console.log(id);

    const response = await axios.get(
      `https://4c05edda-18b5-41d1-8254-54799a0d6052.mock.pstmn.io/EditUser/${id}`
    );
    console.log(response)

    if (response.status == 200) {
      SetValues({
        userId: 1,
        userName: response.data.userName,
        userEmail: response.data.userEmail,
        userFullName: response.data.userFullName,
        password: response.data.password,
      });
    }
  };
  // console.log(values);
 
console.log(values);
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
      "https://4c05edda-18b5-41d1-8254-54799a0d6052.mock.pstmn.io",
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
