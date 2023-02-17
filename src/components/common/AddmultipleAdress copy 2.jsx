import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
 
]
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function AddmultipleAdress() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div class="col-12">
        <button onClick={openModal} type="button" class="btn btn-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 25 24"
          >
            <path fill="#158AF5" d="M11.594 19v-6h-6v-2h6V5h2v6h6v2h-6v6h-2Z" />
          </svg>
          Add Address
        </button>
      </div>
      <div>
      
    </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h5>Agency Information</h5>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          <div>
            <div class="row gx-2 gy-2">
              <div class="col-12 mb-3"></div>
            </div>
            <div className="row gx-2 gy-2">
            
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <label for="Submission" class="form-label">
                  Agency address Type <span class="red">*</span>
                </label>
                <select class="form-select mb-3" name="agent_Type">
                  <option selected="" value="1">
                    Work Address
                  </option>
                  <option value="2">Billing Address</option>
                  <option value="3">Permenent Address </option>
                  <option value="4">Shipping Address</option>
                </select>
              </div>
            </div>

            <div class="col-6">
              <label htmlFor="Submission" className="form-label">
                {" "}
                Address line 1<span className="red">*</span>
              </label>
              <div className="input-group ">
                
                <input
                  type="text"
                  name="agent_Adress"
                  className="form-control"
                  placeholder="Enter Address line 1"
                  aria-label="Enter Insured Name"
                  aria-describedby="basic-addon1"
                />
               
              </div>
            </div>
            <div className="col-6">
              <label htmlFor="Submission" className="form-label">
                {" "}
                Address line 2<span className="red">*</span>
              </label>
              <div className="input-group ">
                
                <input
                  type="text"
                  name="agent_Address2"
                  className="form-control"
                  placeholder="Address line 2"
                  aria-label="Enter Insured Name"
                  aria-describedby="basic-addon1"
                />
              
              </div>
            </div>

            <div className="row gx-2 gy-4">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="Submission" className="form-label">
                  Country <span className="red">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="Country"
                    aria-label="Date of Submission"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="Submission" className="form-label">
                  State <span className="red">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="state"
                    aria-label="Date of Submission"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row gx-2 gy-4">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="Submission" className="form-label">
                  Zip <span className="red">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="zip"
                    className="form-control"
                    placeholder="zip"
                    aria-label="Date of Submission"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="Submission" className="form-label">
                  location <span className="red">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="location"
                    aria-label="Date of Submission"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <button type="button" class="btn btn-link" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                fill="none"
                viewBox="0 0 25 24"
              >
                <path
                  fill="#158AF5"
                  d="M11.594 19v-6h-6v-2h6V5h2v6h6v2h-6v6h-2Z"
                />
              </svg>
             A
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
