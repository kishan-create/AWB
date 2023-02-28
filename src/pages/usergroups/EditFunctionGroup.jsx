import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";

const Editgroupfunction = () => {
  const [values, SetValues] = useState({
    userGroupName: "",
    userGroupDesc: "",
    userGroupCode: "",
  });
  const params = useParams();

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [rows, setUserrows] = useState([]);

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
    getGroupsbyID(params.id);
  }, []);

  const getGroupsbyID = async (id) => {
    const response = await fetch(
      process.env.REACT_APP_API_ADMIN_URL + `/usergroup/${id}`
    );

    const data = await response.json();

    if (response.status == 200) {
      SetValues({
        userGroupName: response.data.userGroupName,
        userGroupDesc: response.data.userGroupDesc,
        userGroupCode: response.data.userGroupCode,
      });
    }
  };
  return { handleChange, values, handleEdit, rows };
};

export default Editgroupfunction;
