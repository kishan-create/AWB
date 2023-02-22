import React,{useState,useEffect}  from 'react';

const GroupUserFunction = (id) => {
  const [rows, setUserrows] = useState([]);
    const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("shany");
    useEffect(() => {
        getUsers();
       }, []);
 const getUsers =async() =>
 {
    const response = await fetch(`http://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/usergroup/groupmembers?groupid=${id}`);
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
export default GroupUserFunction;