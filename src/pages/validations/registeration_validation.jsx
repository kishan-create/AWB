export default function registeration_validation(values) {
  // var nameregex = /^[A-Za-z0-9 ]+$/
  var numregex = /^(?=.*[0-9]).{10}$/;

  const pwregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;

  let errors = {};

  if (!values.userName.trim()) {
    errors.userName = " User name already added";
  }

  if (!values.userFullName.trim()) {
    errors.userFullName = "Full  name required";
  }

  if (!values.userEmail.trim()) {
    errors.userEmail = "User email required";
  }

  if (!values.password.trim()) {
    errors.password = "password required";
  }
  {
    errors.password =
      "Use 8 or more characters with a mix of letters, numbers & symbols,Capital Letter";
  }

  if (!values.userPhone.trim()) {
    errors.userPhone = "User phone number required";
  }

  return errors;
}
