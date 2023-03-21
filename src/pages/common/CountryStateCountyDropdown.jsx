import React,{useState,useEffect}  from 'react';
import axios from 'axios';

const CountryStateCountyDropdown = () => {
const[countries,SetCountires]=useState([]);
const[states,setStates]=useState([]);
const [counties, setCounties] = useState([]);
const [selectedCountry, setSelectedCountry] = useState('');
const [selectedState, setSelectedState] = useState('');
useEffect(()=>{
GetAllCountries();
},[])

const GetAllCountries =async() =>
{
    await axios.get(process.env.REACT_APP_API_SERVICE_URL +"/lookupdata/lookupcategorycode/COUNTRY")
    .then(response=>SetCountires(response.data))
    .catch(error=>console.log(error))
}
const handleCountryChange=async(event)=> {
    // Update the selected country
    setSelectedCountry(event.target.value);

    // Fetch the list of states for the selected country
    axios.get(process.env.REACT_APP_API_SERVICE_URL+`/lookupdata/lookupDataChild/${event.target.value}`)
      .then(response => setStates(response.data))
      .catch(error => console.log(error));

    // Reset the selected state and counties
    setSelectedState('');
    setCounties([]);
  }
  const handleStateChange=async(event)=> {
    // Update the selected state
    
    setSelectedState(event.target.value);

    // Fetch the list of counties for the selected state
    axios.get(process.env.REACT_APP_API_SERVICE_URL+`/lookupdata/lookupDataChild/${event.target.value}`)
      .then(response => setCounties(response.data))
      .catch(error => console.log(error));
  }

 
<<<<<<< HEAD
return{countries,selectedCountry,handleCountryChange,states,selectedState,handleStateChange,counties,setSelectedCountry}
=======
return{countries,selectedCountry,handleCountryChange,states,selectedState,handleStateChange,counties,setSelectedCountry,setSelectedState}
>>>>>>> 2906d9c6fb991d872f399eeef1f5db59df13908f
}
export default CountryStateCountyDropdown;