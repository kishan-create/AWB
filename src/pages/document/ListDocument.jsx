import React from "react";

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

import TemplateCol from "./TemplateCol";
import DocumentHeader from "./Includes/DocumentHeader";
const {
  descendingComparator,
  getComparator,
  stableSort,
  EnhancedTableToolbar,
} = Tabledata();

const { rows, tableheader } = TemplateCol();

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

export default function ListDocument() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setDocumentrows] = useState([]);

  useEffect(() => {
    getDocumentlists();
  }, []);

  const getDocumentlists = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_SERVICE_URL + "/docgeneration"
    );
    const data = await response.json();
    setDocumentrows(data);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.templateId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, templateId) => {
    const selectedIndex = selected.indexOf(templateId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, templateId);
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

  const isSelected = (templateId) => selected.indexOf(templateId) !== -1;

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
      <DocumentHeader />

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
                          <h4 class="add-headd-sub1 fl-left">Document Template</h4>
                          <Link to="/addDocument-wizard">
                            <button
                              type="button"
                              class="next-pre-btn mrg-r-3 fl-right"
                            >
                              + Add Template
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
                                      row.templateId
                                    );
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                      <React.Fragment key={row.templateId}>
                                        <TableRow>
                                          <TableCell padding="checkbox">
                                            <div className="form-check"></div>
                                          </TableCell>

                                          <TableCell>
                                            {row.templateName}
                                          </TableCell>

                                      
                                          <TableCell>
                                            {row.templateCode}
                                          </TableCell>

                                          <TableCell>
                                            {row.templateDec}
                                          </TableCell>

                                          <TableCell>
                                            {row.filter1}
                                          </TableCell>

                                          <TableCell>
                                            {row.filter2}
                                          </TableCell>

                                          <TableCell>
                                            <Link
                                              to={{
                                               
                                                pathname: `/listdocument/${row.templateId}`,

                                                data: row.templateId, // your data array of objects
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
