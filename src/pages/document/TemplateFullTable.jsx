import * as React from "react";
import { useRef,useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import PreviewIcon from "@mui/icons-material/Preview";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import insurnnew from "../../images/insurancenew.svg";
import ReactQuill from "react-quill";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";

import Tabledata from "../../components/common/Tabledata";
import axios from "axios";

import { useParams } from 'react-router-dom';
import { LoyaltyRounded } from "@mui/icons-material";

import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from '@mui/icons-material/Download';
import swal from "sweetalert";
import {useNavigate} from 'react-router-dom';
import Multiplefileupload from './../../components/common/Multiplefileupload'
import { saveAs } from 'file-saver';
import TemplateAddwizard from "../document/functions/Addwizard"





const {
  descendingComparator,
  getComparator,
  stableSort,
  EnhancedTableToolbar,
} = Tabledata();


function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

 
  return (
    <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <div className="form-check"></div>
      </TableCell>
      <TableCell>Template Name</TableCell>
      <TableCell>Template Descrioption</TableCell>
  
      <TableCell></TableCell>

    </TableRow>
  </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function TemplateFullTable({id,previousID}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setAgentrows] = useState([]);
  const [addressstate, setAddressState] = useState([]);
  const [responseArray, setResponseArray] = useState([]);
  const[data,SetData]=useState([]);

  const fileInputRef = useRef();

  const navigate = useNavigate();
  const [seen,setSeen] = useState([]);
  const [isHalfShown, setIsHalfShown] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");



  const [selectedFile, setSelectedFile] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [content, setContent] = useState("");

  const [showtext, setShowText] = useState(true);
  const [showfile, setShowFile] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {  fileData } = TemplateAddwizard(selectedOption, content,selectedFile);


const params=useParams();


  useEffect(() => {
    getDocumentAddress(params.id);
    HideShowDivs(selectedOption);

  }, [selectedOption]);

  const test = params.id 

  const getDocumentAddress = async (id) => {
    const response = await fetch(
       
        process.env.REACT_APP_API_SERVICE_URL+`/document/orgintype/DOCTEMPLATE/orgintypeid/${id}`
           );
    const data = await response.json();
  

    setAgentrows(data)

  };
  const HideShowDivs = async (seloptions) => {
    if (seloptions == "SMS" || seloptions == "EMAIL") {
      setShowText(true);
      setShowFile(false);
    } else {
      setShowText(false);
      setShowFile(true);
    }
  };
  const handleChangeFileUploads = (data) => {
    setSeen(data)
//    window.location.reload()
};
const handleButtonClick = () => {
  setIsHalfShown(!isHalfShown);
};

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.docId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelect = async (e) => {
    setSelectedOption(e.target.value);
    HideShowDivs(selectedOption);
  };

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleChange = (value) => {
    setContent(value);
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



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (docId) => selected.indexOf(docId) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  //Delete a user
  const deletedocument = async (e, id, test) => {
    e.preventDefault();
    const thisclickrow = e.currentTarget;

    const response = await axios
      .delete(process.env.REACT_APP_API_SERVICE_URL + `/document/${id}`)
      .then((response) => {
        // thisclickrow.closest("tr").remove();
        if (response.status === 200) {
          getDocumentAddress(test);
          swal({
            title: "",
            text: " Record deleted successfully",
            icon: "success",
            button: "ok",
          });
        }
      });
  };

  const uploaddocument = async (id, filename) => {
    const response = await axios
      .get(process.env.REACT_APP_API_SERVICE_URL + `/document/download/${id}`)
      .then(response => {
const blob = new Blob([response.data], { type: 'application/octet-stream' }); 
saveAs(blob, filename);
        
    })
  
   
  };




const handleSubmitFile = (e) => {
    e.preventDefault();

    console.log("content", content);

    setSubmitted(true);
    onSubmitfileform();
  };
  const onSubmitfileform = (e,previousID) => {
console.log(previousID);
   let formData = new FormData();
   let contentfile=selectedOption+"."+selectedOption
   

    if (content != "") {
      formData.append(
        "documents",
        new Blob([content], { type: "text/plain" }),
        contentfile
      );
    } else {
      formData.append("documents", selectedFile);
    }
    formData.append("docOrginTypeId", test);
    formData.append("docOrginType", "DOCTEMPLATE");
    formData.append("docCategoryId", 7);
    formData.append("docSubCategoryId", 9);

    const response = axios.post(
      process.env.REACT_APP_API_SERVICE_URL + "/document",
      formData
    )
    .then((response) => {
    response.then(function (res) {
      if (res.data.status === 200) {
        swal({
          title: "",
          text: "Usergroup Details added successfully",
          icon: "success",
          button: "ok",
        });
      }
    });
    });
  };


  return (
    
    <div>

     
    

      <div className="app-wrapper mt-4">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">

            <div
              className="app-card alert alert-dismissible p-0 shadow-sm mb-4"
              role="alert"
            >
              <div className="inner">
                <div className="table-responsive">
             
                  <>
                    <>
                      <Box sx={{ width: "100%" }}>
                        <Paper sx={{ width: "100%", mb: 2 }}>
                          <EnhancedTableToolbar numSelected={selected.length} />
                          <h4 class="add-headd-sub1 fl-left">Documents</h4>
                          <button onClick={handleButtonClick}
                              type="button"
                              class="next-pre-btn mrg-r-3 fl-right"
                            >
                              + Add Documents
                            </button>
               
                          
                          <TableContainer>
                            <Table
                              sx={{ minWidth: 750 }}
                              aria-labelledby="tableTitle"
                              size={dense ? "small" : "medium"}
                            >
                              <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                              />
                              <TableBody>
                             

                                {stableSort(rows, getComparator(order, orderBy))
                                  .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                    
                                  )
                                  .map((row, index) => {
                                    const isItemSelected = isSelected(
                                      row.docId


                                    );
                                    
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (

                                        
                                      <React.Fragment key={row.docId}>
                                        <TableRow>
                                         


                                        <TableCell padding="checkbox">
                       <div className='form-check'>
                        
                        </div>
                      </TableCell>
                      


                    
                                        

                                          <TableCell>
                                          {row.orginalFileName}

                                          </TableCell>
                                          <TableCell>{row.fileSizeKb}</TableCell>

                                          


                                          <TableCell>
                                          <Link
                            onClick={(e) => {
                              if (
                                window.confirm(
                                  "Are you sure you wish to delete this item?"
                                )
                              )
                              deletedocument(e, row.docId, test);
                            }}
                          >
                            <DeleteIcon />
                          </Link>
                          <Link
                         onClick={() => {
                             
                          uploaddocument( row.docId, row.orginalFileName);
                      }}
                          >
                            <DownloadIcon/>
                          </Link>
                                          
                                          </TableCell>
                                        </TableRow>
                                      </React.Fragment>
                                    );
                                  })}
                                {emptyRows > 0 && (
                                  <TableRow
                                    style={{
                                      height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                  >
                                    <TableCell colSpan={6} />
                                  </TableRow>
                                )}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                          />
                        </Paper>
                      </Box>
                    </>
                  </>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
      {isHalfShown ? (
        <div className="app-card-body p-2 p-lg-4">
        <div className="app-wrapper ">
  <div className="app-content pt-2 p-md-2">
  <div>
        <form
          noValidate
          encType="multipart/form-data"
          onSubmit={handleSubmitFile}
        >
          <div className=" ">
            <div className=" " role="alert">
              <div class="inner p-15">
            

                <div className="page-grid-2">
                  <div className="">
                    <div>
                      <label htmlFor="options" className="form-label">
                        Select Type of Document :<span className="red"> *</span>
                      </label>
                      <div className="input-group mb-3">
                        <select
                          id="options"
                          className="form-control"
                          value={selectedOption}
                          onChange={handleSelect}
                        >
                          <option value="DOCX">DOCX</option>

                          <option value="SMS">SMS</option>
                          <option value="EMAIL"> EMAIL </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      {showfile && (
                        <div className="file-input">
                          <label for="file" class="btn choosefile-attach-txt">
                            <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              {" "}
                              <g>
                                {" "}
                                <path fill="none" d="M0 0h24v24H0z" />{" "}
                                <path d="M14.828 7.757l-5.656 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 1 0 12 4.929l-5.657 5.657a5 5 0 1 0 7.071 7.07L19.071 12l1.414 1.414-5.657 5.657a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 0 1 7.07 7.07L12 16.244A3 3 0 1 1 7.757 12l5.657-5.657 1.414 1.414z" />{" "}
                              </g>{" "}
                            </svg>
                            Select Document file:
                            <input
                              type="file"
                              accept=".dotx"
                              onChange={handleFileInputChange}
                            />
                          </label>
                        </div>
                      )}
                    </div>

                    <div>
                      {showtext && (
                        <div>
                          <ReactQuill value={content} onChange={handleChange} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <img className="opc-9" src={insurnnew} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-l-15 m-b-50 ">
            <button
              className="next-pre-btn  mrg-r-3"
              type="button"
          
            >
              Back
            </button>
            <button className="next-pre-btn  mrg-r-3" type="submit">
              Save
            </button>
            <button type="button" className="next-pre-btn-secondary mrg-r-3">
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
  </div>
  <div className="app-card-body p-2 p-lg-4">
    <div className="col-12 mt-4">
      
      <button  onClick={() => {
                     
                    //  submitFiles( test);

                 }} type="button" className="next-pre-btn-secondary mrg-r-3">
        Save
      </button>

      
      

      <Link to="/listdocument">
        <button type="button" className="next-pre-btn-secondary mrg-r-3">
          Cancel
                </button>
      </Link>
    </div>



  </div>
</div>

  </div>
      ): null}
      

    </div>
  );
}
