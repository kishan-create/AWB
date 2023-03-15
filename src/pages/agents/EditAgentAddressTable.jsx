import * as React from "react";
import { useState, useEffect } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
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
import EditMultipleAddress from './EditMultipleAddressAgent'
import swal from "sweetalert";



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
      <TableCell>Address Type</TableCell>
      <TableCell>Address Line1</TableCell>
      <TableCell>Address Line2</TableCell>
      <TableCell>Country</TableCell>
      <TableCell>State</TableCell>
      <TableCell>County</TableCell>

      <TableCell>Zipcode</TableCell>



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

export default function EditAddressTable(id) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setAgentrows] = useState([]);
  const [addressstate, setAddressState] = useState([]);
  const [adressData, setAddressData] = useState([]);
  const [listadd, SetListadd] = useState([]);

const params=useParams();
const agencyID = params.id



  useEffect(() => {
    getAgencyAddress(params.id);
  }, []);

  const getAgencyAddress = async (id) => {
    const response = await fetch(
      process.env.REACT_APP_API_SERVICE_URL + `/produceraddr/producer/${id}/address`
    );
    const data = await response.json();
    
    getAgencyFullAddress(data);
  
  };


  const getAgencyFullAddress = async (ID) =>{
    
    fetch(process.env.REACT_APP_API_SERVICE_URL + `/addresses/details`, { method: 'POST',
     headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ID) 
    }) 
    .then(response => response.json()) .then(data => { 

      const filteredData = data.filter(obj => {
        const values = Object.values(obj);
        const isNotNull = values.every(val => val !== null);
        return isNotNull;
      });

      setAgentrows(filteredData)

       }) 

      .catch(error => { 
        console.error(error); });
     
     
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.addrId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, addrId) => {
    const selectedIndex = selected.indexOf(addrId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, addrId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
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

  const isSelected = (addrId) => selected.indexOf(addrId) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const deleteAgent = async (e, id) => {
    e.preventDefault();
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.delete(
      process.env.REACT_APP_API_SERVICE_URL + `/agents/${id}`
    );
    if (res.data.status == 200) {
      thisclickrow.closest("tr").remove();
      alert("User Deleted successfully");
    }
  };
  const getData = (data) => {
    setAddressData(data);
  };
  const getAddressDataLatest=(listaddress) =>
  {
    SetListadd(listaddress);
  }

  const country = [
    { name: "India" },
  { name: "Us" }
];

 const state = [
    { name: "Kerala" },
  { name: "Tamilnadu" },
];
  const addressType = [
    { name: "Work Address" },
  { name: "Billing Address"},
   { name: "Permenent Addrzess" },
    { name: "Shipping Address", },
  ];

  const county =[
    {name: "Ernamkulam"},
    {name:"Trissur"},

  ];

  const deleteAddress = async ( e,agencyID,id) => {
    
  
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
            .delete(process.env.REACT_APP_API_SERVICE_URL + `/produceraddr/producer/${id}/address/${agencyID}`)
            
            .then((response) => {
              if (response.status === 200) {
                getAgencyAddress(id);
                swal({
                  title: "",
                  text: " Address deleted successfully",
                  icon: "success",
                  button: "ok",
                });
              }
            });
        }
        else {
          swal("Your Address is safe!");
        }
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
                          <h4 class="add-headd-sub1 fl-left">Address</h4>

                          <EditMultipleAddress
                        agencyID = {agencyID}
                          addressData={getData}
                          latestAddress={getAddressDataLatest}
                          method={getAgencyAddress}
                        />
                          
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
                                      row.addrId


                                    );
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                      
                                      <React.Fragment key={row.addrId}>
                                        <TableRow>
                                         


                                        <TableCell padding="checkbox">
                       <div className='form-check'>
                        
                        </div>
                      </TableCell>
                      


                    
                                        

                                         
                      <TableCell>
                                            {addressType[row.addrType - 1].name}
                                          </TableCell>

                                          <TableCell>{row.addrLine1}</TableCell>
                                          <TableCell>{row.addrLine2}</TableCell>
                                          <TableCell>{country[row.countryId - 1].name}</TableCell>
                                          <TableCell>{state[row.stateId - 1].name}</TableCell>
                                          <TableCell>{county[row.countyId - 1].name}</TableCell>

                                          <TableCell>{row.zip}</TableCell>





                                       


                                          <TableCell>
                                          <Link
                                              onClick={(e) => {

                                                deleteAddress(e, row.addrId, agencyID);
                                              }}
                                            >
                                              <DeleteIcon />
                                            </Link>
                                            <Link
                                              to={{
                                                // pathname: `/AgentTabs/${row.agencyId}`,
                                                pathname: `/editagentaddress/${row.addrId+"_"+agencyID}`,

                                                data: row.addrId, // your data array of objects
                                              }}
                                            >
                                             <EditIcon />
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
    </div>
  );
}
