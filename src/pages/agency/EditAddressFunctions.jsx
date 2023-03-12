import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const EditAddressFunctions = (id) => {
  

  const [rows, setUserrows] = useState([]);

  const [values, SetValues] = useState({
    addrId: "",
    addrType: "",
    addrLine1: "",
    addrLine2: "",
    countryId: "",
    stateId: "",
    countyId: "",
    zip: "",


  });

 
  const [countryname, setCountryName] = useState([]);

  useEffect(() => {
    getaddressbyID();
    getCountryname();

  }, []);

  const getCountryname = async () =>{
    const response = await axios.get(process.env.REACT_APP_API_SERVICE_URL+"/lookupdata/2")
    .then((response) => { 
              if (response.status === 200) {  
                  setCountryName(response.data);
               }      
       });
    
  }


 
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const getaddressbyID = async () => {

    const response = await axios.get(
      process.env.REACT_APP_API_SERVICE_URL + `/addresses/${id}`
    );

    if (response.status == 200) {
      SetValues({
        addrType: response.data. addrType,
        addrLine1: response.data.addrLine1,
        addrLine2: response.data.addrLine2,
        countryId: response.data.countryId,
        stateId: response.data.stateId,
        countyId: response.data.countyId,

        zip: response.data.zip,



        
      });
    }
  };


  const updateAddress = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      process.env.REACT_APP_API_SERVICE_URL + `/addresses/${id}`,
      
      values
    )   
    .then((responseuser) =>
    {
if (responseuser.status === 200)
      {

     swal({
       title: "",
       text: "Address Updated successfully",
       icon: "success",
       button: "ok",
     });
   }
 }
 );
}
  return {    
    handleChange,values,updateAddress
  };
};
export default EditAddressFunctions;
