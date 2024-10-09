import React, { useState, useEffect } from "react";
import httpCommon from "../components/common/http-common";
import axios from "axios";
import { saveAs } from 'file-saver';

const AwbTableFunctions = (props) => {
  const [rows, setUserrows] = useState([]);
  const [columns, SetColumns] = useState([]);

  useEffect(() => {
    getRows();
    getColumns();
  }, []);

  const getRows = async () => {

    const response = await fetch(props.baseURL + "/" + props.tableRow);
    const data = await response.json();
    if (props.tableType === 'childTable') {

      getFullResponse(data);
    }
    else {
      setUserrows(data);
    }

  };
  const getColumns = async () => {
    const response = await fetch(process.env.REACT_APP_API_SERVICE_URL + "/tableconfig/pagecode" + "/" + props.tableHeader + "/componentcode/TABLE");
    const data = await response.json();
    SetColumns(data);
    
  };

  const getFullResponse = async (ID) => {

    fetch(process.env.REACT_APP_API_SERVICE_URL + `/addresses/details`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ID)
    })
      .then(response => response.json()).then(data => {
        const filteredData = data.filter(obj => {
          const values = Object.values(obj);
          const isNotNull = values.every(val => val !== null);
          return isNotNull;
        });
        setUserrows(filteredData)

      })

      .catch(error => {
        console.error(error);
      });


  }
  const getAgencyAddress = async (id) => {
    const response = await fetch(
      process.env.REACT_APP_API_SERVICE_URL + `/agencyaddr/agency/${id}/address`
    );
    const data = await response.json();



    // const res = data.addressId
    getFullResponse(data);

    //setAgentrows(data);


  };
  const downloaddocument = async (id, filename) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_SERVICE_URL + `/document/download/${id}`, {
        responseType: 'blob'
      });
  
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      saveAs(blob, filename);
    } catch (error) {
      console.log(error);
    }


  };

  const searchparameter = (data) =>{
    setUserrows(data)
  }


 
  return { rows, columns, getRows, getAgencyAddress, downloaddocument, searchparameter };
    };
    export default AwbTableFunctions;



