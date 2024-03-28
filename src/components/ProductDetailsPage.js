import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./ContactForm";
import ProductCarousel from "./productPage";
import Productpagegrid from "./productpagegrid";
import Mobileproductpage from "./mobile_productpage";
import MobileAnalogueProductCarousel from "./mobile_analogue";
import products from "./data";
import "../assets/css/style.css";

const ProductDetailsPage = () => {
  // Access productId from URL params
  const { productId } = useParams();
  // Find the product with the matching ID
  const product = products.find((product) => product.id === productId);

  return (
    <>
      <section className="main-product-slider">
        {/* Your main product slider section */}
      </section>
      <section className="product-details">
        <div className="container">
          {/* Breadcrumb navigation */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="https://juhuu.app/">Juhuu</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">Fahrradparksysteme</a>
              </li>
              <li className="breadcrumb-item active">
                {product && product.name}
              </li>
            </ol>
          </nav>
          {/* Product title */}
          <h1 className="h2 product-title">
            <span>{product && product.name}</span>
            <span className="h2">{product && product.model}</span>
          </h1>
          <div
            id="carouselExampleIndicators3"
            className="carousel slide mt-5  container"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {product.bannerImageDark.map((image, index) => (
                <div
                  className={`carousel-item carousel-item-main-img ${
                    index === 0 ? "active" : ""
                  }`}
                  key={index}
                >
                  <img
                    src={image}
                    className="card-img-top"
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators3"
              data-bs-slide="prev"
            >
              <span
                className="bi bi-arrow-left-circle-fill text-black fs-1 rounded-5"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators3"
              data-bs-slide="next"
            >
              <span
                className="bi bi-arrow-right-circle-fill text-black fs-1 rounded-5"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Product description and details */}
      <section className="product-details">
        <div className="container">
          <nav className="sticky-top d-none d-xxl-block bg-white">
            <ul className="nav nav-pills nav-fill nav-sideline product-nav ">
              <li className="nav-item ">
                <a className="nav-link nav-link-in" href="#Description">
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-in" href="#ProductDataSheets">
                  Product Data Sheets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-in" href="#OptionalAccessories">
                  Optional Accessories
                </a>
              </li>
            </ul>
          </nav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            className="scrollspy-example p-3 rounded-2"
            tabIndex={0}
          >
            <div className="section-detail" id="Description">
              <div className="row">
                <div className="col-md-6">
                  <h3>Description</h3>
                  <p>
                    {product && product.description && product.description.en}
                  </p>{" "}
                  {/* Assuming "en" is for English */}
                </div>
                <div className="col-md-6">
                  <h3>Highlights</h3>
                  <ul>
                    <li>Flexible modular system for cargo bikes</li>
                    <li>
                      Safest bike parking system thanks to individual boxes
                    </li>
                    <li>Compatible with standard cargo bikes</li>
                  </ul>
                </div>
                <div className="section-detail mt-5 " id="ProductDataSheets">
                  <h3 className="ProductDataSheets-1">Produkt Informationen</h3>
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div
                      className="accordion-item"
                      style={{ borderTop: "none" }}
                    >
                      <h2 className="accordion-header accordion-button-h">
                        <button
                          className="accordion-button collapsed accordion-button-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#product-collapseOne"
                          aria-expanded="true"
                          aria-controls="product-collapseOne"
                        >
                          Technische Daten
                        </button>
                      </h2>
                      <div
                        id="product-collapseOne"
                        className="accordion-collapse collapse "
                      >
                        <div className="accordion-body">
                          <div className=" card bg-light border-0 p-3 mb-4">
                            <h3>Tragende Konstruktion</h3>
                            <ul>
                              <li>
                                Tragender geschweißter Türrahmen und
                                Korpusausbildung über Blechbiegeteile
                              </li>
                              <li>Verzinkt</li>
                              <li>
                                In ausgewählten RAL-Tönen pulverbeschichtet
                              </li>
                              <li>Modulare Erweiterungsmöglichkeiten</li>
                            </ul>
                          </div>
                          <div className="row p-3 justify-content-between">
                            <div className="card bg-light border-0 p-4 mb-4 accordion-child-container">
                              <h5>Dach</h5>
                              <h6 className="fw-bold mt-1">Dachaufbau</h6>
                              <ul>
                                <li>Pultdach aus Stahlblechen</li>
                                <li>
                                  Verzinkt und in ausgewählten RAL-Tönen
                                  pulverbeschichtet
                                </li>
                              </ul>
                              <h6 className="fw-bold">Dachentwässerung</h6>
                              <ul>
                                <li>
                                  Entwässerung über geneigtes Pultdach, über
                                  Rückwand oberirdisch abgeleitet
                                </li>
                              </ul>
                            </div>
                            <div className="card bg-light border-0 p-4 mb-4 ms-auto accordion-child-container">
                              <h5>Wände</h5>
                              <h6 className="fw-bold mt-1">Seitenwände</h6>
                              <ul>
                                <li>Stahlblech</li>
                                <li>Verzinkt</li>
                                <li>
                                  In ausgewählten RAL-Tönen pulverbeschichtet
                                </li>
                                <li>
                                  Seitenwände mit blickdichter Belüftungsöffnung
                                  versehen
                                </li>
                              </ul>
                              <h6 className="fw-bold">Tür</h6>
                              <ul>
                                <li>
                                  Öffnung und offen halten der Tür über
                                  Gasdruckfeder
                                </li>
                                <li>
                                  Tür mit nicht sichtbaren Scharnieren und nicht
                                  sichtbarer Position des Schlosses
                                </li>
                                <li>Türnummer möglich</li>
                                <li>Türgriff als durchführende Griffleiste</li>
                              </ul>
                            </div>
                          </div>
                          <div className="row p-3 justify-content-between">
                            <div className="col-6 card bg-light border-0 p-4 mb-4 accordion-child-container">
                              <h5>Abmessungen</h5>
                              <h6 className="fw-bold mt-1">Länge</h6>
                              <ul>
                                <li>1140 mm</li>
                                <li>Grundmodul</li>
                              </ul>
                              <h6 className="fw-bold">Tiefe</h6>
                              <ul>
                                <li>2800 mm</li>
                                <li>Grundmodul</li>
                              </ul>
                              <h6 className="fw-bold">Höhe</h6>
                              <ul>
                                <li>1575 mm</li>
                                <li>Grundmodul</li>
                              </ul>
                              <h6 className="fw-bold">Fahrradeinstellmaß</h6>
                              <ul>
                                <li>1005 x 1350 x 2795mm</li>
                              </ul>
                            </div>
                            <div className="col-5 card bg-light border-0 p-4 mb-4 ms-auto accordion-child-container">
                              <h5>Fundamente</h5>
                              <h6 className="fw-bold mt-1">
                                Fundamente / Befestigung
                              </h6>
                              <ul>
                                <li>
                                  Tragfähiger, ebener Untergrund (z.B.
                                  Pflasterbelag, Asphalt, Betonplatte…)
                                </li>
                              </ul>
                              <h6 className="fw-bold">Schneelast / Windlast</h6>
                              <ul>
                                <li>Schneelast 0,85 kN/m²</li>
                                <li>Windlast Zone 2</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header accordion-button-h">
                        <button
                          className="accordion-button collapsed accordion-button-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Technische Zeichnung
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                      >
                        <div id="collapseDrawings">
                          <div className="card-body">
                            <div className="row">
                              <div className="drawings-wrapper col-md-6">
                                <figure>
                                  <a
                                    href="/assets/img/images/produktdaten.jpg"
                                    data-fancybox="drawings"
                                  >
                                    <img
                                      className="img-fluid"
                                      alt="Technische Zeichnung Bike and Ride Box Cargo einstöckig"
                                      src="/assets/img/images/produktdaten.jpg"
                                      width={725}
                                      height={513}
                                    />
                                    <div className="plusbtn">
                                      <button
                                        className="btn btn-primary rounded-circle resize"
                                        type="button"
                                      >
                                        <i className="bi bi-plus fa-lg" />
                                      </button>
                                    </div>
                                  </a>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header accordion-button-h">
                        <button
                          className="accordion-button collapsed accordion-button-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Ausstattung
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Fahrradparker</li>
                            <li>Kleiderhaken</li>
                            <li>Diebstahlsicherung</li>
                            <li>Elektronisches Zugangssystem KINUS</li>
                            <li>Elektronisches Türschloss</li>
                            <li>Stromübergabe</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header accordion-button-h">
                        <button
                          className="accordion-button collapsed accordion-button-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapse4"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapse4"
                        >
                          Optionale Ausstattung
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapse4"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Fahrrad-Reparaturstation</li>
                            <li>Ladesteckdose</li>
                            <li>Dachbegrünung</li>
                            <li>Mechanisches Türschloss</li>
                            <li>Photovoltaik-Anlage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header accordion-button-h">
                        <button
                          className="accordion-button collapsed accordion-button-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapse5"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapse5"
                        >
                          Produktunterlagen zum Download
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapse5"
                        className="accordion-collapse collapse"
                      >
                        <div
                          className="accordion-body"
                          style={{ fontSize: 20 }}
                        >
                          <i
                            className="bi bi-download"
                            style={{ color: "#CD2B23", marginRight: 5 }}
                          />
                          <a
                            className="download-link"
                            target="_blank"
                            href="/fahrradparksysteme?tx_kienzlercart_kienzlercart%5Baction%5D=show&tx_kienzlercart_kienzlercart%5Bcontroller%5D=GeneratePdf&tx_kienzlercart_kienzlercart%5Bproduct%5D=20&tx_kienzlercart_kienzlercart%5Btype%5D=product&type=1954&cHash=c1e7f04396e1fad4f2aaaf7e284ac1bb"
                          >
                            Produktdatenblatt herunterladen
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="OptionalAccessories pt-5 mt-5"
              id="OptionalAccessories"
            >
              <h1>Optional Accessories</h1>

              <div className="Carousel-Desktop">
                <ProductCarousel />
              </div>
              <div
                className="Digital-Responsive d-flex flex-column Carousel-responsive"
                id="digital"
              >
                <Mobileproductpage />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact form section */}
      <ContactForm />
      {/* Newsletter section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-content">
              <h4>
                <i className="bi bi-newspaper" /> Jetzt zum vierteljährlichen
                Newsletter anmelden.
              </h4>
            </div>
            <div className="action-btn">
              <a href="#" className="btn btn-link bg-white text-dark">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
