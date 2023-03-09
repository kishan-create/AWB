import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import {useNavigate} from 'react-router-dom';


const Usergroupform = (usergroup_validation) => {
  const [values, SetValues] = useState({
    userGroupName: "",
    userGroupDesc: "",
    userGroupCode: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const test = setErrors(usergroup_validation(values));
    setIsSubmitting(true);
  };

  const onSubmitform = (e) => {

    const response = axios.post(
      process.env.REACT_APP_API_ADMIN_URL+"/usergroup",
      values

    );
    response.then(function (res) {
      if (res.status === 200) {
        swal({
          title: "",
          text: "Usergroup Details added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
          userGroupName: "",
          userGroupDesc: "",
          userGroupCode: "",
        });
      }
      navigate('/grouplist', {replace: true});

    });
  };

  return { handleChange, values, handleSubmit, errors };
};
export default Usergroupform;
