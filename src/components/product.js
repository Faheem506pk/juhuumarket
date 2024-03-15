import { Link, NavLink } from "react-router-dom";


import ContactForm from "./ContactForm";


export default function Product(){
    return(
<>

  
  
  <section className="product-details">
    <div className="container">
      <div className="Beschreibung mt-5">
        <h1>Beschreibung</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint rem
          deleniti nostrum, perspiciatis aspernatur eos! Deserunt veniam fugiat
          odio error similique nihil, nisi dicta soluta, voluptatum quaerat
          tempore laudantium. Dolorem asperiores officiis nemo excepturi
          pariatur omnis, inventore cum, exercitationem ex similique corporis.
          Sapiente, provident quaerat culpa ducimus quod ipsam rem veritatis eum
          illum ipsum consectetur corrupti cum, iure officia?
        </p>
        Dolorem asperiores officiis nemo excepturi pariatur omnis, inventore
        cum, exercitationem ex similique corporis. Sapiente, provident quaerat
        culpa ducimus quod ipsam rem veritatis eum illum ipsum consectetur
        corrupti cum, iure officia?
        <p />
      </div>
      <div className=" row d-flex my-3">
        <h1>Beschreibung</h1>
        <div className="mt-3 d-flex justify-content-center responsive-scrollspy">
          <a
            className="btn border border-5 px-5 mx-2 responsive-scrollspy"
            href="#digital"
          >
            Digital
          </a>
          <a
            className="btn border border-5 px-5 mx-2 responsive-scrollspy"
            href="#Analogue"
          >
            Analogue
          </a>
          <a
            className="btn border border-5 px-5 mx-2 responsive-scrollspy"
            href="#Ausstattung"
          >
            Ausstattung
          </a>
        </div>
        <nav className="sticky-top d-none d-xxl-block bg-white ">
          <ul className="nav nav-pills nav-fill nav-sideline product-nav ">
            <li className="nav-item ">
              <a className="nav-link nav-link-in" href="#digital">
                digital
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-in" href="#Analogue">
                Analogue
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-in" href="#Ausstattung">
                Ausstattung
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
          <div className="Digital mt-0" id="digital">
            <h1>Digital</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint
              rem deleniti nostrum, perspiciatis aspernatur eos! Deserunt veniam
              fugiat odio error similique nihil, nisi dicta soluta, voluptatum
              quaerat tempore laudantium. Dolorem asperiores officiis nemo
              excepturi pariatur omnis, inventore cum, exercitationem ex
              similique corporis. Sapiente, provident quaerat culpa ducimus quod
              ipsam rem veritatis eum illum ipsum consectetur corrupti cum, iure
              officia? Dolorem asperiores officiis nemo excepturi pariatur
              omnis, inventore cum, exercitationem ex similique corporis.
              Sapiente, provident quaerat culpa ducimus quod ipsam rem veritatis
              eum illum ipsum consectetur corrupti cum, iure officia?
            </p>
            <div
              id="carouselExampleIndicators"
              className="carousel slide mt-5 Carousel-Desktop"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row carousel-product">
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product">
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product">
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
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
                data-bs-target="#carouselExampleIndicators"
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
          <div className="Digital-Responsive d-flex flex-column" id="digital">
            <div
              id="carouselExampleIndicators1"
              className="carousel slide mt-5 px-0 col-6 Carousel-responsive"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row carousel-product px-0">
                    <div className="mx-0">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body  px-0">
                        <h5>Bike and Ride box</h5>
                        <h5>B1 Cubes Einstockig</h5>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product  px-0">
                    <div className="mx-0">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body  px-0">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product  px-0">
                    <div className="mx-0">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body  px-0">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
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
                data-bs-target="#carouselExampleIndicators1"
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
          <div className="Analogue pt-5 mt-5" id="Analogue">
            <h1>Analogue</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint
              rem deleniti nostrum, perspiciatis aspernatur eos! Deserunt veniam
              fugiat odio error similique nihil, nisi dicta soluta, voluptatum
              quaerat tempore laudantium. Dolorem asperiores officiis nemo
              excepturi pariatur omnis, inventore cum, exercitationem ex
              similique corporis. Sapiente, provident quaerat culpa ducimus quod
              ipsam rem veritatis eum illum ipsum consectetur corrupti cum, iure
              officia? Dolorem asperiores officiis nemo excepturi pariatur
              omnis, inventore cum, exercitationem ex similique corporis.
              Sapiente, provident quaerat culpa ducimus quod ipsam rem veritatis
              eum illum ipsum consectetur corrupti cum, iure officia?
            </p>
            <div
              id="carouselExampleIndicators2"
              className="carousel slide mt-5 Carousel-Desktop"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row carousel-product">
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product">
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product">
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                    <div className="card col mx-2">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators2"
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
                data-bs-target="#carouselExampleIndicators2"
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
          <div className="Analogue-Responsive d-flex flex-column" id="Analogue">
            <div
              id="carouselExampleIndicators3"
              className="carousel px-0 slide mt-5 col-6 Carousel-responsive"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row carousel-product  px-0">
                    <div className="mx-0">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body  px-0">
                        <h5>Bike and Ride box</h5>
                        <h5>B1 Cubes Einstockig</h5>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product  px-0">
                    <div className="mx-0">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body  px-0">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row carousel-product  px-0">
                    <div className="mx-0">
                      <img
                        src="./assets/images/Bike-Container.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body px-0">
                        <h4>Bike and Ride box</h4>
                        <h4>B1 Cubes Einstockig</h4>
                        <ul>
                          <li>
                            Flexible Module System for furrhader &amp; E-bikes
                          </li>
                          <li>sichersters Radparksystem durch Einzelboxen</li>
                          <li>Empfohlene ADFC-Qualitat nach DIN</li>
                        </ul>
                        <button className="btn container-fluid bg-dark mt-2 text-white ">
                          Buy this Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
        </div>
      </div>
    </div>
  </section>

  <ContactForm/>






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
}