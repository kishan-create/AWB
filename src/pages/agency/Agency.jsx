
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Agency() {
  

  const tableheader = [
    

    { field: "agencyName", headerName: "Agency Name", width: 130 },

    { field: "agencyNpn", headerName: "Agency NPN", width: 130 },

   
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
