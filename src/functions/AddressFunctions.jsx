const AddressFunctions = () => {
    const [inputFields, setInputFields] = useState([
        {
          agent_Type: "",
          agent_Adress: "",
          agent_Address2: "",
    
          country: "",
          state: "",
          zip: "",
          location: "",
        },
      ]);
      const [inputFields2, setInputFields2] = useState({
        agent_Type: "",
        agent_Adress: "test",
        agent_Address2: "",
    
        country: "",
        state: "",
        zip: "",
        location: "",
      });
      const [listaddress, SetlistAddress] = useState([]);
      const [btnCount, setbtnCount] = useState(0);
      const[countryName,SetCountryName]=useState([]);
      useEffect(() => {
        getAllCountryName();
      }, []);
      const getAllCountryName = async () => {
        const response = http.get("/lookupdata/2").then((response) => {
          if (response.status === 200) {
            SetCountryName(response.data);
          }
        });
      };
      
}

export default AgencyFunctions;