
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function agency() {
  // const [rows, setAgentrows] = useState( []);


  // useEffect(() => {
  //   getAgencylists();
    
  // }, []);


  // const getAgencylists = async () => {
    
  //   const response = await fetch(
  //     "https://81925945-eb66-4f84-899e-e40a7552d6c3.mock.pstmn.io/user-group"
  //   );

  //   console.log(response);
  //   const data = await response.json();
  //   setAgentrows(data);
  
  // };


  const tableheader = [
    { field: "agencyId", headerName: "Agent ID", width: 70 },

    { field: "agencyName", headerName: "Agency Name", width: 130 },

    { field: "agencyNpn", headerName: "Agency NPN", width: 130 },

    { field: "agencyFbin", headerName: "Agency Fbin", width: 130 },

    { field: "agencyType", headerName: "Agency Type", width: 130 },

    {
      field: "fullName",
      headerName: "",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { agencyId: 1, agencyName: 'Snow', agencyNpn: 'mail@Jon',agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 2, agencyName: 'Lannister', agencyNpn: 'mail@Cersei',agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 3, agencyName: 'Lannister', agencyNpn: 'mail@Jaime',agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 4, agencyName: 'Stark', agencyNpn: 'mail@Arya',agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 5, agencyName: 'Targaryen', agencyNpn: 'mail@Daenerys',agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 6, agencyName: 'Melisandre', agencyNpn: null,agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 7, agencyName: 'Clifford', agencyNpn: 'mail@Ferrara',agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 8, agencyName: 'Frances', agencyNpn: 'mail@Rossini',agencyFbin:'9167939488', agencyType:1 },
    { agencyId: 9, agencyName: 'Roxie', agencyNpn: 'mail@Harvey',agencyFbin:'9167939488', agencyType:1 },
  ];

  //  const rows= [{"agencyId":2,"agencyName":"Altered agency","agencyNpn":"New Bourntec NPN","agencyFbin":2,"agencyType":1},{"agencyId":3,"agencyName":"new Agency","agencyNpn":"New Agency NPN","agencyFbin":1,"agencyType":1},{"agencyId":4,"agencyName":"encaps","agencyNpn":"encaps NPN","agencyFbin":1,"agencyType":1},{"agencyId":5,"agencyName":"Agency Name","agencyNpn":"Agency Npn","agencyFbin":12345,"agencyType":null},{"agencyId":6,"agencyName":"Agency Name","agencyNpn":"Agency Npn","agencyFbin":12345,"agencyType":null},{"agencyId":7,"agencyName":"Agency Name","agencyNpn":"Agency Npn","agencyFbin":2021,"agencyType":null},{"agencyId":8,"agencyName":"agency Npn","agencyNpn":"Agency Fbin","agencyFbin":2021,"agencyType":null},{"agencyId":9,"agencyName":"agency 1","agencyNpn":"Agency 2","agencyFbin":2021,"agencyType":null},{"agencyId":52,"agencyName":"agency 1","agencyNpn":"Agency 2","agencyFbin":100,"agencyType":null},{"agencyId":53,"agencyName":"agency 1","agencyNpn":"Agency 2","agencyFbin":100,"agencyType":null}]

 

  return {
    rows,
    tableheader,
  };
}
