import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import http from "../components/common/http-common";
import {useNavigate} from 'react-router-dom';

const AgencyFunctions = (Agency_Validation, adressData, fileData, listadd, setAddressData) => {
  const [values, SetValues] = useState({
    agencyName: "",
    agencyNpn: "",
    agencyFbin: "",
  });
  const [returnValue, SetReturnValue] = useState({
    agencyId: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
   
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(Agency_Validation(values));
    setIsSubmitting(true);

   // onSubmitform();
  };

  const onSubmitform = (e) => {

    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/agency", values)
      .then((response) => {
        if (response.status === 208) {
          setErrors({ ...errors, agencyName: "Agency Name already exist" });
  
        }
        else if (response.status === 200) {
          SetReturnValue({
            agencyId: response.data.agencyId,
          });
          

          submitAddress(response.data.agencyId);
          swal({
            title: "",
            text: "Agency Added successfully",
            icon: "success",
            button: "OK",

          });
          navigate('/listagency', {replace: true});
         
        }
      });
  };
  const submitAddress = (agencyID) => {
    console.log("address");
    listadd.map((listaddress, key) => {
      listaddress.agencyId = agencyID;
    });

    const response = axios

      .post(process.env.REACT_APP_API_SERVICE_URL + "/agencyaddr", listadd)
      .then((response) => {
        if (response.status === 200) {
          submitFiles(agencyID);
        }
      });
  };
  const submitFiles = (agencyID) => {
    let formData = new FormData();

    fileData.map((file) => {
      formData.append("documents", file);
    });
    formData.append("docOrginTypeId", agencyID);
    formData.append("docOrginType", "AGENCY");
    formData.append("docCategoryId", 7);
    formData.append("docSubCategoryId", 9);

    const response = axios

      .post(process.env.REACT_APP_API_SERVICE_URL + "/document", formData)
      .then((response) => {
       
        //  if (response.status === 200) {
        //   swal({
        //     title: "",
        //     text: "Agency Added successfully",
        //     icon: "success",
        //     button: "OK",

        //   });
        //   navigate('/listagency', {replace: true});
        // }
      });
  };

  const RemoveAddress = (index) => {
   

    const rows = [...adressData];
    rows.splice(index, 1);
    setAddressData(rows);
  };

  const DeleteAddress=async(index,addrid )=>
{
  swal({
    title: "Are you sure to Delete ??",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      const res =  axios.delete(
        process.env.REACT_APP_API_SERVICE_URL + `/addresses/${addrid}`
      )
    .then((response) => {
      // thisclickrow.closest("tr").remove();
      if (response.status === 200) {
        swal({
          title: "",
          text: " Record deleted successfully",
          icon: "success",
          button: "OK",

        });
        RemoveAddress(index);
      }
    });
    }
  });
  
 

}



  return { handleChange, handleSubmit, values,errors,DeleteAddress };
};
export default AgencyFunctions;
