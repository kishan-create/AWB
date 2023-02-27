import React,{useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert2";

const Editgroupfunction = () =>{
  const [values, SetValues] = useState({ 
  userGroupName: "", 
  userGroupDesc: "",
  userGroupCode: "",  
 });
    const params = useParams();

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
    console.log("edit values",values);
 }

 useEffect(() => {
    getGroupsbyID(params.id);
   }, []);


const getGroupsbyID =async(id) =>
{

// const response = await fetch(`https://2b83fe9b-7133-49e5-a9ad-e94194aa511b.mock.pstmn.io/usergrouphttp://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/usergroup/2`);
const response = await fetch(`http://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/usergroup/${id}`);

const data = await response.json();

console.log("response",data)

if (response.status == 200) {
    SetValues({
     
      userGroupName: response.data.userGroupName,
      userGroupDesc: response.data.userGroupDesc,
      userGroupCode: response.data.userGroupCode,
  
    });
  }


}
return{handleChange,values,handleEdit,rows};

}

export default Editgroupfunction;