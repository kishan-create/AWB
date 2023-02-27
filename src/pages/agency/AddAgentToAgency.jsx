import * as React from "react";
import { useState, useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import swal from "sweetalert";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";

import Tabledata from "../../components/common/Tabledata";

import axios from "axios";
import AgentsData from "./AgentsData";
const { descendingComparator, getComparator, stableSort } = Tabledata();

const { tableheader } = AgentsData();
function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const data = [props.selectedRow];

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Add">
          <IconButton>
            {/* <link to ><AddIcon /></link>  */}
            {/* <AddIcon onClick ={(e) => AddAgent(e,data)} /> */}
            {/* <AddIcon onClick ={} /> */}

            <Link
              to={{
                // pathname: `/AgentTabs/${row.agencyId}`,
                pathname: `/addagency`,

                // your data array of objects
              }}
            >
              <AddIcon />
            </Link>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

const AddAgent = async (e, data) => {
  <Link to="/">here</Link>;

  //  const response = axios.post(
  //     "http://dev-cok-alb-admin-01-301132241.us-east-1.elb.amazonaws.com/admin-svc/user",
  //     values
  //   );
  //   response.then(function (res) {
  //     if (res.data.status === 200) {
  //       swal({
  //         title: "Good job!",
  //         text: "Usergroup Details added successfully",
  //         icon: "success",
  //         button: "ok",
  //       });
  //     }
  //   });

  // http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agency/102/agents
  if (data.status == 200) {
    swal({
      title: "Good job!",
      text: "User Added successfully",
      icon: "success",
      button: "ok",
    });
  }
};

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
    <>
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
      <></>
    </>
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

export default function AddAgentToAgency(props) {
  const params = useParams();

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setAgentrows] = useState([]);
  useEffect(() => {
    getAgents(params.id);
  }, []);

  const getAgents = async (id) => {
//     const response = await fetch(
// // `http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agency/${}`
//       "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agency/agents?agencyid=102"
//     );


    // const response = await fetch(
    //   `http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc/agency/${id}`
    // );
    // const data = await response.json();
    // setAgentrows(data);
  

  };

  console.log(rows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.producerId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, producerId) => {
    const selectedIndex = selected.indexOf(producerId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, producerId);
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

  const isSelected = (producerId) => selected.indexOf(producerId) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleClickViewPage = () => {
    props.method(false);
  };

  return (
    <>
      <>
        <h1>List Page</h1>

        <button onClick={handleClickViewPage}>View</button>

        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar
              numSelected={selected.length}
              selectedRow={selected}
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
                  onChange={handleClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      console.log(row);
                      const isItemSelected = isSelected(row.producerId);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <React.Fragment key={row.producerId}>
                          <TableRow
                            hover
                            onClick={(event) =>
                              handleClick(event, row.producerId)
                            }
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            selected={isItemSelected}
                          >
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

                            <TableCell>{row.producerId}</TableCell>

                            <TableCell>{row.producerName}</TableCell>

                            <TableCell>{row.producerEmail}</TableCell>

                            <TableCell>{row.producerPhone}</TableCell>

                            <TableCell>{row.agencyId}</TableCell>

                            <TableCell>{row.billingAddressId}</TableCell>

                            <TableCell>{row.permanentAddressId}</TableCell>

                            <TableCell>{row.shippingAddressId}</TableCell>

                            <TableCell>{row.workAddressId}</TableCell>
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
  );
}
