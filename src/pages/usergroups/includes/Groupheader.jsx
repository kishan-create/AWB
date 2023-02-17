import React from 'react'

import filter_list from '../../../images/filter_list.svg'
import exportsvg from '../../../images/export.svg'
import add_circle from '../../../images/add_circle.svg'
export default function Groupheader() {
  return (
    <div> <div className="app-status justify-content-between align-items-center">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-8 col-lg-9">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">My Submissions (50)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">All Referrals (20)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Assigned you (0)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Archived (2)</a>
            </li>
          </ul>
        </div>
        <div className="col-auto">
          <div className="app-card-actions1">
            <div className="dropdown">
              <button className="dropdown-toggle btn app-btn-secondary no-toggle-arrow" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={filter_list} alt="Filter" title="Filter" />&nbsp; Filter
              </button>{/*//dropdown-toggle*/}
              <ul className="dropdown-menu p-3" data-popper-placement="bottom-start" style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(0px, 26px)'}}>
                <form className="app-search-form"> <input type="text" placeholder="Search by Quote id, name, location..." name="search" className="form-control search-input" /> <button type="submit" className="btn search-btn btn-primary" value="Search"><svg className="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>{/* <i class="fas fa-search"></i> Font Awesome fontawesome.com */}</button> </form>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />State</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Status</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Quote ID</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox" />Insured Name</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Coverage</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Program type</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Property</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox"  />Quote Assigned To</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox" />Comments</span></li>
                <li><span className="dropdown-item"><input className="form-check-input" type="checkbox" />Submission Date &amp; Time</span></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Clear</a></li>
              </ul>
            </div>{/*//dropdown*/}
          </div>
          <button type="button" className="btn app-btn-secondary mx-2"><img src={exportsvg} alt="Export" title="Export" />&nbsp; Export</button>
          <button type="button" className="btn app-btn-primary"><img src={add_circle} alt="Export" title="Export" />&nbsp; Upload Documents</button>
        </div>
      </div>
    </div>
  </div></div>
  )
}
