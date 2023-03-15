export default function Agent_validation(values) {



  var numregex = /^(?=.*[0-9]).{10}$/;
  var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  let errors = {};
  if (!values.producerName.trim()) {
    errors.producerName = "Agent name required";
  }



  if (!values.producerPhone.trim()) { errors.producerPhone = "Agent phone number required"; }
  else if (!numregex.test(values.producerPhone)) { errors.producerPhone = "Invalid Phone Number"; }






  if (!values.producerEmail.trim()) {
    errors.producerEmail = "Agent Email required";
  }
  else if (!emailregex.test(values.producerEmail)) {
    errors.producerEmail = "Invalid Email Address"
  }











  return errors;
}
