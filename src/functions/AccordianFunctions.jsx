import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

const AccordianFunctions = (firstRow, Accordian_validation, onSubmitform,getFieldTypes) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [inputFields, setInputFields] = useState([
    {
      key: '',
      operator: '',
      field_type: "STRING",

      value: '',
    }
  ]);

  // console.log(firstRow);



  function closeModal() {
    setIsOpen(false);
    const data = [{
      key: '',
      operator: '',
      field_type: "STRING",

      value: '',
    }]
    setInputFields(data);
  }




  const handleChangeInput = (index, event) => {

    const newInputFields = inputFields.map(i => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;

      setInputFields(values);
    })

  }



  const handleAddFields = () => {
    setInputFields([...inputFields, { key: '', operator: '', field_type: "STRING", value: '', }])
  }
  // const handleRemoveFields = (index) => {
  //   if (inputFields.length !== 1) {
  //     const values = [...inputFields];
  //     values.splice(index, 1);
  //     setInputFields(values);
  //   }

  // }

    const handleRemoveFields = (index) => {

        const values = [...inputFields];
    
        values.splice(index, 1);
    
        setInputFields(values);
    
      };

  function openModal() {
    setIsOpen(true);
    getFieldTypes();

  }

  const def = {

    "filters":

      inputFields

    ,

    "sorts": [

      {

        "key": firstRow,

        "direction": "ASC"

      }

    ],

    "page": null,

    "size": null

  }


  //   useEffect(() => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       onSubmitform();
  //     }
  //   }, [errors]);
  //   const handleSubmit = (e, index) => {
  //     e.preventDefault();
  //      setErrors(Accordian_validation(inputFields)); 
  //     setIsSubmitting(true);
  //   };


  const formValidation = (inputFields) => {
    const data = [...inputFields]
    let valid = true
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];

      if (data[index].key == "") {
        data[index].keyCheck = "key required"
        valid = false
      }
      else {
        data[index].keyCheck = ""
        valid = true
      }


      if (data[index].operator == "") {
        data[index].operatorCheck = "key required"
        valid = false
      }
      else {
        data[index].operatorCheck = ""
        valid = true
      }
      if (data[index].value == "") {
        data[index].nameCheck = "name required"
        valid = false
      }
      else {
        data[index].nameCheck = ""
        valid = true
      }







    }
    setInputFields(data)
    return valid

  }



  return { modalIsOpen, inputFields, closeModal, handleChangeInput, handleAddFields, handleRemoveFields, openModal, def, errors, formValidation };


}
export default AccordianFunctions;