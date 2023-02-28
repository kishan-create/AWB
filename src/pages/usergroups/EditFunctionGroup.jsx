import React,{useState,useEffect}  from 'react';

import axios from "axios";
import swal from "sweetalert";
import { ContentCopy } from '@mui/icons-material';

const Editgroupfunction = (id) =>{
  const [values, SetValues] = useState({ 
  userGroupName: "", 
  userGroupDesc: "",
  userGroupCode: "",  
 });
   
    const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
const [rows, setUserrows] = useState([]);


   const handleChange = (e) => { 
     const { name, value } = e.target;
       SetValues({ 
        ...values,
        [name]: value, 
      });
   
   };
   
   
 const handleEdit =(e) =>{
  
    e.preventDefault(); 
 
    setSubmitted(true); 
   
 }

 useEffect(() => {
    getGroupsbyID(id);
    updateusergroup(id);

   }, []);






   const updateusergroup = async (e) => {
    e.preventDefault();
  
    const res = await axios.put(
      `http://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/usergroup/${id}`,
          values
    )
    .then((responseuser) =>
     {
 if (responseuser.status === 200)
       {

      swal({
        title: "Good job!",
        text: "User Group Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  }
  );
};
    


const getGroupsbyID =async() =>
{
  
const response = await fetch(`http://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/usergroup/${id}`);


const data = await response.json();



if (response.status == 200) {
    SetValues({
     
      userGroupName: response.data.userGroupName,
      userGroupDesc: response.data.userGroupDesc,
      userGroupCode: response.data.userGroupCode,
  
    });
    swal({
      title: "Good job!",
      text: "Agency Added successfully",
      icon: "success",
      button: "ok",
    });

  }


}








return{handleChange,values,handleEdit,rows,updateusergroup};

}

export default Editgroupfunction;