import React,{useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert2";

const Editgroupfunction = () =>{
    const params = useParams();

    const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
const [rows, setUserrows] = useState([]);

const [values, SetValues] = useState({ 
  userGroupName: "", 
  userGroupDesc: "",
  userGroupCode: "",  
 });

  
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
    console.log(values);
 }

 useEffect(() => {
    getGroupsbyID();
   }, []);


const getGroupsbyID =async() =>
{


const response = await fetch(`https://2b83fe9b-7133-49e5-a9ad-e94194aa511b.mock.pstmn.io/usergroup`);
// const data = await response.json();
//setUserrows(data);
// console.log(data)
console.log(response)

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