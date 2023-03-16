import React,{useState,useEffect}  from 'react';

const Grouphooks = () => {
  const [rows, setUserrows] = useState([]);
   
    useEffect(() => {
        getUsers();
       }, []);
 const getUsers =async() =>
 {
    const response = await fetch("https://d058b22d-16bd-4340-a18b-713c19b3870b.mock.pstmn.io/getUser");
    const data = await response.json();
    setUserrows(data);
    
 }
  


return{rows}
}
export default Grouphooks;