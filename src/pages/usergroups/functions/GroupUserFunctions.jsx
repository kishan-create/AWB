import { useState, useEffect } from "react";
import axios from "axios";
const GroupUserFunctions = () => {
  const [originalRows, SetOriginalRows] = useState([]);
  useEffect(() => {
    getAllGroupUsers();
  }, []);

  const getAllGroupUsers = async () => {
    const response = await fetch(
      "https://d058b22d-16bd-4340-a18b-713c19b3870b.mock.pstmn.io/getUser"
    );
    const data = await response.json();
    SetOriginalRows(data);
    {
      /*const response = await axios.get("http://localhost:8000/usergroupmembers/findUsersGroups");
    if (response.data.status === 200) {

        SetOriginalRows(response.data.users);
      }
  
    }
    return {originalRows}
*/
    }
  };
  //console.log(originalRows);
  return { originalRows };
};
export default GroupUserFunctions;
