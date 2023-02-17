import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox,{ checkboxClasses } from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import './userslist.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditUsers from './EditUsers';
import { Link } from "react-router-dom";
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import filter from '../../images/filter.svg';
function createData(state, status, quoteid, i_name,coverage,programtype) {
  return {
    state,
    status,
    quoteid,
    i_name,
    coverage,
    programtype
    
  };
}

const rows = [
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John','Cyber','Type A'),
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John ','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John ','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  
  createData('Create a Submission', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission1', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  createData('Create a Submission1', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  createData('Create a Submission1', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  createData('Create a Submission1', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  createData('Create a Submission1', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  createData('Create a Submission1', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  createData('Create a Submission1', 'Change the Status', 'GD125828282', 'John Sanders','Cyber','Type A'),
  
  
  
  
 
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'state',
    numeric: false,
    disablePadding: true,
    label: 'State',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'quoteid',
    numeric: true,
    disablePadding: false,
    label: 'QuoteID',
  },
  {
    id: 'i_name',
    numeric: true,
    disablePadding: false,
    label: 'Insured Name',
  },
  {
    id: 'coverage',
    numeric: true,
    disablePadding: false,
    label: 'Coverege',
  },
  {
    id: 'programtype',
    numeric: true,
    disablePadding: false,
    label: 'Program Type',
  }
 
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  
  return (
    <TableHead>
      <TableRow>
        
        <TableCell padding="checkbox">
        <div className='form-check'>
        <input className='form-check-input' type="checkbox" value="" id=""/>
            
          </div>
        </TableCell>
        
              <TableCell className='cell'>State<img src={filter} className="img_head" alt="Filter by State" title="Filter by State"/></TableCell>
              <TableCell>Status <img src={filter} className="img_head" alt="Filter by State" title="Filter by State"/></TableCell>
              <TableCell>Quote ID <img src={filter} className="img_head" alt="Filter by State" title="Filter by State"/></TableCell>
              <TableCell>Insured Name <img src={filter} className="img_head" alt="Filter by State" title="Filter by State"/></TableCell>
              <TableCell>Coverage <img src={filter} className="img_head" alt="Filter by State" title="Filter by State"/></TableCell>
              <TableCell>Program Type</TableCell>
              <TableCell>Property</TableCell>
              <TableCell>Assigned To</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
         User list
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
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

export default function TestFiles() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { items } = usePagination({
    count: 30,
  });
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
  const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  });
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
        selected.slice(selectedIndex + 1),
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const EditUsers=async()=>{
        alert("hii");
        return <EditUsers/>;
    }
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
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
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                   
                    <TableRow
                     
                      
                    >
                      <TableCell padding="checkbox">
                       <div className='form-check'>
                       <input className='form-check-input' type="checkbox" value="" id=""/>
                        </div>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.state}
                      </TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.quoteid}</TableCell>
                      <TableCell align="right">{row.i_name}</TableCell>
                      <TableCell align="right">{row.coverage}</TableCell>
                      <TableCell align="right">{row.programtype}</TableCell>
                      <TableCell align="right">
                        <Link
                          to={{
                            pathname: `/edituser/${row.userName}`,
  
                            data: row.userName, // your data array of objects
                          }}
                        ><EditIcon />
                        </Link>
                       
                        </TableCell>
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