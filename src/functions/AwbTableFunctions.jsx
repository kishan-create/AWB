import React, { useState, useEffect } from "react";
import httpCommon from "../components/common/http-common";
const AwbTableFunctions = (props) => {
  const [rows, setUserrows] = useState([]);
  const[columns,SetColumns]=useState([]);
  useEffect(() => {
    getRows();
    getColumns();
  }, []);
  
    const getRows = async () => {
    const response = await fetch(props.baseURL + "/"+props.tableRow);
    const data = await response.json();
    setUserrows(data);
  };
  const getColumns = async () => {
    const response = await fetch(process.env.REACT_APP_API_SERVICE_URL+"/tableconfig/pagecode" + "/"+props.tableHeader+"/componentcode/TABLE");
    const data = await response.json();
    SetColumns(data);
  };

 
 
  return { rows, columns,getRows };
};
export default AwbTableFunctions;
