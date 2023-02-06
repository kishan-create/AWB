export default function usergroup_validation(values) {

    var regex = /^[A-Za-z0-9 ]+$/
  
    let errors = {};
    if (!values.userGroupName.trim() ) {
      errors.userGroupName = "User group name required";
    }
    if (!values.userGroupDesc.trim() ){
       errors.userGroupDesc = "Description required";
    } else if(!regex.test(values.userGroupDesc)){
        errors.userGroupDesc = "Special characters are not allowed";
       }
    if (!values.userGroupCode.trim() ) {
      errors.userGroupCode = "User group code required";
    }
    return errors;
  }
  