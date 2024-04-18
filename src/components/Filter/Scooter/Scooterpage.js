//Bikepage.js

import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "../../LanguageSelector";
import React from "react";
import ContactForm from "../../ContactForm";
import Scooterpagegrid from "./Scooterpagegrid";
import ProductCarousel from "../../productPage";
import AnalogueProductCarousel from "../../analogue";
import Mobileproductpage from "../../mobile_productpage";
import MobileAnalogueProductCarousel from "../../mobile_analogue";
import "../../../assets/css/style.css";


const Scooterpage = ({language}) =>{

  

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
          
            
              <span>Scooter</span>
            
            
          </li>
          
        </ol>
      </nav>
      <div className="Beschreibung mt-5">
      {/* <Test/> */}
        <h1>Beschreibung</h1>
        <p>
          Scooter
        </p>
        Scooter
        <p />
      </div>
      <div className=" row d-flex my-3">
        
        <div className="mt-4 d-flex justify-content-center responsive-scrollspy">
          <a
            className="btn bg-dark text-white btn-lg px-5 mx-2 mb-3 responsive-scrollspy"
            href="#digital"
          >
            Digital
          </a>
          <a
            className="btn bg-dark text-white btn-lg px-5 mx-2 mb-3 responsive-scrollspy"
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
          <div className="Digital mt-0 justified-text" id="digital">
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
            <Scooterpagegrid language={language} />
            
          </div>

        
          <div className="Analogue pt-5 mt-5 justified-text" id="Analogue">
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
            <Scooterpagegrid language={language}  />
            
          </div>
        </div>
      </div>
    </div>
  </section>

  <ContactForm language={language}/>







  
 
</>






    );
}

export default Scooterpage;