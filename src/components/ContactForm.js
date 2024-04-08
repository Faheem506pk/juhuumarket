import React, { useState, useRef , useEffect} from "react";

import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Form from "react-bootstrap/Form";

import "../assets/css/style.css";

const ContactForm = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/https://api.juhuu.app/v1/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts
  
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    firma: "",
    message: "",
    selectedOptions: [], // New field for selected options
  });
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // If it's a dropdown, handle multiple selections
    if (type === "select-multiple") {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error message when user starts typing
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verify reCAPTCHA
      const recaptchaResponse = await captchaRef.current.executeAsync();
      if (!recaptchaResponse) {
        setErrorMessage("Please verify that you are human.");
        return;
      }

      const errors = validateForm(formData);
      if (Object.keys(errors).length === 0) {
        // Form is valid, submit data
        await emailjs.sendForm(
          "service_juhuu",
          "template_y4kxt0t",
          e.target,
          "x1CkM_Xgsx3Yo2puh"
        );
  
        // Second recipient
        await emailjs.sendForm(
          "service_sdrpbke",
          "template_0bxinnz",
          e.target,
          "u2A2El51hkznvTwCJ"
        );
        setFormData({
          vorname: "",
          nachname: "",
          email: "",
          firma: "",
          message: "",
          selectedOptions: [], // Clear selected options
        });
        captchaRef.current.reset();
        setSuccessMessage("Your email was sent successfully!");
        setErrorMessage("");
      } else {
        // Form is invalid, display error messages
        setFormErrors(errors);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.vorname.trim()) {
      errors.vorname = "Vorname is required";
    }
    if (!data.nachname.trim()) {
      errors.nachname = "Nachname is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.firma.trim()) {
      errors.firma = "Firma is required";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const captchaRef = useRef(null); // Create a ref using useRef

  return (
    <section className="ftco-section pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center my-5">
            <h1 className="heading-section display-1" style={{ fontWeight: "bolder" }}>
              Contact Us
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h1 className="heading-section" style={{ fontWeight: "bold" }}>
              Kontakt
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row mb-1">
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="">
                      <a
                        href="mailto:office@juhuu.app"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <span
                          className="fa fa-envelope fa-3x"
                          style={{ marginBottom: 10 }}
                        />
                      </a>
                    </div>
                    <a
                      href="mailto:office@juhuu.app"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className="text">
                        <p> office@juhuu.app</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="">
                      <a
                        href="tel:+436609919009"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <span
                          className="fa fa-phone fa-3x"
                          style={{ marginBottom: 10 }}
                        />
                      </a>
                    </div>
                    <a
                      href="tel:+436609919009"
                      style={{ textDecoration: "none", color: "black" }}
                    ></a>
                    <div className="text">
                      <a
                        href="tel:+436609919009"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p> +43&nbsp;660&nbsp;9919&nbsp;009 </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="">
                      <a
                        href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {" "}
                        <span
                          className="fab fa-linkedin fa-3x"
                          style={{ marginBottom: 10 }}
                        />
                      </a>
                    </div>
                    <a
                      href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                      style={{ textDecoration: "none", color: "black" }}
                    ></a>
                    <div className="text">
                      <a
                        href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                        style={{ textDecoration: "none", color: "black" }}
                      ></a>
                      <p>
                        <a
                          href="https://www.linkedin.com/company/juhuu/?originalSubdomain=at"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          @juhuu
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="">
                      <a
                        href="https://www.instagram.com/juhuu.app/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <span
                          className="fa-brands fa-instagram fa-3x"
                          style={{ marginBottom: 10 }}
                        />
                      </a>
                    </div>
                    <a
                      href="https://www.instagram.com/juhuu.app/"
                      style={{ textDecoration: "none", color: "black" }}
                    ></a>
                    <div className="text">
                      <a
                        href="https://www.instagram.com/juhuu.app/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>@juhuu_app</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    {/* <h4 className="mb-4 fs-1" id="get-in-touch-sec3-h1">
                      Contact Us
                    </h4> */}
                    <div id="form-message-warning" className="mb-4">
                      {errorMessage && <p>{errorMessage}</p>}
                    </div>
                    <div id="form-message-success" className="mb-4">
                      {successMessage && (
                        <p>Your message was sent, thank you!</p>
                      )}
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label
                              className="label fw-bold fs-5 mb-1"
                              htmlFor="vorname"
                              id="get-in-touch-sec3-h1_h1"
                            >
                              Vorname
                            </label>
                            <input
                              type="text"
                              className={`form-control ${
                                formErrors.vorname && "is-invalid"
                              }`}
                              name="vorname"
                              id="vorname"
                              placeholder="Vorname"
                              value={formData.vorname}
                              onChange={handleChange}
                            />
                            {formErrors.vorname && (
                              <div className="invalid-feedback">
                                {formErrors.vorname}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label
                              className="label fw-bold fs-5 mb-1"
                              htmlFor="nachname"
                              id="get-in-touch-sec3-h1_h2"
                            >
                              Nachname
                            </label>
                            <input
                              type="text"
                              className={`form-control ${
                                formErrors.nachname && "is-invalid"
                              }`}
                              name="nachname"
                              id="nachname"
                              placeholder="Nachname"
                              value={formData.nachname}
                              onChange={handleChange}
                            />
                            {formErrors.nachname && (
                              <div className="invalid-feedback">
                                {formErrors.nachname}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label
                              className="label fw-bold fs-5 mb-1"
                              htmlFor="email"
                              id="get-in-touch-sec3-h1_h4"
                            >
                              E-mail
                            </label>
                            <input
                              type="text"
                              className={`form-control ${
                                formErrors.email && "is-invalid"
                              }`}
                              name="email"
                              id="email"
                              placeholder="E-mail"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {formErrors.email && (
                              <div className="invalid-feedback">
                                {formErrors.email}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label
                              className="label fw-bold fs-5 mb-1"
                              htmlFor="subject"
                              id="get-in-touch-sec3-h1_h4"
                            >
                              Firma
                            </label>
                            <input
                              type="text"
                              className={`form-control ${
                                formErrors.firma && "is-invalid"
                              }`}
                              name="firma"
                              id="firma"
                              placeholder="Firma"
                              value={formData.firma}
                              onChange={handleChange}
                            />
                            {formErrors.firma && (
                              <div className="invalid-feedback">
                                {formErrors.firma}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label className="label fw-bold fs-5 mb-1" htmlFor="selectedOptions">
                              Products
                            </label>
                            <Form.Select
                              aria-label="Default select example"
                              value={formData.selectedOptions}
                              onChange={handleChange}
                              name="selectedOptions"
                            >
                              <option>Choose Product</option>
                              {products.map((products) => (
                                <option key={products.id} value={products.name}>
                                  {products.name}
                                </option>
                              ))}
                            </Form.Select>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label
                              className="label fw-bold fs-5 mb-1"
                              htmlFor="#"
                              id="get-in-touch-sec3-h1_h5"
                            >
                              Message
                            </label>
                            <textarea
                              name="message"
                              className={`form-control ${
                                formErrors.message && "is-invalid"
                              }`}
                              id="message"
                              cols={30}
                              rows={4}
                              placeholder="Message"
                              defaultValue={""}
                              value={formData.message}
                              onChange={handleChange}
                            />
                            {formErrors.message && (
                              <div className="invalid-feedback">
                                {formErrors.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <ReCAPTCHA
                            ref={captchaRef}
                            sitekey="6Le9wKYpAAAAAI4dcXqJVLEV_HShmhhcttSdYICF"
                            size="invisible"
                          />
                        </div>
                        {errorMessage && (
                          <div className="text-danger">{errorMessage}</div>
                        )}
                        {successMessage && (
                          <div className="text-success">{successMessage}</div>
                        )}
                        <div
                          className="error-message"
                          style={{ color: "red !important" }}
                        />
                        <div
                          className="success-popup"
                          style={{ display: "none", color: "green !important" }}
                        >
                          <p id="get-in-touch-sec3-p_p1">
                            Your email was sent successfully!
                          </p>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              defaultValue="ABSENDEN"
                              className="btn btn-submit text-white fw-bold mt-2 mb-2"
                              style={{ backgroundColor: "#7017ff !important" }}
                              onclick="sendMail()"
                            />
                            <div className="submitting" />
                          </div>
                        </div>
                        <p id="get-in-touch-sec3-p_p2">
                          Ich stimme zu, dass meine Angaben zur Beantwortung
                          meiner Anfrage erhoben und verarbeitet werden. Weitere
                          Informationen finden Sie in der Datenschutzerklärung.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch form-img">
                  <div
                    className="info-wrap w-100 p-5 img"
                    style={{
                      backgroundImage: "url(/assets/img/images/logo.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
