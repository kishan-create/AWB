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
    // billingAddressId: "",
    // permanentAddressId: "",
    // shippingAddressId: "",
    // workAddressId: "",
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





// const getAgentsbyID =async() =>
// {
// const response = await fetch(`http://127.0.0.1:8082/submission-svc/producer`);
// const data = await response.json();
// setUserrows(data);
// if (response.status == 200) {
//     SetValues({

  
//     });
//   }
// }

const getAgentsbyID = async(id) =>{
  const producerId = id;
  const reponse = await axios.get(
    `http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/producer/1`
  );
  

  if (reponse.status == 200) {
    SetValues({
      producerId: reponse.data.producerId,
      producerName: reponse.data.producerName,
      producerEmail: reponse.data.producerEmail,
      producerPhone: reponse.data.producerPhone,
     
    });
  }


}

const updateAgent = async (e) => {
  e.preventDefault();
  const res =  axios.put("http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/producer/4", values);

  if (res.status == 200) {
    swal({
      title: "Good job!",
      text: "Job Updated successfully",
      icon: "success",
      button: "ok",
    });
  }
};



return{handleChange,values,handleEdit,rows,updateAgent};
}

export default Editagentfunctions;