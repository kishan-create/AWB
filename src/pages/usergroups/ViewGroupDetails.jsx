import React, { useState, useEffect } from "react";
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
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Grouphooks from "./Grouphooks";
import Userhooks from "../users/functions/Userhooks";
import AddUserstogroup from "../users/AddUserstogroup";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import swal from "sweetalert";
import Groupheader from "./includes/Groupheader";
import Tabledata from "../../components/common/Tabledata";
import GroupUserFunction from "./functions/GroupUserFunction";
import { useParams } from "react-router-dom";
const { descendingComparator, getComparator, stableSort } = Tabledata();

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
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all users",
            }}
          />
        </TableCell>
        <TableCell>User Name</TableCell>
        <TableCell>User FullName</TableCell>
        <TableCell>User Email</TableCell>
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

function EnhancedTableToolbar(props) {
  let { numSelected } = props;

  const data = [props.selectRow];

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
        >
          List Users
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title=" Remove User from User group">
          <IconButton
            onClick={(e) => {
                DeleteUsers(e, data, props.getGroupID, props.resetCheckbox);
            }}
          >
            <DeleteIcon />
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

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// const DeleteUsers = async (e, data, groupID, reseMethod) => {
//   e.preventDefault();
//   let dataID = data[0];

//   const thisclickrow = e.currentTarget;

//   const response = await axios
//     .delete(
//       process.env.REACT_APP_API_ADMIN_URL +
//         `/usergroup/${groupID}/groupmembers`,
//       { data: dataID }
//     )
//     .then((response) => {
//       // thisclickrow.closest("tr").remove();
//       if (response.status === 200) {
//         reseMethod();
//         swal({
//           title: "",
//           text: " Record deleted successfully",
//           icon: "success",
//           button: "OK",
//         });
//       }
//     });
// };

const DeleteUsers = async (e, data, groupID, reseMethod) => {
  e.preventDefault();
  let dataID = data[0];
  const thisclickrow = e.currentTarget;


  swal({
    title: "Are you sure",
    text: "You want to delete this Entry?",
    type: "warning",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2e4153",
    confirmButtonText: "Yes",
    closeOnConfirm: false,
    buttons: true,
    buttons: ["No", "Yes"],
  }).then((willDelete) => {
    if (willDelete) {
      const response =  axios
    .delete(
      process.env.REACT_APP_API_ADMIN_URL +
        `/usergroup/${groupID}/groupmembers`,
      { data: dataID }
    )
    .then((response) => {
      // thisclickrow.closest("tr").remove();
      if (response.status === 200) {
        reseMethod();
        swal({
          title: "",
          text: " Record deleted successfully",
          icon: "success",
          button: "OK",
        });
      }
    });
    }
  });
};
export default function ViewGroupDetails(props) {
  const { id } = useParams();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rowsCheck, SetRowsCheck] = React.useState([]);
  const [active, setActive] = React.useState("First");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  useEffect(() => {
    SetRowsCheck(selected);
  }, [selected]);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.userId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const { rows,getUsers } = GroupUserFunction(id);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleClickAddView = () => {
    props.method(false);
  };
  const resetCheckbox = () => {
    setSelected([]);
    getUsers();
  };
  return (
    <Box sx={{ width: "100%" }} >
      <button
        type="button"
        class="next-pre-btn mrg-r-3 fl-right"
        onClick={handleClickAddView}
      >
        Add Users
      </button>

      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          selectRow={selected}
          getGroupID={id}
          resetCheckbox={resetCheckbox}
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
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.userId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.userId)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox" >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                       
                      >
                        {row.userName}
                      </TableCell>
                      <TableCell align="left">{row.userFullName}</TableCell>
                      <TableCell align="left">{row.userEmail}</TableCell>
                    </TableRow>
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
  );
}
