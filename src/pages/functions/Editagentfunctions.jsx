import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Editagentfunctions = (id, Agent_validation) =>{
    

const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
useEffect(() => {


  if (Object.keys(errors).length === 0 && submitted) {
    onSubmitform();
  }

}, [errors]);

useEffect(() =>{
  getAgentsbyID();

},[])

const [values, SetValues] = useState({ 
  // producerId: "",
    producerName: "",
    producerEmail: "",
    producerPhone: "",
 });

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



const getAgentsbyID = async() =>{
  const producerID = id;
  const reponse = await axios.get(
    process.env.REACT_APP_API_SERVICE_URL+`/producer/${producerID}`
  );
 
  

  if (reponse.status == 200) {
    SetValues({
      // producerId: reponse.data.producerId,
    producerName:reponse.data.producerName,
    producerEmail:reponse.data.producerEmail,
    producerPhone:reponse.data.producerPhone,

    });
   
  };
}

const updateAgent = async (e) => {
  e.preventDefault();
  const test = setErrors(Agent_validation(values));
  setSubmitted(true);

};
 

 

// const updateAgent = async (e) => {

//   e.preventDefault();
//     const res =  axios.put(
//       process.env.REACT_APP_API_SERVICE_URL+`/producer/${id}`,
//       values)
//       .then((responseuser) => {
//         if (responseuser.status === 200) {
       
//           swal({
//             title: "",
//             text: "Agent Updated successfully",
//             icon: "success",
//             button: "OK",

//           });
//         }
//       });

  

 
// };
const onSubmitform = (e) => {
  const res =  axios.put(
    process.env.REACT_APP_API_SERVICE_URL+`/producer/${id}`,
    values)
    .then((responseuser) => {

      if (responseuser.status === 208) {
        setErrors({ ...errors, producerEmail: "Email Address already exist" });

      }
      else if (responseuser.status === 200) {

       
        swal({
          title: "",
          text: "Agent Updated successfully",
          icon: "success",
          button: "OK",

        });
       
      }
    })
   
};





return{handleChange,values,updateAgent,errors};
}
export default Editagentfunctions;
