import React,{useState,useEffect}  from 'react';

import axios from "axios";
import swal from "sweetalert";
import { ContentCopy } from '@mui/icons-material';

const Editgroupfunction = (id, usergroup_validation) =>{
  const [values, SetValues] = useState({ 
  userGroupName: "", 
  userGroupDesc: "",
  userGroupCode: "",  
 });
   
 const [submitted, setSubmitted] = useState(false);
 const [errors, setErrors] = useState({});
useEffect(() => {


 if (Object.keys(errors).length === 0 && submitted) {
   onSubmitform();
 }

}, [errors]);
const [rows, setUserrows] = useState([]);


   const handleChange = (e) => { 
     const { name, value } = e.target;
       SetValues({ 
        ...values,
        [name]: value, 
      });
   
   };
   
   
//  const handleEdit =(e) =>{
  
//     e.preventDefault(); 
 
//     setSubmitted(true); 
   
//  }

 useEffect(() => {
  getGroupsbyID();
    

   }, []);

   
const updateusergroup = async (e) => {
  e.preventDefault();
  const test = setErrors(usergroup_validation(values));
  setSubmitted(true);

};



//    const updateusergroup = async () => {
   
//   const res = await axios.put(
//       process.env.REACT_APP_API_ADMIN_URL+`/usergroup/${id}`,
//           values
//     )
//     .then((responseuser) =>
//      {
//  if (responseuser.status === 200)
//        {

//       swal({
//         title: "",
//         text: "User Group Updated successfully",
//         icon: "success",
//         button: "OK",
//       });
//     }
//   }
//   );
// };
    

const onSubmitform = (e) => {
  const res =  axios.put(
      process.env.REACT_APP_API_ADMIN_URL+`/usergroup/${id}`,
    values)
    .then((responseuser) => {

      if (responseuser.status === 200) {

       
        swal({
          title: "",
          text: "User Group Updated successfully",
          icon: "success",
          button: "OK",

        });
       
      }
    })
   
};


const getGroupsbyID =async() =>
{
  
const response = await fetch(process.env.REACT_APP_API_ADMIN_URL+`/usergroup/${id}`);


const data = await response.json();


if (response.status === 200) {
    SetValues({
     
      userGroupName: data.userGroupName,
      userGroupDesc: data.userGroupDesc,
      userGroupCode: data.userGroupCode,
  
    });
   

  }


}








return{handleChange,values,rows,updateusergroup, errors};

}

export default Editgroupfunction;