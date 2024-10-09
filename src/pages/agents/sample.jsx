import React from 'react'
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Sample() {
    const [Component, setComponent] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [responseData, setResponseData] = useState(null);
    // const componentToRender = "Newsample"


   const array = [
        {"path": "Newsample", 
        "selectedOption": "Newsample"
    
         },
         {"path": "save", 
         "selectedOption": "save"
         }
         ]

    const handleApi = async () => {
        const response = await axios.get('https://d11026ab-87a0-49a3-be2c-f8a6514d515c.mock.pstmn.io/save');
        console.log(response.data);
        const path = response.data.path
        console.log(path);
        const { default: Component } = await import(`./${path}`);
        setComponent(<Component />);
    }

    // const handleDropdownChange = async (event) => {
    //     const option = event.target.value;
    //     setSelectedOption(option);
    //     if (option == 'Newsample') {
    //         const response = await axios.get('https://d11026ab-87a0-49a3-be2c-f8a6514d515c.mock.pstmn.io/save');
    //         console.log(response.data);
    //         const path = response.data.path
    //         console.log("response" + path);

    //         const { default: Component } = await import(`./${path}`);
    //         setComponent(<Component />);
           

    //     }
    //     else {
    //         const response = await axios.get('https://94d5b273-e8c7-45e7-be0b-5d48468e60c8.mock.pstmn.io/cancel');
    //         console.log(response.data);
    //         const path = response.data.path
    //         console.log("response" + path);
    //         const { default: Component } = await import(`./${path}`);
    //         setComponent(<Component />);
    //     }

      
    // };

    const handleDrop = async (event) =>{
        const option = event.target.value;
        setSelectedOption(option);
    const myObject = array.find(obj => obj.selectedOption === option);
    // console.log(myObject);
            const path = myObject.path
            // console.log(path);
            const { default: Component } = await import(`./${path}`);
            setComponent(<Component />);






    }


    /// Page Rendering Area

    const navigate = useNavigate();




    const handleDropdown = (event) =>{
        const option = event.target.value;
        setSelectedOption(option);
    }
    const handleNextClick = async () => {
        console.log("clicked");
        if (selectedOption === "Newsample") {
            const response = await axios.get('https://d11026ab-87a0-49a3-be2c-f8a6514d515c.mock.pstmn.io/save');
            console.log(response.data);
            const path = response.data.path
            console.log("response" + path);
            navigate(`./${path}`);
            // navigate(`./${path}`, { replace: true })
          // Render page for option 1
        } else if (selectedOption === "save") {
            const response = await axios.get('https://94d5b273-e8c7-45e7-be0b-5d48468e60c8.mock.pstmn.io/cancel');
            console.log(response.data);
            const path = response.data.path
            console.log("response" + path);
            navigate(`./${path}`);

          // Render page for option 2
        }
      };



    return (
        <div className="app-wrapper mt-4">

            <div className="row gx-2 gy-2">
                <div className="col-12 mb-3">
                    <h5>Home page </h5>
                    <h5>Manager</h5>
                    <h5>Employee</h5>

                </div>

            </div>


            <button type="button" onClick={handleApi} className="next-pre-btn-secondary mrg-r-3">Cancel</button>

            <div>
                <select onChange={handleDrop}>
                    <option value="">Select an option</option>
                    <option value="Newsample">Cancel</option>
                    <option value="save">Save</option>
                </select>

                {selectedOption && responseData && (
                    <div>
                        {/* Render your dynamic components based on the response data */}
                    </div>
                )}
            </div>
            
            {Component}
            {/* {responseData} */}
            <div>
                <select onChange={handleDropdown} >
                    <option value="">Select an option</option>
                    <option value="Newsample">Cancel</option>
                    <option value="save">Save</option>
                </select>

              
            </div>


            <button type="button"  onClick = {handleNextClick}className="next-pre-btn-secondary mrg-r-3">NEXT</button>


        </div>




    )
}
