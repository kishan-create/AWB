import React,{useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert2";

const Editagentfunctions = () =>{
    // const params = useParams();

const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
const [rows, setUserrows] = useState([]);

const [values, SetValues] = useState({ 
    producerName: "",
    producerEmail: "",
    producerPhone: "",
    billingAddressId: "",
    permanentAddressId: "",
    shippingAddressId: "",
    workAddressId: "",
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
 }

 useEffect(() => {
    getAgentsbyID();
   }, []);


const getAgentsbyID =async() =>
{
const response = await fetch(`http://127.0.0.1:8082/submission-svc/producer`);
const data = await response.json();
setUserrows(data);
if (response.status == 200) {
    SetValues({

  
    });
  }
}



return{handleChange,values,handleEdit,rows};
}

export default Editagentfunctions;