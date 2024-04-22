import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./ContactForm";
import ProductCarousel from "./productPage";
import Mobileproductpage from "./mobile_productpage";
import { useNavigate } from 'react-router-dom';
import ModelViewer from "./ModelViewer";

import "../assets/css/style.css";

const ProductDetailsPage = ({ language }) => {

  const { productId, categoryType } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  const [expandedText, setExpandedText] = useState({});
  const navigate = useNavigate();


  const toggleExpand = (index) => {
    setExpandedText((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const limitWords = (text, limit) => {
    if (!text) {
      return '';
    }
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.juhuu.app/v1/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <div className="loader-container"><div className="loader"></div></div>;
  }

  if (!product) {
    return <div>No data available</div>;
  }



  let breadcrumbText = "";
  let breadcrumbLink = "";
  if (categoryType === "Bike") {
    breadcrumbText = "Bike";
    breadcrumbLink = "/v1/products/Bike";
  } else if (categoryType === "Scooter") {
    breadcrumbText = "Scooter";
    breadcrumbLink = "/v1/products/Scooter";
  }
  else {
    breadcrumbText = "Products";
    breadcrumbLink = "/";
  }




  const modelSrc = product.product.model3d;
  const handle3DModelButtonClick = () => {
    // Check if the model source is available
    if (modelSrc) {
      // Open the model source link in a new tab
      window.open(modelSrc, '_blank');
    } else {
      // Handle case when model source is not available
      console.error('3D model source is not available.');
      // You can show an alert or any other appropriate feedback to the user
    }
  };

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
                <a href={breadcrumbLink}>{breadcrumbText}</a>
              </li>
              <li className="breadcrumb-item active">
                {product.product.name}
              </li>
            </ol>

          </nav>
          {/* Product title */}
          <h1 className="h2 product-title">
            <span>{product && product.product.name}</span>


          </h1>


          <div className="Digital-Responsive d-flex flex-column Carousel-responsive-detailpage-main">
      <div id="carouselExampleIndicators3" className="carousel slide mt-0 d-flex justify-content-center container" data-bs-ride="carousel">
        <div className="carousel-inner">
          {product.product.bannerImageDark.map((image, index) => (
            <div className={`carousel-item d-flex justify-content-center carousel-item-main-img ${index === 0 ? "active" : ""}`} key={index}>
              {/* Conditionally render 3D model or banner image */}
              {modelSrc ? (
                <ModelViewer src={modelSrc} />
              ) : (
                <img src={image} className="card-img-top" alt={`Slide ${index}`} />
              )}
            </div>
          ))}
        </div>
        <button className="carousel-control-prev carousel-control-prev-responsive-main" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
          <span className="bi bi-arrow-left-circle-fill text-black fs-1 rounded-5" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next carousel-control-next-responsive-main" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
          <span className="bi bi-arrow-right-circle-fill text-black fs-1 rounded-5" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
<div className="button">
  <button type="button" className="btn btn-danger rounded-0"onClick={handle3DModelButtonClick}>Download 3D model</button>
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
                <div className="col-md-6 justified-text">
                  <h3>Description</h3>
                  <p>

                    {product && product.product.description && product.product.description[language]
                      ? product.product.description[language]
                      : 'Description not available'}
                  </p>{" "}
                  {/* Assuming "en" is for English */}
                </div>
                <div className="col-md-5 highlights">
                  <h3>Highlights</h3>
                  <div>
                    {product && product.product.highlights && product.product.highlights[language]
                      ? product.product.highlights[language]
                      : 'No highlights available'}
                  </div>

                </div>
                <div className="section-detail mt-5 " id="ProductDataSheets">
                  <h3 className="ProductDataSheets-1">Produkt Informationen</h3>
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                   
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
                          Techische Unterlagen Download
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
                            href={product.product.datasheet[language]}
                          >

                            {language === 'en' ? 'Download product data sheet' : language === 'de' ? 'Produktdatenblatt herunterladen' : language === 'fr' ? 'Télécharger la fiche produit' : ''}
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
                <ProductCarousel language={language} />
              </div>
              <div
                className="Digital-Responsive d-flex flex-column Carousel-responsive"
                id="digital"
              >
                <Mobileproductpage language={language} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact form section */}
      <ContactForm language={language} />
      {/* Newsletter section */}

    </>
  );
};

export default ProductDetailsPage;
