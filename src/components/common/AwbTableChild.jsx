import * as React from "react";
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

import Paper from "@mui/material/Paper";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";
import "../../pages/users/userslist.scss";

import { Link } from "react-router-dom";
import AwbTableFunctions from "../../functions/AwbTableFunctions";
import Tabledata from "../../components/common/Tabledata";
import axios from "axios";
import swal from "sweetalert";
import EditMultipleAddress from "../../pages/agents/EditMultipleAddressAgent";

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
    headercells,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const emptyTableCell = <TableCell></TableCell>;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <div className="form-check"></div>
        </TableCell>

        {headercells.map((column, cid) =>
          column.isFieldDisplay == "N" ? (
            ""
          ) : (
            <TableCell key={cid}>{column.displayName}</TableCell>
          )
        )}
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

export default function AwbTableChild(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { rows, columns, getRows,getAgencyAddress } = AwbTableFunctions(props);
  const [adressData, setAddressData] = React.useState([]);
  const [listadd, SetListadd] = React.useState([]);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
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
  const getData = (data) => {
    setAddressData(data);
  };
  const getAddressDataLatest=(listaddress) =>
  {
    SetListadd(listaddress);
  }
 
 
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  //Delete a user
  const Rowdelete = async (e, id) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
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
        axios.delete(props.baseURL + `/${props.tableRow}/${id}`).then((res) => {
          getRows();
          swal({
            title: "Done!",
            text: `${props.displayName} is deleted successfully`,
            icon: "success",
            timer: 2000,
            button: false,
          });
        });
      }
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />

        <h4 class="add-headd-sub1 fl-left">{props.displayName}</h4>
        {(() => {
          if (props.displayName === "Address") {
            return (
                <EditMultipleAddress
                agencyID = {props.paramid}
                  addressData={getData}
                  latestAddress={getAddressDataLatest}
                  method={getRows}
                />
            );
          } else {
            return (
              <Link to="">
                <button type="button" class="next-pre-btn mrg-r-3 fl-right">
                  + Add {props.displayName}
                </button>
              </Link>
            );
          }
        })()}

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
              headercells={columns}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <React.Fragment key={index}>
                      <TableRow>
                        {columns.map((column, ckey) =>
                          column.isFieldDisplay == "N" ? (
                            <TableCell></TableCell>
                          ) : (
                            <TableCell key={ckey}>
                              {row[column.fieldName]}
                            </TableCell>
                          )
                        )}
                        <TableCell>
                          <Link
                            to={{
                              pathname: `/edit${props.tableRow}/${
                                row[props.id]
                              }`,

                              data: row[props.id], // your data array of objects
                            }}
                          >
                            <EditIcon />
                          </Link>
                          <Link
                            onClick={(e) => {
                              Rowdelete(e, row[props.id]);
                            }}
                          >
                            <DeleteIcon />
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
  );
}
