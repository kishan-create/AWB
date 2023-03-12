import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Documentfunctions = (id) =>{
    

const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
useEffect(() => {
  getAgentsbyID();
}, []);
const [values, SetValues] = useState({ 
  // producerId: "",
  orginalFileName: "",
  fileSizeKb: "",
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



const getAgentsbyID = async() =>{
  const reponse = await axios.get(
    process.env.REACT_APP_API_SERVICE_URL+`/document/orgintype/AGENCY/orgintypeid/${id}`
  );
 
  

  if (reponse.status == 200) {
    SetValues({
      // producerId: reponse.data.producerId,
      orginalFileName:reponse.data.orginalFileName,
      fileSizeKb:reponse.data.fileSizeKb,

    });
   
  };
}
 

 

const updateAgent = async (e) => {

  e.preventDefault();

  const res =  axios.put(
  process.env.REACT_APP_API_SERVICE_URL+`/producer/${id}`,
  values)
  .then((responseuser) => {
    if (responseuser.status === 200) {
   
      swal({
        title: "",
        text: "Agent Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  });
};





return{handleChange,values,handleEdit,updateAgent};
}
export default Documentfunctions;
