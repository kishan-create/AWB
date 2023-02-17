import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import manage_search from "../../images/manage_search.svg";
import location from "../../images/location.svg";
function AddmultipleAdress() {
  const [inputFields, setInputFields] = useState([
    {
      agent_Type: 1,
      agent_Adress: "",
      agent_Address2: "",
    
      country: "",
      state: "",
      zip: "",
      location: "",
    },
  ]);

  const addInputField = () => {
    {
      setInputFields([
        ...inputFields,
        {
          agent_Type: "",
          agent_Adress: "",
          agent_Address2: "",
          country: "",
          state: "",
          zip: "",
          location: "",
         
        },
      ]);
    }
  };
  
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
 
  const AddressName = () => {};
  const Addr_Type     = ['Work', 'Billing', 'Permenent', 'Shipping'];
 
  return (
    <div>
      <h5>Agency Information</h5>
      {inputFields.map((data, index) => {
        var addressHeading=Addr_Type[data.agent_Type-1];
        return (
          <div>
            <div class="row gx-2 gy-2">
              <div class="col-12 mb-3"></div>
            </div>
            <div className="row gx-2 gy-2">
              <h6>{addressHeading}-Address</h6>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <label for="Submission" class="form-label">
                  Agency address Type <span class="red">*</span>
                </label>
                <select
                  class="form-select mb-3"
                  name="agent_Type"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={data.agent_Type}
                >
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
                <span className="input-group-text" id="basic-addon1">
                  <img src={location} alt="" title />
                </span>
                <input
                  type="text"
                  name="agent_Adress"
                  className="form-control"
                  placeholder="Enter Address line 1"
                  aria-label="Enter Insured Name"
                  aria-describedby="basic-addon1"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={data.agent_Adress}
                />
                <span className="input-group-text" id="basic-addon1">
                  <img src={manage_search} alt="" title />
                </span>
              </div>
            </div>
            <div className="col-6">
              <label htmlFor="Submission" className="form-label">
                {" "}
                Address line 2<span className="red">*</span>
              </label>
              <div className="input-group ">
                <span className="input-group-text" id="basic-addon1">
                  <img src={location} alt="" title />
                </span>
                <input
                  type="text"
                  name="agent_Address2"
                  className="form-control"
                  placeholder="Address line 2"
                  aria-label="Enter Insured Name"
                  aria-describedby="basic-addon1"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={data.agent_Address2}
                />
                <span className="input-group-text" id="basic-addon1">
                  <img src={manage_search} alt="" title />
                </span>
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
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={data.country}
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
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={data.state}
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
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={data.zip}
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
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={data.location}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div class="col-12">
        <button type="button" class="btn btn-link" onClick={addInputField}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 25 24"
          >
            <path fill="#158AF5" d="M11.594 19v-6h-6v-2h6V5h2v6h6v2h-6v6h-2Z" />
          </svg>
          Add Another Address
        </button>
      </div>
    </div>
  );
}
export default AddmultipleAdress;
