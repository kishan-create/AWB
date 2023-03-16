import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

// const Edituserfunctions = (id, edit_user_validation) => {

const Edituserfunctions = (id,registeration_validation) => {
  

  const [rows, setUserrows] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, SetValues] = useState({
    // userId: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    // password: "",
    userFullName: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      onSubmitform();
    }
  }, [errors]);


  useEffect(() => {
    getUsersbyID(id);

  }, [])

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
  const getUsersbyID = async () => {


    const response = await axios.get(
      process.env.REACT_APP_API_ADMIN_URL + `/user/${id}`
    );


    if (response.status == 200) {
      SetValues({
        // userId:response.data.userId,
        userName: response.data.userName,
        userEmail: response.data.userEmail,
        userFullName: response.data.userFullName,
       // password: response.data.password,
        userPhone:response.data.userPhone
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
  const updateUsers = async (e) => {
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

  return {
    handlePasswordChange,
    passwordType,
    passwordInput,
    togglePassword,
    values,
    handleChange,
    updateUsers,
    errors
  };
};
export default Edituserfunctions;
