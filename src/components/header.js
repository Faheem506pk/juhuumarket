import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate  } from "react-router-dom";
import LanguageSelector from './LanguageSelector';
import { useTranslation } from './TranslationContext';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../assets/css/style.css";

export default function Header() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { translate } = useTranslation();

  const [products, setProducts] = useState([]);

  const handleBike = () => {
    // Redirect to product overview page with product ID in the URL
    navigate(`/v1/products/Bike`);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  const handleScooter = () => {
    // Redirect to product overview page with product ID in the URL
    navigate(`/v1/products/Scooter`);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.juhuu.app/v1/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOffcanvasItemClick = (e) => {
    e.stopPropagation();
    setShowOffcanvas(false);
  };

  const isProductPage = products.some((product) => {
    return location.pathname === `/product/${product.id}`;
  });

  return (
    <>
      {/* header */}
      <header className="d-flex fixed-top align-items-center justify-content-between px-4">
        <div className="brand-nav">
          <a href="/" className="brand">
            <img src="/assets/img/images/juhuu_logo.webp" alt="logo" />
          </a>
        </div>
        <div className="main-menu">
          <ul className="nav">
            <li className="nav-item">
              <Link
                to="https://juhuu.app/"
                className="nav-link Responsive-li"
              >
                <span className="icon">
                  <i className="bi bi-phone" />
                </span>{" "}
                App
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link Responsive-li">
                <span className="icon">
                  <i className="bi bi-lock" />
                </span>
                Zugangssysteme
              </a>
            </li>
            <li className="nav-item">
              <Link  
               to="/v1/products/Bike"
               className="nav-link Responsive-li"
               onClick={() => handleBike()}
               style={{
                  color:
                    location.pathname ===  "/v1/products/Bike"
                      ? "#CD2B23"
                      : "inherit",
                }}
              >
                <span className="icon">
                  <i className="bi bi-bicycle"></i>
                </span>{" "}
                Bike
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/v1/products/Scooter"
                className="nav-link Responsive-li"
                onClick={() => handleScooter()}
                style={{
                  color:
                    location.pathname ===  "/v1/products/Scooter"
                      ? "#CD2B23"
                      : "inherit",
                }}
              >
                <span className="icon">
                  <i className="bi bi-scooter"></i>
                </span>{" "}
                Scooter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link Responsive-li"
              >
                <span className="icon">
                  <i className="bi bi-puzzle"></i>
                </span>{" "}
                Sconstige
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-menu full-main-menu">
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link Responsive-li">
                <span className="icon">
                  <i className="bi bi-lightbulb"></i>
                </span>{" "}
                Use Cases
              </a>
            </li>
            <li className="nav-item">
            </li>
            <div
              className="Digital-Responsive d-flex flex-column Carousel-responsive"
              id="digital"
            >
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setShowOffcanvas(true)}
                >
                  <span className="icon">
                    <i className="bi bi-list active" />
                  </span>{" "}
                  menu
                </a>
              </li>
            </div>
          </ul>
        </div>
      </header>


      {/* OFFCANVAS */}

      
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        style={{ backgroundColor: "#343a40" }}
      >
        <Offcanvas.Header  style={{ backgroundColor: "#343a40", borderBottom: "1px solid #454d55" }}>
          <Offcanvas.Title style={{ color: "white" }}>Menu</Offcanvas.Title>
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowOffcanvas(false)} style={{ color: "white", filter: "invert(1)" }}></button>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ color: "white" }}>
          <ul className="nav flex-column">
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <Link
                to="https://juhuu.app/"
                className="nav-link"
                style={{ color: "white" }}
              >
                <i className="bi bi-phone me-3" /> App
              </Link>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <Link
                to="/"
                className="nav-link"
                style={{ color: "white" }}
              >
                <i className="bi bi-lock me-3" /> Zugangssysteme
              </Link>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <Link
                to="/v1/products/Bike"
                className="nav-link"
                onClick={() => handleBike()}
                style={{ color:
                  location.pathname ===  "/v1/products/Bike"
                    ? "#CD2B23"
                    : "white", }}
              >
                <i className="bi bi-bicycle me-3"></i> Bike
              </Link>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
            <Link
                to="/v1/products/Scooter" className="nav-link" onClick={() => handleScooter()} style={{ color:
                    location.pathname ===  "/v1/products/Scooter"
                      ? "#CD2B23"
                      : "white", }}>
                <i className="bi bi-scooter me-3"></i> Scooter
              </Link>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <a className="nav-link" href="#" style={{ color: "white" }}>
                <i className="bi bi-puzzle me-3"></i> Sconstige
              </a>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <a className="nav-link" href="#" style={{ color: "white" }}>
                <i className="bi bi-lightbulb me-3"></i> Use Cases
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
