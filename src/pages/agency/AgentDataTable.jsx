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
import Agency from "./Agency";
import axios from "axios";
const {
  descendingComparator,
  getComparator,
  stableSort,
  EnhancedTableToolbar,
} = Tabledata();

const { rows, tableheader } = Agency();

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
          <div className="form-check">
            <Checkbox
              color="primary"
              className="form-check-input"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </div>
        </TableCell>
        {tableheader.map((tablecelss) => (
          <TableCell>{tablecelss.headerName}</TableCell>
        ))}
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

export default function AgentDataTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setAgentrows] = useState([]);

  useEffect(() => {
    getAgencylists();
  }, []);

  const getAgencylists = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_SERVICE_URL + "/agency"
    );
    const data = await response.json();
    setAgentrows(data);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.agencyId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, agencyId) => {
    const selectedIndex = selected.indexOf(agencyId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, agencyId);
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

  const isSelected = (agencyId) => selected.indexOf(agencyId) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  //Delete a user
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

  return (
    <div>
      <h1>Agency List</h1>
      <div className="app-status justify-content-between align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="app-card-actions1">
                <div className="dropdown">
                  <ul
                    className="dropdown-menu p-3"
                    data-popper-placement="bottom-start"
                    style={{
                      position: "absolute",
                      inset: "0px auto auto 0px",
                      margin: "0px",
                      transform: "translate(0px, 26px)",
                    }}
                  >
                    <form className="app-search-form">
                      {" "}
                      <input
                        type="text"
                        placeholder="Search by Quote id, name, location..."
                        name="search"
                        className="form-control search-input"
                      />
                      <button
                        type="submit"
                        className="btn search-btn btn-primary"
                        value="Search"
                      >
                        <svg
                          className="svg-inline--fa fa-magnifying-glass"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="magnifying-glass"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg
                        >
                          <path
                            fill="currentColor"
                            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                          />
                        </svg>
                        {/* <i class="fas fa-search"></i> Font Awesome fontawesome.com */}
                      </button>{" "}
                    </form>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        State
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Status
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Quote ID
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Insured Name
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Coverage
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Program type
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Property
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Quote Assigned To
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Comments
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <input className="form-check-input" type="checkbox" />
                        Submission Date &amp; Time
                      </span>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Clear
                      </a>
                    </li>
                  </ul>
                </div>
                {/*//dropdown*/}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                          <h4 class="add-headd-sub1 fl-left">List Agency</h4>
                          <Link to="/addagency">
                            <button
                              type="button"
                              class="btn app-btn-primary fl-right"
                            >
                              + Add Agency
                            </button>
                          </Link>
                          <Link to="/agents">
                            <button
                              type="button"
                              class="btn app-btn-primary fl-right"
                            >
                              + Add Agent
                            </button>
                          </Link>
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
                                      row.agencyId
                                    );
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                      <React.Fragment key={row.agencyId}>
                                        <TableRow>
                                          <TableCell padding="checkbox">
                                            <div className="form-check">
                                              <Checkbox
                                                color="primary"
                                                className="form-check-input"
                                                checked={isItemSelected}
                                                inputProps={{
                                                  "aria-labelledby": labelId,
                                                }}
                                              />
                                            </div>
                                          </TableCell>

                                          <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                          >
                                            {row.agencyId}
                                          </TableCell>

                                          <TableCell>
                                            {row.agencyName}
                                          </TableCell>

                                          <TableCell>{row.agencyNpn}</TableCell>

                                          <TableCell>
                                            {row.agencyFbin}
                                          </TableCell>

                                          <TableCell>
                                            {row.agencyType}
                                          </TableCell>

                                          <TableCell>
                                            <Link
                                              to={{
                                                // pathname: `/AgentTabs/${row.agencyId}`,
                                                pathname: `/ListAgentheaddata/${row.agencyId}`,

                                                data: row.agencyId, // your data array of objects
                                              }}
                                            >
                                              <PreviewIcon />
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
