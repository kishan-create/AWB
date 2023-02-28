import React,{useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";

const Editagentfunctions = () =>{
    const params = useParams();

const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});

const [values, SetValues] = useState({ 
  producerId: "",
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
   
 const handleEdit =(e) =>{
    e.preventDefault(); 
    setSubmitted(true); 
 }

 useEffect(() => {
    getAgentsbyID(params.id);
   }, []);

const getAgentsbyID = async(id) =>{
  const producerID = id;
  const reponse = await axios.get(
    process.env.REACT_APP_API_SERVICE_URL+`/producer/${producerID}`
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

  const res =  axios.put(
  process.env.REACT_APP_API_SERVICE_URL+`/producer/${values.producerId}`,
  values)
  .then((responseuser) => {
    if (responseuser.status === 200) {
   
      swal({
        title: "Good job!",
        text: "Agent Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  });
};



return{handleChange,values,handleEdit,updateAgent};
}

export default Editagentfunctions;