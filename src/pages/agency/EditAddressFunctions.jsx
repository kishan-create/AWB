import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const EditAddressFunctions = (id) => {
  const [rows, setUserrows] = useState([]);
  const [states, setStates] = useState([]);
  const [counties, setCounties] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  //const [selectedCountryedit, setSelectedCountryEdit] = useState('');
  const [selectedState, setSelectedState] = useState("");
  const [Isfetchstate, setIsFetchState] = useState(false);
  const [countries, SetCountires] = useState([]);
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
    if (Isfetchstate) {
      handleCountryChange();
    }
    if (selectedState) {
      handleStateChange();
    }
    // console.log(selectedCountry);
  }, [selectedCountry]);

  const getCountryname = async () => {
    await axios
      .get(
        process.env.REACT_APP_API_SERVICE_URL +
          "/lookupdata/lookupcategorycode/COUNTRY"
      )
      .then((response) => SetCountires(response.data))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const getaddressbyID = async (e) => {
    const response = await axios.get(
      process.env.REACT_APP_API_SERVICE_URL + `/addresses/${id}`
    );

    if (response.status == 200) {
      setSelectedCountry(response.data.countryId);
      setIsFetchState(true);
      // handleCountryChange(response.data.countryId)
      setSelectedState(response.data.stateId);
      // handleStateChange(response.data.stateId)
      SetValues({
        addrType: response.data.addrType,
        addrLine1: response.data.addrLine1,
        addrLine2: response.data.addrLine2,
        countryId: response.data.countryId,
        stateId: response.data.stateId,
        countyId: response.data.countyId,

        zip: response.data.zip,
      });
    }
  };
  const handleCountryEditChange = async (event) => {
 
    SetValues({ ...values, countryId: event.target.value });
    
    getallStatenames(event.target.value);
  };
  const handlestateEditChange = async (event) => {
    SetValues({ ...values, stateId: event.target.value });
    getAllCountyname(event.target.value);
  };
  const getallStatenames = async (cid) => {
    axios
      .get(
        process.env.REACT_APP_API_SERVICE_URL +
          `/lookupdata/lookupDataChild/${cid}`
      )
      .then((response) => setStates(response.data))
      .catch((error) => console.log(error));

    setSelectedState("");
    setIsFetchState(false);
    setCounties([]);
  };
  const getAllCountyname = async (cid) => {
    axios
    .get(
      process.env.REACT_APP_API_SERVICE_URL +
        `/lookupdata/lookupDataChild/${cid}`
    )
    .then((response) => setCounties(response.data))
    .catch((error) => console.log(error));
  setSelectedState("");
  };
  const handleCountryChange = async () => {
    //console.log(event.target.value);

    axios
      .get(
        process.env.REACT_APP_API_SERVICE_URL +
          `/lookupdata/lookupDataChild/${selectedCountry}`
      )
      .then((response) => setStates(response.data))
      .catch((error) => console.log(error));

    // Reset the selected state and counties
    setSelectedState("");
    setIsFetchState(false);
    setCounties([]);
  };
  const handleStateChange = async () => {
    axios
      .get(
        process.env.REACT_APP_API_SERVICE_URL +
          `/lookupdata/lookupDataChild/${selectedState}`
      )
      .then((response) => setCounties(response.data))
      .catch((error) => console.log(error));
    setSelectedState("");
  };

  const updateAddress = async (e) => {
    e.preventDefault();
    const res = await axios
      .put(
        process.env.REACT_APP_API_SERVICE_URL + `/addresses/${id}`,

        values
      )
      .then((responseuser) => {
        if (responseuser.status === 200) {
          swal({
            title: "",
            text: "Address Updated successfully",
            icon: "success",
            button: "ok",
          });
        }
      });
  };
  return {
    handleChange,
    values,
    updateAddress,
    countries,
    states,
    counties,
    handleCountryChange,
    handleStateChange,
    selectedCountry,
    handleCountryEditChange,
    selectedState,
    handlestateEditChange,
  };
};
export default EditAddressFunctions;
