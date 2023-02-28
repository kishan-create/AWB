import React, { useState, useEffect } from "react";

const GroupUserFunction = (id) => {
  const [rows, setUserrows] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("shany");
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_ADMIN_URL +
        `/usergroup/groupmembers?groupid=${id}`
    );
    const data = await response.json();
    setUserrows(data);
  };

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return {
    rows,
    handlePasswordChange,
    passwordType,
    passwordInput,
    togglePassword,
    getUsers,
  };
};
export default GroupUserFunction;
