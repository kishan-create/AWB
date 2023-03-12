export default function registeration_validation(values)
 { 
    var numregex = /^(?=.*[0-9]).{10}$/ ;
    var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


     



const pwregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;

    // alert("validations");
     let errors = {};
       if (!values.userName.trim() )
        {  errors.userName = "User group name required"; }
        else if(!values.userName.trim() )
        {  errors.userName = "User group already existing"; }

        if (!values.userFullName.trim() )
        {  errors.userFullName = "Full  name required"; }

        if (!values.userEmail.trim() )
        {  errors.userEmail = "User email required"; }
        else if (!emailregex.test(values.userEmail)){
          errors.userEmail = "Invalid email address"
        }
        else if (!values.userEmail.trim() )
        {  errors.userEmail = " email  already existing"; }

        if (!values.password.trim() )
          {  errors.password = "password required"; }
           else if(!pwregex.test(values.password))

           {  errors.password = "Use 8 or more characters with a mix of letters,capital, numbers & symbols"; } 

            if (!values.userPhone.trim() ) 
            {  errors.userPhone = "User phone number required"; } 
            else if(!numregex.test(values.userPhone))
           {  errors.userPhone = "Invalid Number"; } 




             return errors;
            }