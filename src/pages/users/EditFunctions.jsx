import React,{useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
const Edituserfunctions = () => {
    const params = useParams();
    //console.log(params);
    const [rows, setUserrows] = useState([]);
    const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("shany");
    useEffect(() => {
        getUsersbyID(params.id);
       }, []);
 const getUsersbyID =async(id) =>
 {
   

    const response = await fetch("https://d058b22d-16bd-4340-a18b-713c19b3870b.mock.pstmn.io/EditUser?userId=1");
    const data = await response.json();
  
    
 }
  
 const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
}
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  
return{rows,handlePasswordChange,passwordType,passwordInput,togglePassword}
}
export default Edituserfunctions;