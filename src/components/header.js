import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import products from "./data";

export default function Header() {
  const location = useLocation();
  const params = useParams();
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  useEffect(() => {
    const offcanvasMenu = document.getElementById("offcanvasMenu");

    const closeOffcanvasMenu = () => {
      setOffcanvasOpen(false);
    };

    if (offcanvasMenu) {
      offcanvasMenu.addEventListener("click", closeOffcanvasMenu);
    }

    return () => {
      if (offcanvasMenu) {
        offcanvasMenu.removeEventListener("click", closeOffcanvasMenu);
      }
    };
  }, []);

  const handleOffcanvasToggle = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const handleOffcanvasItemClick = (e) => {
    e.stopPropagation();
    setOffcanvasOpen(false);
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
            <a  className="nav-link Responsive-li">
                <span className="icon">
                  <i className="bi bi-archive" />
                </span>{" "}
                Wartehallen
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link Responsive-li"
                style={{
                  color:
                    location.pathname === "/" || isProductPage ? "#CD2B23" : "inherit",
                }}
              >
                <span className="icon">
                  <i className="bi bi-p-square" />
                </span>{" "}
                Radparksysteme
              </Link>
            </li>
            <li className="nav-item">
              <a  className="nav-link Responsive-li">
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
                onClick={handleOffcanvasToggle}
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
        className={`offcanvas offcanvas-end ${offcanvasOpen ? "show" : ""}`}
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
            onClick={handleOffcanvasToggle}
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body bg-dark">
          <ul className="nav flex-column">
            <li className="nav-item" onClick={handleOffcanvasItemClick}>
              <a>
                <i className="bi bi-archive me-3" />
                Wartehallen
              </a>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <Link to="/" className="nav-link" style={{
                  color:
                  location.pathname === "/" || isProductPage ? "#CD2B23" : "inherit",
                }}>
                <i className="bi bi-p-square me-3" /> Radparksysteme
              </Link>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <a className="nav-link" href="#">
                <i className="bi bi-lock me-3" /> Zugangssysteme
              </a>
            </li>
            <li className="nav-item off-canvas-nav-item" onClick={handleOffcanvasItemClick}>
              <a className="nav-link" href="#">
                <i className="bi bi-box me-3" /> Other Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
