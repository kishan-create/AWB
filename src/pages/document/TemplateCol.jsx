
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function TemplateCol() {
  

  const tableheader = [
    

    { field: "templateName", headerName: "Template Name", width: 130 },

    { field: "templateCode", headerName: "Template Code", width: 130 },

    { field: "templateDec", headerName: "Template Description", width: 130 },
    
    

    { field: "filter1", headerName: "Filter 1", width: 130 },
    
    { field: "filter2", headerName: "Filter 2", width: 130 },

   
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

  

  return {
   
    tableheader,
  };
}
