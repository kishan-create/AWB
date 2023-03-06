export default function Agent_validation(values) {

    var numregex = /^(?=.*[0-9]).{1,12}$/ ;
    const PHONE_REGEX = 
               new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);

               const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
  
    let errors = {};
    if (!values.producerName.trim() ) {
      errors.producerName = "Agent name required";
    }
    
  
    // if (!values.producerPhone.trim() ) {
    //     errors.producerPhone = "User phone number required";
    //    }  else if(!numregex.test(values.producerPhone)) {
    //        errors.producerPhone = "Invalid phone number. Please try again"; 
    //       } 



          if (!values.producerPhone.trim() ) 
          {  errors.producerPhone = "User phone number required"; } 
          else if(!numregex.test(values.producerPhone))
         {  errors.producerPhone = "Use number only"; } 






          if (!values.producerEmail.trim() ) {
            errors.producerEmail = "Email required";
          }

         
       
         


//    if (!values.userGroupDesc.trim() ){
//     errors.userGroupDesc = "Description required";
//  } else if(!regex.test(values.userGroupDesc)){
//      errors.userGroupDesc = "Special characters are not allowed";
    // }
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
  