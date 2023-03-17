export default function edit_user_validation(values) {
    // var nameregex = /^[A-Za-z0-9 ]+$/
    var numregex = /^(?=.*[0-9]).{10}$/;
  
    const pwregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;
  
    let errors = {};
  
    if (!values.userName.trim()) {
      errors.userName = " User name  required";
    }
  
    if (!values.userFullName.trim()) {
      errors.userFullName = "Full  name required";
    }
  
    if (!values.userEmail.trim()) {
      errors.userEmail = "User email required";
    }
  
   
  
    if (!values.userPhone.trim()) {
      errors.userPhone = "User phone number required";
    }
    else if (!numregex.test(values.userPhone))
    { errors.userPhone = "Invalid Phone Number"; }
  
    return errors;
  }
  