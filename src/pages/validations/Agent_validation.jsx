export default function Agent_validation(values) {

    var numregex = /^(?=.*[0-9]).{1,12}$/ ;
    const PHONE_REGEX = 
               new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);
  
    let errors = {};
    if (!values.producerName.trim() ) {
      errors.producerName = "Agent name required";
    }
    
    if (!values.producerEmail.trim() ) {
      errors.producerEmail = "Email required";
    }
   
    if (!values.producerPhone.trim() ) 
    {  errors.producerPhone = "User phone number required"; } 
    else if(!numregex.test(values.producerPhone))
   {  errors.producerPhone = "Invalid phone number. Please try again"; } 

    // if (!values.billingAddressId.trim() ) {
    //     errors.billingAddressId = "Billing Address required";
    //   }
    // if (!values.permanentAddressId.trim() ) {
    //     errors.permanentAddressId = "Permenant address required";
    //   }
    //   if (!values.shippingAddressId.trim() ) {
    //     errors.shippingAddressId = "Shipping address required";
    //   }
    //   if (!values.workAddressId.trim() ) {
    //     errors.workAddressId = "Work address required";
    //   }

  

    
    return errors;
  }
  