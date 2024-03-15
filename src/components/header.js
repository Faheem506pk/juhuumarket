import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <>
      {/* header */}
      <header className="d-flex fixed-top align-items-center justify-content-between px-4">
        <div className="brand-nav">
          <a href="/" className="brand">
            <img src="assets/images/juhuu_logo.webp" alt="logo" />
          </a>
        </div>
        <div className="main-menu">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link Responsive-li" style={{ color: location.pathname === '/' ? '#CD2B23' : 'inherit' }}>
                <span className="icon">
                  <i className="bi bi-archive" />
                </span>{" "} Wartehallen
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Product_overview_page" className="nav-link Responsive-li" style={{ color: location.pathname === '/Product_overview_page' ? '#CD2B23' : 'inherit' }}>
                <span className="icon">
                  <i className="bi bi-p-square" />
                </span>{" "} Radparksysteme
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link Responsive-li">
                <span className="icon">
                  <i className="bi bi-lock" />
                </span>
                Zugangssysteme
              </a>
            </li>
          </ul>
        </div>
    <div className="main-menu full-main-menu">
      <ul className="nav">
        <li className="nav-item">
          <a href="#" className="nav-link Responsive-li">
            <span className="icon">
              <i className="bi bi-journal-bookmark active" />
            </span>{" "}
            Bookmarks
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link Responsive-li">
            <span className="icon">
              <i className="bi bi-search active " />
            </span>{" "}
            Search
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#offcanvasMenu"
            data-bs-toggle="offcanvas"
            className="nav-link"
          >
            <span className="icon">
              <i className="bi bi-list active" />
            </span>{" "}
            menu
          </a>
        </li>
      </ul>
    </div>
  </header>
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasMenu"
    aria-labelledby="offcanvasMenuLabel"
  >
    <div className="offcanvas-header bg-dark">
      <div className="input-group">
        <input
          type="search"
          className="form-control  border-0"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text" id="search-addon">
          <i className="bi bi-search" />
        </span>
      </div>
      <i
        className="bi bi-x-lg ms-3"
        type="button"
        style={{ color: "white" }}
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body bg-dark">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/">
            <i className="bi bi-archive" />
            Wartehallen
            </Link>
        </li>
        <li className="nav-item off-canvas-nav-item">
        <Link to="Product_overview_page">
            <i className="bi bi-p-square me-3" /> Radparksysteme
            </Link>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-lock me-3" /> Zugangssysteme
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-box me-3" /> Other Products
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            Aktuelles
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <div className="accordion nav-link px-0" id="accordionExample">
            <div className="accordion-item bg-transparent text-white border-0 px-0">
              <h2 className="accordion-header  bg-transparent">
                <button
                  className="accordion-button collapsed bg-transparent text-white px-3 py-2 accordion-button-off off-canvas-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Unternehmen
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-transparent">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a href="#" className="nav-link">
            Karriere
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <div className="accordion  nav-link px-0" id="accordionExample">
            <div className="accordion-item bg-transparent text-white border-0 px-0">
              <h2 className="accordion-header bg-transparent">
                <button
                  className="accordion-button collapsed bg-transparent text-white px-3 py-2 accordion-button-off off-canvas-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Service und Leistungen
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            DB Bike+Ride-Offensive
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            Referenzprojekte
          </a>
        </li>
        <li className="nav-item off-canvas-nav-item">
          <a className="nav-link" href="#">
            {" "}
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  </div>
        </>
    );
}