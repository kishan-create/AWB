import React from 'react'
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";




export default function Save() {
  const navigate = useNavigate();
  
  const handleNextClick = async () =>{

    const response = await axios.get('https://d11026ab-87a0-49a3-be2c-f8a6514d515c.mock.pstmn.io/save');

    console.log(response.data);
    const path = response.data.path
    console.log("response" + path);
    navigate(`./${path}`);
  }

return (
    <div className="app-wrapper mt-4">
        
                  <div className="row gx-2 gy-2">
                    <div className="col-12 mb-3">
                      <h5>Home page </h5>
                      <h5>save</h5>
                      <h5>save</h5>
                    </div>
                  </div>
            
              
                 
                  
                   
                 <button type="button" className="next-pre-btn-secondary mrg-r-3">Previous</button>
                 <Link to="/sampleid"> <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel</button></Link>




                  </div>
                
               

  
  )
}
