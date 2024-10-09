import React, { useState } from 'react';
import axios from "axios";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Modal from "react-modal";
import Accordian_validation from "../../pages/validations/Accordian_validation"
import AccordianFunctions from "../../functions/AccordianFunctions"
import './accordian.scss';

export default function AccordionPanel(props) {
  const [array, setArray] = useState([]);
  const myArray = props.colums;
  const filteredArray = myArray.filter(obj => obj.isFieldDisplay !== "N");

  const firstRow = filteredArray.map((obj) => obj.fieldName)[0];

  const onSubmitform = async () => {
    const errorRes = formValidation(inputFields)
  
    if (errorRes) {
      if (props.tableRow == "user" || props.tableRow == "usergroup") {
        const response = await axios.post(
          process.env.REACT_APP_API_ADMIN_URL + `/${props.tableRow}/search`, def
        )
        props.search(response.data)
      }
      else {
        const response = await axios.post(
          process.env.REACT_APP_API_SERVICE_URL + `/${props.tableRow}/search`, def
        )
        props.search(response.data)
      }

      closeModal();

    }
    else {
      console.log("errormsg ");
    }


  };





  const { modalIsOpen, inputFields, closeModal, handleChangeInput, handleAddFields, handleRemoveFields, openModal, def, handleSubmit, errors, formValidation } = AccordianFunctions(
    firstRow, Accordian_validation, onSubmitform,
  );
  const Arr1 = ["equal", "not_equal"]
  const Arr2 = ["equal", "not_equal", "like"]
  const data = props.colums
  console.log(props.colums);

  // const x = inputFields[0].key
  const fieldValues = inputFields.map((field, index) => ({ value: field.key, index }));

  const filteredData = data.filter(item => item.fieldName === fieldValues);



  const getOptions = (type) => {
    let items = [];
    items.push(<option value="">Select an operator</option>)


    const myObject = data.find(obj => obj.fieldName === type);
    if (myObject != null) {
      console.log(myObject.fieldType);

      if (myObject.fieldType === "STRING") {
        items.push(<option value="EQUAL">Equal to</option>,
          <option value="NOT_EQUAL">Not Equal to </option>,
          <option value="LIKE">Like</option>

        )
      } else {

        items.push(<option value="EQUAL">Equal to </option>,
          <option value="NOT_EQUAL">Not Equal to</option>)

      }

    }

    return items;

  }


  
  return (
    <div>


      <button
        onClick={() => {
          openModal();
        }}
        type="button" class="next-pre-btn mrg-r-3 fl-right">
        Advanced Search
                </button>

      <Modal className="modelcount "
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}

      >
        <Accordion>
          <AccordionSummary

          >
            <Typography>

              <form className="model-height">
                <div className="page-grid-newfour page-grid-margin  label-margin-bt">
                  <div >
                    <label htmlFor="Submission" className="form-label">
                      {" "}
                    Fields<span className="red">*</span>
                    </label>
                  </div>
                  <div >
                    <label htmlFor="Submission" className="form-label">
                      {" "}
                    Operators<span className="red">*</span>
                    </label>
                  </div>
                  <div >
                    <label htmlFor="Submission" className="form-label">
                      {" "}
                    Values<span className="red">*</span>
                    </label>
                  </div>
                </div>


                {inputFields.map((inputField, index) => (


                  <div key={index}>

                    <div className="page-grid-newfour page-grid-margin">
                      <div className="">
                       
                        <div className="input-group mb-3">

                          <select
                            className="form-control"
                            name="key"
                            onChange={event => handleChangeInput(index, event)}

                            defaultValue={inputField.key}


                          >
                            <option value="">Select a column</option>

                            {filteredArray.map(({ displayName, fieldName }, index) => (
                              <option value={fieldName}>{displayName}</option>
                            ))}

                          </select>
                      
                        </div>
                        {inputField.keyCheck && <div className="validation-tooltip">This field is required.</div>}


                      </div>
                      <div className="">
                      
                        <div className="input-group mb-3">
                          { }
                          <select
                            className="form-control"
                            name="operator"

                            onChange={event => handleChangeInput(index, event)}

                            defaultValue={inputField.operator}
                          >
                          
                            {getOptions(inputField.key)}

                          </select>
                      
                        </div>
                        {inputField.operatorCheck && <div className="validation-tooltip">This field is required.</div>}


                      </div>

                      <div className="">
                      
                        <div className="input-group mb-3">
                          <input
                            type="text"

                            name="value"
                            className="form-control"
                            placeholder="Enter Values"
                            aria-label="Enter Insured Name"
                            aria-describedby="basic-addon1"
                            onChange={event => handleChangeInput(index, event)}

                            value={inputField["value" + index]}

                          />
                      

                        </div>
                        {inputField.nameCheck && <div className="validation-tooltip">This field is required.</div>}
                      </div>
                      <div className="search-popup-p20">
                        < RemoveCircleIcon onClick={() => handleRemoveFields(index)} />
                        <AddCircleIcon onClick={handleAddFields} />

                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={onSubmitform} type="button" className="next-pre-btn mrg-r-3 next-pre-btn-search">
                  Search
                        </button>
                <button onClick={closeModal} type="button" className="next-pre-btn-secondary mrg-r-3 next-pre-btn-search" >
                  Cancel
                        </button>
              </form>
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Modal>
    </div>

  );
}


