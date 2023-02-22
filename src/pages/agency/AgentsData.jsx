

import React, { useEffect } from 'react';
import { useState } from 'react';
export default function AgentsData() {
  
// const [rows, setAgentrows] = useState([]);


//   useEffect(() => {
//     console.log("test",rows);
//     getAgents();
    
//   }, []);
// console.log("test",rows);

//   const getAgents = async () => {
//     const rows = [
//       { producerId: 1, producerName: 'Snow', producerEmail: 'mail@Jon',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 2, producerName: 'Lannister', producerEmail: 'mail@Cersei',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 3, producerName: 'Lannister', producerEmail: 'mail@Jaime',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 4, producerName: 'Stark', producerEmail: 'mail@Arya',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 5, producerName: 'Targaryen', producerEmail: 'mail@Daenerys',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 6, producerName: 'Melisandre', producerEmail: null,producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 7, producerName: 'Clifford', producerEmail: 'mail@Ferrara',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 8, producerName: 'Frances', producerEmail: 'mail@Rossini',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//       { producerId: 9, producerName: 'Roxie', producerEmail: 'mail@Harvey',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
//     ];
//     setAgentrows(rows);
//     // const response = await fetch(
//     //   "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/producer"
//     // );

//     // console.log(response);
//     // const data = await response.json();
//     // setAgentrows(data);
  
//   };

  
      const tableheader = [
        { field: 'producerId', headerName: 'Producer ID', width: 70  ,show: true},
  
        { field: 'producerName', headerName: 'Producer Name', width: 130 },
       
        { field: 'producerEmail', headerName: 'Producer Email', width: 130 },
  
        { field: 'producerPhone', headerName: 'Producer Phone', width: 130 },
  
        { field: 'agencyId', headerName: 'AgencyID', width: 130 },
        
        { field: 'billingAddressId', headerName: 'BillingAddressID', width: 130 },
  
        { field: 'permanentAddressId', headerName: 'PermanentAddressID', width: 130 },
  
        { field: 'shippingAddressId', headerName: 'ShippingAddressI', width: 130 },
  
        { field: 'workAddressId', headerName: 'workAddressId', width: 130 },
  
       
   
      {
        field: 'fullName',
        headerName: '',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      },
    ];
    
    const rows = [
      { producerId: 1, producerName: 'Snow', producerEmail: 'mail@Jon',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 2, producerName: 'Lannister', producerEmail: 'mail@Cersei',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 3, producerName: 'Lannister', producerEmail: 'mail@Jaime',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 4, producerName: 'Stark', producerEmail: 'mail@Arya',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 5, producerName: 'Targaryen', producerEmail: 'mail@Daenerys',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 6, producerName: 'Melisandre', producerEmail: null,producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 7, producerName: 'Clifford', producerEmail: 'mail@Ferrara',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 8, producerName: 'Frances', producerEmail: 'mail@Rossini',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
      { producerId: 9, producerName: 'Roxie', producerEmail: 'mail@Harvey',producerPhone:'9167939488',agencyId:2, billingAddressId:1,permanentAddressId: 1,shippingAddressId:2,workAddressId:3, },
    ];
  

    return {
       rows,tableheader
    
      
    };
    // return(<>
    // {console.log(rows)}
    // </>)

  }
  
  
  
  