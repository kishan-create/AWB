

import React, { useEffect } from 'react';
import { useState } from 'react';
export default function AgentsData() {
  



  
  
      const tableheader = [
    
  
        { field: 'producerName', headerName: 'Producer Name', width: 130 },
       
        { field: 'producerEmail', headerName: 'Producer Email', width: 130 },
  
        { field: 'producerPhone', headerName: 'Producer Phone', width: 130 },
  
      
  
       
   
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
    
  
  

    return {
       tableheader
    
      
    };
    // return(<>
    // {console.log(rows)}
    // </>)

  }
  
  
  
  