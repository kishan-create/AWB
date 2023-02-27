import React, { useRef, useState, useEffect } from "react";
import { faFileAlt, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteIcon from '@mui/icons-material/Delete';
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
    
    const filesSelected = () => {
      const files = fileInputRef.current.files;
      if (files.length) {
        let filteredArray = [];
        for (var index = 0; index < files.length; index++) {
          let exists = false;
          for (var i = 0; i < selectedFiles.length; i++) {
            if (selectedFiles[i].name === files[index].name) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            filteredArray.push(files[index]);
          }
        }
        handleFiles(filteredArray);
  
      }
      
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
  
    const removeFile = (name) => {
      const index = validFiles.findIndex((e) => e.name === name);
      const index2 = selectedFiles.findIndex((e) => e.name === name);
      const index3 = unsupportedFiles.findIndex((e) => e.name === name);
      validFiles.splice(index, 1);
      selectedFiles.splice(index2, 1);
      setValidFiles([...validFiles]);
      setSelectedFiles([...selectedFiles]);
      if (index3 !== -1) {
        unsupportedFiles.splice(index3, 1);
        setUnsupportedFiles([...unsupportedFiles]);
      }
    };

    const deleteFile = () =>{
        swal({
            title: "Are you sure ??",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            removeFile();
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
                
                <input
                  ref={fileInputRef}
                  type="file"
                  id="file"
                  className="file"
                  onChange={filesSelected}
                />
               <label htmlFor="file">Select file</label>
  
                </div>
              </div>
            
              {(() => {
                if (validFiles.length>0){
                  return(
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Document</TableCell>
                          <TableCell align="right">Actions</TableCell>
                         
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {validFiles.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">
                            <div>   <a onClick={() => downloadTxtFile()}>
                                        <FileDownloadIcon/>
                                        </a>
                                        {" "}
                                        <a onClick={(e) => deleteFile()}>
                                        <DeleteIcon/>
                                        </a>
                                      
                                      </div>
                            </TableCell>
                  
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  )
                }
              })()}
            </div>
          </>
        </div>
      </div>
    );
}   