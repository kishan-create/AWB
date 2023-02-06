import React,{useState,useEffect}  from 'react';

const Userhooks = () => {
  const [rows, setUserrows] = useState([]);
    const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("shany");
    useEffect(() => {
        getUsers();
       }, []);
 const getUsers =async() =>
 {
    const response = await fetch("https://d058b22d-16bd-4340-a18b-713c19b3870b.mock.pstmn.io/getUser");
    const data = await response.json();
    setUserrows(data);
    
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
export default Userhooks;