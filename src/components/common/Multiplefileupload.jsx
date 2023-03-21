import React, { useRef, useState, useEffect } from "react";
import { faFileAlt, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import swal from 'sweetalert';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import axios from "axios";
export default function Multiplefileupload(props)
{
    
    const fileInputRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [validFiles, setValidFiles] = useState([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {

      let filteredArr = selectedFiles.reduce((acc, current) => {
        const x = acc.find((item) => item.name === current.name);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      setValidFiles([...filteredArr]);
     props.handleChangeFileUploads(selectedFiles);
    }, [selectedFiles]);
    
    const filesSelected = (event) => {
      const file = event.target.files[0];

     
      if (file.size > 1024 * 1024 *10) {
        swal(" File size must be less than 10MB!", {
          icon: "warning",
        });
        // alert('File size must be less than 10MB');
        event.target.value = ''; // clear file input
      } else {
        const files = fileInputRef.current.files;
        handleFiles(files);
      }
     





      // if (files.length) {
      //   let filteredArray = [];
      //   for (var index = 0; index < files.length; index++) {
      //     let exists = false;
      //     for (var i = 0; i < selectedFiles.length; i++) {
      //       if (selectedFiles[i].name === files[index].name) {
      //         exists = true;
      //         break;
      //       }
      //     }
      //     if (!exists) {
      //       filteredArray.push(files[index]);
      //     }
      //   }
      //   handleFiles(filteredArray);
  
      // }
      
    };
  

    const handleFiles = (files) => {
      for (let i = 0; i < files.length; i++) {
        if (validateFile(files[i])) {
          setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        } else {
          files[i]["invalid"] = true;
          setSelectedFiles((prevArray) => [...prevArray, files[i]]);
          setErrorMessage("File type not permitted");
          setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
        }
      }

    };
  
    const validateFile = (file) => {
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/x-icon",
        "application/pdf",
      ];
      if (validTypes.indexOf(file.type) === -1) {
        return false;
      }
  
      return true;
    };
  
    const downloadTxtFile = () => {
      const file = new Blob(validFiles, {type: 'pdf'});
      const element = document.createElement("a");
      element.href = URL.createObjectURL(file);
      element.download = "Sample-" + Date.now() + ".pdf";
      document.body.appendChild(element); 
      element.click();
  }
  
    const removeFile = (index) => {
     // const index = validFiles.findIndex((e) => e.name === name);
      //const index2 = selectedFiles.findIndex((e) => e.name === name);
     // const index3 = unsupportedFiles.findIndex((e) => e.name === name);
      validFiles.splice(index, 1);
      //selectedFiles.splicw
     // selectedFiles.splice(index2, 1);
      setValidFiles([...validFiles]);
      setSelectedFiles([...validFiles]);

      // if (index3 !== -1) {
      //   unsupportedFiles.splice(index3, 1);
      //   setUnsupportedFiles([...unsupportedFiles]);
      // }
    };



//     const removeFile = (index) => {
   

//       const rows = [...validFiles];
//       if (index !== -1){
//         rows.splice(index, 1);
//         setValidFiles(rows);
//       }
// console.log(rows);
// console.log(validFiles);
    
//     };
// console.log(validFiles);


    // const removeFile=(rowId) =>{
    //   const rows = [...validFiles];

    //   setValidFiles(validFiles => {
    //     const updatedRows = validFiles.rows.filter(row => row.name !== rowId);
    //     return { rows: updatedRows };
    //   })
    // };


    console.log(validFiles);
    console.log(selectedFiles);

  

    const deleteFile = (index) =>{
        swal({
            title: "Are you sure to delete ??",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            removeFile(index);
            swal(" Your  file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your file is safe!");
          }
        });
    }

  
    return (
      <div>
        <div className="content">
          <>
            <div className="container">
              <div>
              <div className="file-input"> 
                  <label for="file" class="btn choosefile-attach-txt">
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M14.828 7.757l-5.656 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 1 0 12 4.929l-5.657 5.657a5 5 0 1 0 7.071 7.07L19.071 12l1.414 1.414-5.657 5.657a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 0 1 7.07 7.07L12 16.244A3 3 0 1 1 7.757 12l5.657-5.657 1.414 1.414z"/> </g> </svg>  

                    Add Documents </label>
                <input ref={fileInputRef} type="file"  id="file"  className="file opacity-0"  onChange={filesSelected}></input>
         
                </div>
              </div>
              <div className="uplaod-table-box">
              
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Document</TableCell>
                          <TableCell align="right">Actions</TableCell>
                         
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {validFiles.map((row, index) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right" className="p-l-1" >
                            <div>  
                                        {" "}
                                        <a onClick={(e) => deleteFile(index)}>
                                        <DeleteIcon/>
                                        </a>
                                      
                                      </div>
                            </TableCell>
                  
                          </TableRow>
                        ))}
                         <TableRow >
                            <TableCell component="th" scope="row">
                            <div className="td-sample-txt1">.</div>
                            </TableCell>
                            <TableCell align="right"  className="p-l-1"> 
                                {/* <DownloadIcon/>  */}
                                <DeleteIcon/> 
                            </TableCell> 
                          </TableRow>
                          <TableRow >
                            <TableCell component="th" scope="row">
                            <div className="td-sample-txt1">.</div>
                            </TableCell>
                            <TableCell align="right"  className="p-l-1"> 
                                {/* <DownloadIcon/>  */}
                                <DeleteIcon/> 
                            </TableCell> 
                          </TableRow>
                          <TableRow >
                            <TableCell component="th" scope="row">
                            <div className="td-sample-txt1">.</div>
                            </TableCell>
                            <TableCell align="right"  className="p-l-1"> 
                                {/* <DownloadIcon/>  */}
                                <DeleteIcon/> 
                            </TableCell> 
                          </TableRow>
                          <TableRow >
                            <TableCell component="th" scope="row">
                            <div className="td-sample-txt1">.</div>
                            </TableCell>
                            <TableCell align="right"  className="p-l-1"> 
                                {/* <DownloadIcon/>  */}
                                <DeleteIcon/> 
                            </TableCell> 
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  
  </div>
            </div>
          </>
        </div>
      </div>
    );
}   