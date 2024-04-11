//ProductOverviewPage.js

import { Link, NavLink } from "react-router-dom";
import LanguageSelector from './LanguageSelector';
import React from "react";
import ContactForm from "./ContactForm";
import Productpagegrid from "./productpagegrid";
import ProductCarousel from "./productPage";
import AnalogueProductCarousel from "./analogue";
import Mobileproductpage from "./mobile_productpage";
import MobileAnalogueProductCarousel from "./mobile_analogue";

import "../assets/css/style.css";



export default function Product_overview_page({language}){

  

    return(
<>

  

  <section className="product-details">
    <div className="container">
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
          <Link to="https://juhuu.app/">
              <span>Juhuu</span>
              </Link>
          </li>
          <li className="breadcrumb-item">
          
            
              <span>App</span>
            
            
          </li>
          
        </ol>
      </nav>
      <div className="Beschreibung mt-5">
      {/* <Test/> */}
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
        
        <div className="mt-4 d-flex justify-content-center responsive-scrollspy">
          <a
            className="btn bg-dark text-white btn-lg px-5 mx-2 responsive-scrollspy"
            href="#digital"
          >
            Digital
          </a>
          <a
            className="btn bg-dark text-white btn-lg px-5 mx-2 responsive-scrollspy"
            href="#Analogue"
          >
            Analogue
          </a>
          
        </div>
        <nav className="sticky-top d-none d-xxl-block bg-white ">
          <ul className="nav nav-pills nav-fill nav-sideline product-nav ">
            <li className="nav-item ">
              <a className="btn bg-dark text-white btn-lg btn-block w-75" href="#digital">
                digital
              </a>
            </li>
            <li className="nav-item">
              <a className="btn bg-dark text-white btn-lg btn-block w-75" href="#Analogue">
                Analogue
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
            <Productpagegrid language={language} />
            
          </div>

        
          <div className="Analogue pt-5 mt-5 " id="Analogue">
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
            <Productpagegrid language={language}  />
            
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
            <i className="bi bi-newspaper" /> Jetzt zum Newsletter anmelden und am laufenden bleibenEvery
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