<>
  <title>Insure</title>
  {/* Meta */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="favicon.ico" />
  {/* FontAwesome JS*/}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  {/* App CSS */}
  <link id="theme-style" rel="stylesheet" href="assets/css/portal.css" />
  <header className="app-header fixed-top">
    <div className="app-header-inner">
      <div className="container-fluid py-2">
        <div className="app-header-content">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="author pt-1">
                <p>
                  Hey, Delson D !<span>Welcome to insure UW portal</span>
                </p>
              </div>
            </div>
            <div className="col-auto">
              {" "}
              <a
                id="sidepanel-toggler"
                className="sidepanel-toggler d-inline-block d-xl-none"
                href="#"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  role="img"
                >
                  <title>Menu</title>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M4 7h22M4 15h22M4 23h22"
                  />
                </svg>{" "}
              </a>{" "}
            </div>
            <div className="search-mobile-trigger d-sm-none col">
              {" "}
              <i className="search-mobile-trigger-icon fas fa-search" />{" "}
            </div>
            <div className="app-search-box col">
              <form className="app-search-form">
                {" "}
                <input
                  type="text"
                  placeholder="Search by Quote id, name, location..."
                  name="search"
                  className="form-control search-input"
                />{" "}
                <button
                  type="submit"
                  className="btn search-btn btn-primary"
                  value="Search"
                >
                  <i className="fas fa-search" />
                </button>{" "}
              </form>
            </div>
            <div className="app-utilities col-auto">
              <div className="app-utility-item app-notifications-dropdown dropdown">
                {" "}
                <a
                  className="dropdown-toggle no-toggle-arrow"
                  id="notifications-dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  title="Notifications"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-bell icon"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                    <path
                      fillRule="evenodd"
                      d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                    />
                  </svg>{" "}
                  <span className="icon-badge">3</span>
                </a>
                <div
                  className="dropdown-menu p-0"
                  aria-labelledby="notifications-dropdown-toggle"
                >
                  <div className="dropdown-menu-header p-3">
                    <h5 className="dropdown-menu-title mb-0">Notifications</h5>
                  </div>
                  <div className="dropdown-menu-content">
                    <div className="item p-3">
                      <div className="row gx-2 justify-content-between align-items-center">
                        <div className="col-auto">
                          {" "}
                          <img
                            className="profile-image"
                            src="assets/images/profiles/profile-1.png"
                            alt=""
                          />{" "}
                        </div>
                        <div className="col">
                          <div className="info">
                            <div className="desc">
                              Amy shared a file with you. Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit.{" "}
                            </div>
                            <div className="meta"> 2 hrs ago</div>
                          </div>
                        </div>
                      </div>
                      <a className="link-mask" href="notifications.html" />
                    </div>
                    <div className="item p-3">
                      <div className="row gx-2 justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="app-icon-holder">
                            {" "}
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-receipt"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                              />
                            </svg>{" "}
                          </div>
                        </div>
                        <div className="col">
                          <div className="info">
                            <div className="desc">
                              You have a new invoice. Proin venenatis interdum
                              est.
                            </div>
                            <div className="meta"> 1 day ago</div>
                          </div>
                        </div>
                      </div>
                      <a className="link-mask" href="notifications.html" />
                    </div>
                    <div className="item p-3">
                      <div className="row gx-2 justify-content-between align-items-center">
                        <div className="col-auto">
                          <div className="app-icon-holder icon-holder-mono">
                            {" "}
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-bar-chart-line"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                              />
                            </svg>{" "}
                          </div>
                        </div>
                        <div className="col">
                          <div className="info">
                            <div className="desc">
                              Your report is ready. Proin venenatis interdum
                              est.
                            </div>
                            <div className="meta"> 3 days ago</div>
                          </div>
                        </div>
                      </div>
                      <a className="link-mask" href="notifications.html" />
                    </div>
                    <div className="item p-3">
                      <div className="row gx-2 justify-content-between align-items-center">
                        <div className="col-auto">
                          {" "}
                          <img
                            className="profile-image"
                            src="assets/images/profiles/profile-2.png"
                            alt=""
                          />{" "}
                        </div>
                        <div className="col">
                          <div className="info">
                            <div className="desc">
                              James sent you a new message.
                            </div>
                            <div className="meta"> 7 days ago</div>
                          </div>
                        </div>
                      </div>
                      <a className="link-mask" href="notifications.html" />
                    </div>
                  </div>
                  <div className="dropdown-menu-footer p-2 text-center">
                    {" "}
                    <a href="notifications.html">View all</a>{" "}
                  </div>
                </div>
              </div>
              <div className="app-utility-item">
                {" "}
                <a href="settings.html" title="Settings">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-gear icon"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                    />
                  </svg>{" "}
                </a>{" "}
              </div>
              <div className="app-utility-item app-user-dropdown dropdown">
                {" "}
                <a
                  className="dropdown-toggle"
                  id="user-dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <img src="assets/images/user.png" alt="user profile" />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="user-dropdown-toggle"
                >
                  <li>
                    <a className="dropdown-item" href="account.html">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="settings.html">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="login.html">
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="app-sidepanel" className="app-sidepanel">
      <div id="sidepanel-drop" className="sidepanel-drop" />
      <div className="sidepanel-inner d-flex flex-column">
        {" "}
        <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">
          ×
        </a>
        <div className="app-branding">
          {" "}
          <a className="app-logo" href="index.html">
            <img
              className="logo-icon me-2"
              src="assets/images/app-logo.svg"
              alt="logo"
            />
          </a>{" "}
        </div>
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
            <li className="nav-item">
              {" "}
              <a className="nav-link active" href="index.html">
                {" "}
                <span className="nav-icon">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-house-door"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>{" "}
                </span>{" "}
                {/*span class="nav-link-text">Overview</span*/}{" "}
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="orders.html">
                {" "}
                <span className="nav-icon">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-card-list"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                    />
                    <circle cx="3.5" cy="5.5" r=".5" />
                    <circle cx="3.5" cy={8} r=".5" />
                    <circle cx="3.5" cy="10.5" r=".5" />
                  </svg>{" "}
                </span>{" "}
                {/*span class="nav-link-text">Orders</span*/}{" "}
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="help.html">
                {" "}
                <span className="nav-icon">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-question-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>{" "}
                </span>{" "}
                {/*span class="nav-link-text">Help</span*/}{" "}
              </a>
            </li>
          </ul>
        </nav>
        <div className="app-sidepanel-footer">
          <nav className="app-nav app-nav-footer">
            <ul className="app-menu footer-menu list-unstyled">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#">
                  {" "}
                  <span className="nav-icon">
                    {" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-gear"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                      />
                    </svg>{" "}
                  </span>{" "}
                  {/*span class="nav-link-text">Settings</span*/}{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="nav-icon">
                    {" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-download"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                      />
                    </svg>{" "}
                  </span>{" "}
                  {/*span class="nav-link-text">Logout</span*/}{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div className="app-status justify-content-between align-items-center">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-8 col-lg-9">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                My Submissions (50)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                All Referrals (20)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Assigned you (0)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Archived (2)
              </a>
            </li>
          </ul>
        </div>
        <div className="col-auto">
          <div className="app-card-actions1">
            <div className="dropdown">
              <button
                className="dropdown-toggle btn app-btn-secondary no-toggle-arrow"
                id="dropdownMenuLink1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="assets/images/filter_list.svg"
                  alt="Filter"
                  title="Filter"
                />
                &nbsp; Filter
              </button>
              {/*//dropdown-toggle*/}
              <ul
                className="dropdown-menu p-3"
                data-popper-placement="bottom-start"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: 0,
                  transform: "translate(0px, 26px)"
                }}
              >
                <form className="app-search-form">
                  {" "}
                  <input
                    type="text"
                    placeholder="Search by Quote id, name, location..."
                    name="search"
                    className="form-control search-input"
                  />{" "}
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
                      data-fa-i2svg=""
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
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    State
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Status
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Quote ID
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Insured Name
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Coverage
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Program type
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Property
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Quote Assigned To
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
                    Comments
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id=""
                    />
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
          <button type="button" className="btn app-btn-secondary mx-2">
            <img src="assets/images/export.svg" alt="Export" title="Export" />
            &nbsp; Export
          </button>
          <button type="button" className="btn app-btn-primary">
            <img
              src="assets/images/add_circle.svg"
              alt="Export"
              title="Export"
            />
            &nbsp; Upload Documents
          </button>
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
              <table className="table app-table-hover mb-0 text-left">
                <thead>
                  <tr>
                    <th className="cell">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                      </div>
                    </th>
                    <th className="cell">
                      State{" "}
                      <img
                        src="assets/images/filter.svg"
                        alt="Filter by State"
                        title="Filter by State"
                      />
                    </th>
                    <th className="cell">
                      Status{" "}
                      <img
                        src="assets/images/filter.svg"
                        alt="Filter by State"
                        title="Filter by State"
                      />
                    </th>
                    <th className="cell">
                      Quote ID{" "}
                      <img
                        src="assets/images/filter.svg"
                        alt="Filter by State"
                        title="Filter by State"
                      />
                    </th>
                    <th className="cell">Insured Name</th>
                    <th className="cell">
                      Coverage{" "}
                      <img
                        src="assets/images/filter.svg"
                        alt="Filter by State"
                        title="Filter by State"
                      />
                    </th>
                    <th className="cell">
                      Program type{" "}
                      <img
                        src="assets/images/filter.svg"
                        alt="Filter by State"
                        title="Filter by State"
                      />
                    </th>
                    <th className="cell">Property</th>
                    <th className="cell">
                      Quote Assigned To{" "}
                      <img
                        src="assets/images/filter.svg"
                        alt="Filter by State"
                        title="Filter by State"
                      />
                    </th>
                    <th className="cell">Comments</th>
                    <th className="cell">Submission Date &amp; Time</th>
                    <th className="cell">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cell">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                      </div>
                    </td>
                    <td className="cell">Create New Submission</td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          Change the Status
                        </option>
                        <option value="option-2">On Hold</option>
                        <option value="option-3">In Progess</option>
                        <option value="option-4">Submitted</option>
                        <option value="option-4">Pending</option>
                      </select>
                    </td>
                    <td className="cell">GD125828282</td>
                    <td className="cell">
                      <span className="truncate">John Sanders</span>
                    </td>
                    <td className="cell">Cyber</td>
                    <td className="cell">Type A</td>
                    <td className="cell">
                      <a className="btn-sm btn-link" href="#">
                        1
                      </a>
                    </td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          None
                        </option>
                        <option value="option-2">Madhav</option>
                        <option value="option-3">Dleson</option>
                        <option value="option-4">Amit</option>
                      </select>
                    </td>
                    <td className="cell">
                      <img
                        src="assets/images/chat.svg"
                        alt="Comments"
                        title="Comments"
                      />
                    </td>
                    <td className="cell">25/07/2023 - 10:30 PM</td>
                    <td className="cell">
                      <div className="app-card-actions">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle btn btn-link no-toggle-arrow"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-three-dots-vertical"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                              />
                            </svg>
                          </button>
                          {/*//dropdown-toggle*/}
                          <ul
                            className="dropdown-menu"
                            data-popper-placement="bottom-start"
                            style={{
                              position: "absolute",
                              inset: "0px auto auto 0px",
                              margin: 0,
                              transform: "translate(0px, 26px)"
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-eye me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  />
                                </svg>
                                View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-pencil me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  />
                                </svg>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-download me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                  />
                                </svg>
                                Download
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-trash me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*//dropdown*/}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                      </div>
                    </td>
                    <td className="cell">Additional Information</td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          Change the Status
                        </option>
                        <option value="option-2">On Hold</option>
                        <option value="option-3">In Progess</option>
                        <option value="option-4">Submitted</option>
                        <option value="option-4">Pending</option>
                      </select>
                    </td>
                    <td className="cell">CD125828282</td>
                    <td className="cell">
                      <span className="truncate">John Deo</span>
                    </td>
                    <td className="cell">Fine Arts</td>
                    <td className="cell">Type B</td>
                    <td className="cell">
                      <a className="btn-sm btn-link" href="#">
                        5
                      </a>
                    </td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          None
                        </option>
                        <option value="option-2">Madhav</option>
                        <option value="option-3">Dleson</option>
                        <option value="option-4">Amit</option>
                      </select>
                    </td>
                    <td className="cell">
                      <img
                        src="assets/images/chat.svg"
                        alt="Comments"
                        title="Comments"
                      />
                    </td>
                    <td className="cell">25/07/2023 - 10:30 PM</td>
                    <td className="cell">
                      <div className="app-card-actions">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle btn btn-link no-toggle-arrow"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-three-dots-vertical"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                              />
                            </svg>
                          </button>
                          {/*//dropdown-toggle*/}
                          <ul
                            className="dropdown-menu"
                            data-popper-placement="bottom-start"
                            style={{
                              position: "absolute",
                              inset: "0px auto auto 0px",
                              margin: 0,
                              transform: "translate(0px, 26px)"
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-eye me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  />
                                </svg>
                                View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-pencil me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  />
                                </svg>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-download me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                  />
                                </svg>
                                Download
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-trash me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*//dropdown*/}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                      </div>
                    </td>
                    <td className="cell">Quote Summary</td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          Change the Status
                        </option>
                        <option value="option-2">On Hold</option>
                        <option value="option-3">In Progess</option>
                        <option value="option-4">Submitted</option>
                        <option value="option-4">Pending</option>
                      </select>
                    </td>
                    <td className="cell">BD125828282</td>
                    <td className="cell">
                      <span className="truncate">Steve Ben</span>
                    </td>
                    <td className="cell">Flood</td>
                    <td className="cell">Type A</td>
                    <td className="cell">
                      <a className="btn-sm btn-link" href="#">
                        7
                      </a>
                    </td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          None
                        </option>
                        <option value="option-2">Madhav</option>
                        <option value="option-3">Dleson</option>
                        <option value="option-4">Amit</option>
                      </select>
                    </td>
                    <td className="cell">
                      <img
                        src="assets/images/chat.svg"
                        alt="Comments"
                        title="Comments"
                      />
                    </td>
                    <td className="cell">25/07/2023 - 10:30 PM</td>
                    <td className="cell">
                      <div className="app-card-actions">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle btn btn-link no-toggle-arrow"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-three-dots-vertical"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                              />
                            </svg>
                          </button>
                          {/*//dropdown-toggle*/}
                          <ul
                            className="dropdown-menu"
                            data-popper-placement="bottom-start"
                            style={{
                              position: "absolute",
                              inset: "0px auto auto 0px",
                              margin: 0,
                              transform: "translate(0px, 26px)"
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-eye me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  />
                                </svg>
                                View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-pencil me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  />
                                </svg>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-download me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                  />
                                </svg>
                                Download
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-trash me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*//dropdown*/}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                      </div>
                    </td>
                    <td className="cell">Risk Assesments</td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          Change the Status
                        </option>
                        <option value="option-2">On Hold</option>
                        <option value="option-3">In Progess</option>
                        <option value="option-4">Submitted</option>
                        <option value="option-4">Pending</option>
                      </select>
                    </td>
                    <td className="cell">CD125828282</td>
                    <td className="cell">
                      <span className="truncate">Harrison Ford</span>
                    </td>
                    <td className="cell">Home Insurance</td>
                    <td className="cell">Type C</td>
                    <td className="cell">
                      <a className="btn-sm btn-link" href="#">
                        9
                      </a>
                    </td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          None
                        </option>
                        <option value="option-2">Madhav</option>
                        <option value="option-3">Dleson</option>
                        <option value="option-4">Amit</option>
                      </select>
                    </td>
                    <td className="cell">
                      <img
                        src="assets/images/chat.svg"
                        alt="Comments"
                        title="Comments"
                      />
                    </td>
                    <td className="cell">25/07/2023 - 10:30 PM</td>
                    <td className="cell">
                      <div className="app-card-actions">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle btn btn-link no-toggle-arrow"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-three-dots-vertical"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                              />
                            </svg>
                          </button>
                          {/*//dropdown-toggle*/}
                          <ul
                            className="dropdown-menu"
                            data-popper-placement="bottom-start"
                            style={{
                              position: "absolute",
                              inset: "0px auto auto 0px",
                              margin: 0,
                              transform: "translate(0px, 26px)"
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-eye me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  />
                                </svg>
                                View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-pencil me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  />
                                </svg>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-download me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                  />
                                </svg>
                                Download
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-trash me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*//dropdown*/}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                      </div>
                    </td>
                    <td className="cell">Binder Generation</td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          Change the Status
                        </option>
                        <option value="option-2">On Hold</option>
                        <option value="option-3">In Progess</option>
                        <option value="option-4">Submitted</option>
                        <option value="option-4">Pending</option>
                      </select>
                    </td>
                    <td className="cell">AD125828282</td>
                    <td className="cell">
                      <span className="truncate">Brand Pitt</span>
                    </td>
                    <td className="cell">Fine Art</td>
                    <td className="cell">Type D</td>
                    <td className="cell">
                      <a className="btn-sm btn-link" href="#">
                        1
                      </a>
                    </td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          None
                        </option>
                        <option value="option-2">Madhav</option>
                        <option value="option-3">Dleson</option>
                        <option value="option-4">Amit</option>
                      </select>
                    </td>
                    <td className="cell">
                      <img
                        src="assets/images/chat.svg"
                        alt="Comments"
                        title="Comments"
                      />
                    </td>
                    <td className="cell">25/07/2023 - 10:30 PM</td>
                    <td className="cell">
                      <div className="app-card-actions">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle btn btn-link no-toggle-arrow"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-three-dots-vertical"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                              />
                            </svg>
                          </button>
                          {/*//dropdown-toggle*/}
                          <ul
                            className="dropdown-menu"
                            data-popper-placement="bottom-start"
                            style={{
                              position: "absolute",
                              inset: "0px auto auto 0px",
                              margin: 0,
                              transform: "translate(0px, 26px)"
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-eye me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  />
                                </svg>
                                View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-pencil me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  />
                                </svg>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-download me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                  />
                                </svg>
                                Download
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-trash me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*//dropdown*/}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id=""
                        />
                      </div>
                    </td>
                    <td className="cell">Create New Submission</td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          Change the Status
                        </option>
                        <option value="option-2">On Hold</option>
                        <option value="option-3">In Progess</option>
                        <option value="option-4">Submitted</option>
                        <option value="option-4">Pending</option>
                      </select>
                    </td>
                    <td className="cell">CD125828282</td>
                    <td className="cell">
                      <span className="truncate">John Sanders</span>
                    </td>
                    <td className="cell">Cyber</td>
                    <td className="cell">Type B</td>
                    <td className="cell">
                      <a className="btn-sm btn-link" href="#">
                        20
                      </a>
                    </td>
                    <td className="cell">
                      <select className="form-select form-select-sm w-auto">
                        <option selected="" value="option-1">
                          None
                        </option>
                        <option value="option-2">Madhav</option>
                        <option value="option-3">Dleson</option>
                        <option value="option-4">Amit</option>
                      </select>
                    </td>
                    <td className="cell">
                      <img
                        src="assets/images/chat.svg"
                        alt="Comments"
                        title="Comments"
                      />
                    </td>
                    <td className="cell">25/07/2023 - 10:30 PM</td>
                    <td className="cell">
                      <div className="app-card-actions">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle btn btn-link no-toggle-arrow"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-three-dots-vertical"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                              />
                            </svg>
                          </button>
                          {/*//dropdown-toggle*/}
                          <ul
                            className="dropdown-menu"
                            data-popper-placement="bottom-start"
                            style={{
                              position: "absolute",
                              inset: "0px auto auto 0px",
                              margin: 0,
                              transform: "translate(0px, 26px)"
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-eye me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                  />
                                </svg>
                                View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-pencil me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  />
                                </svg>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-download me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                  />
                                </svg>
                                Download
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-trash me-2"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*//dropdown*/}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <nav className="app-pagination mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <footer className="app-footer">
    <div className="container text-center py-3">
      <small className="copyright">
        © 2023 Insure Company Inc. All Rights Reserved
      </small>
    </div>
  </footer>
  {/* Javascript */}
  {/* Charts JS */}
  {/* Page Specific JS */}
</>
