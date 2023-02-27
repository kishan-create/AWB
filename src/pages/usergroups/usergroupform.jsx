import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

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


  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(usergroup_validation(values));
      setIsSubmitting(true);
  };

  const onSubmitform = (e) => { 
    console.log(values)

    const response = axios.post(
      "http://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/usergroup",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        swal({
          title: "Good job!",
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
    });
  };

  return { handleChange, values, handleSubmit, errors, };
};
export default Usergroupform;
