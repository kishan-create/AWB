export default function registeration_validation(values)
 { 
    // var nameregex = /^[A-Za-z0-9 ]+$/ 
    var numregex = /^(?=.*[0-9]).{10}$/ ;

     



const pwregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;

    // alert("validations");
     let errors = {};
       if (!values.userName.trim() )
        {  errors.userName = "User  name required"; }
        else if(!values.userName.trim() )
        {  errors.userName = "User name is already added"; }

        if (!values.userFullName.trim() )
        {  errors.userFullName = "Full  name required"; }
        else if(!values.userFullName.trim() )
        {  errors.userFullName = "check if already added full name"; }

        if (!values.userEmail.trim() )
        {  errors.userEmail = "User email required"; }
        else if (!values.userEmail.trim() )
        {
          errors.userEmail = "Email is already added "; 
        }

        if (!values.password.trim() )
          {  errors.password = "password required"; }
           else if(!pwregex.test(values.password))

           {  errors.password = "Use 8 or more characters with a mix of letters, numbers & symbols,Capital Letter"; } 

            if (!values.userPhone.trim() ) 
            {  errors.userPhone = "User phone number required"; } 
            else if(!numregex.test(values.userPhone))
           {  errors.userPhone = "Please Check phone number "; } 




        
        // if (!values.userGroupDesc.trim() )
        //   {  errors.userGroupDesc = "Description required"; }
        //    else if(!regex.test(values.userGroupDesc))
        //    {  errors.userGroupDesc = "Special characters are not allowed"; } 

        //     if (!values.userGroupCode.trim() ) 
        //     {  errors.userGroupCode = "User group code required"; } 
             return errors;
            }