import * as React from "react";
import { useRef, useState, useEffect } from "react";
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

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";

import Tabledata from "../../components/common/Tabledata";
import axios from "axios";
import UserHeader from './includes/AgencyHeader';
import AgencyHeader from './includes/AgencyHeader';
import { useParams } from 'react-router-dom';
import { LoyaltyRounded } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from '@mui/icons-material/Download';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import Multiplefileupload from './../../components/common/Multiplefileupload'
import { saveAs } from 'file-saver';
import FilePopUp from '../agency/FilePopUp'





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
        <TableCell>File Name</TableCell>
        <TableCell>File Size</TableCell>

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

export default function DocumentFullTableAgent(id) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setAgentrows] = useState([]);
  const [addressstate, setAddressState] = useState([]);
  const [responseArray, setResponseArray] = useState([]);
  const [data, SetData] = useState([]);

  const fileInputRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();
  const [seen, setSeen] = useState([]);
  const [isHalfShown, setIsHalfShown] = useState(false);




  const params = useParams();


  useEffect(() => {
    getAgencyAddress(params.id);
  }, []);

  const test = params.id

  const getAgencyAddress = async (id) => {
    const response = await fetch(
      process.env.REACT_APP_API_SERVICE_URL + `/document/orgintype/AGENT/orgintypeid/${id}`

    );
    const data = await response.json();


    setAgentrows(data)




  };
  const handleChangeFileUploads = (data) => {
    setSeen(data)
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

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const deletedocument = async (e, id, test) => {
    e.preventDefault();
    const thisclickrow = e.currentTarget;
    swal({
      title: "Are you sure ??",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const response = axios
            .delete(process.env.REACT_APP_API_SERVICE_URL + `/document/${id}`)
            .then((response) => {
              if (response.status === 200) {
                getAgencyAddress(test);
                swal({
                  title: "",
                  text: " Record deleted successfully",
                  icon: "success",
                  button: "ok",
                });
              }
              setIsHalfShown(false);
            });
        }
        else {
          swal("Your file is safe!");
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


  const submitFiles = (test) => {
    let formData = new FormData();

    seen.map((file) => {
      formData.append("documents", file);
    });
    formData.append("docOrginTypeId", test);
    formData.append("docOrginType", "AGENT");
    formData.append("docCategoryId", 7);
    formData.append("docSubCategoryId", 9);

    const response = axios
      .post(process.env.REACT_APP_API_SERVICE_URL + "/document", formData)
      .then((response) => {
        if (response.status === 200) {

          swal({
            title: "",
            text: "Document Added successfully",
            icon: "success",
            button: "ok",
          });
        }
        getAgencyAddress(test);



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

                                                deletedocument(e, row.docId, test);
                                              }}
                                            >
                                              <DeleteIcon />
                                            </Link>
                                            <Link
                                              onClick={() => {

                                                uploaddocument(row.docId, row.orginalFileName);
                                              }}
                                            >
                                              <DownloadIcon />
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
              <div className="container-fluid">
                <div
                  className="app-card alert alert-dismissible shadow-sm mb-4"
                  role="alert"
                >
                  <div className="inner">
                    <div className="app-card-body p-2 p-lg-4">
                      <div className="row gx-2 gy-2 btn-link-brd add-btn-mob">


                        <div className="app-card-body p-2 p-lg-4">
                          <h4 className="add-headd-sub">Upload Files</h4>

                          <div className="page-grid-2 p-tb-50">
                            <div className="choose-file-sty">
                              <Multiplefileupload handleChangeFileUploads={handleChangeFileUploads} />
                            </div>
                            <div>
                              <div className="upload-righ-icon"></div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-card-body p-2 p-lg-4">
              <div className="col-12 mt-4">

                <button onClick={() => {

                  submitFiles(test);
                }} type="button" className="next-pre-btn mrg-r-3">
                  Save
      </button>






                <Link to="/listagent">
                  <button type="button" className="next-pre-btn-secondary mrg-r-3">
                    Cancel
                </button>
                </Link>
              </div>



            </div>
          </div>

        </div>
      ) : null}


    </div>
  );
}
