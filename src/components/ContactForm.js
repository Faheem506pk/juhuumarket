import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    firma: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data
      console.log('Form data:', formData);
      // You can submit the form data to your backend or perform any other actions here
      // Reset form state
      setFormData({
        vorname: '',
        nachname: '',
        email: '',
        firma: '',
        message: ''
      });
    } else {
      // Form is invalid, display error messages
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.vorname.trim()) {
      errors.vorname = 'Vorname is required';
    }
    if (!data.nachname.trim()) {
      errors.nachname = 'Nachname is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
    if (!data.firma.trim()) {
      errors.firma = 'Firma is required';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h1 className="heading-section" style={{ fontWeight: "bolder" }}>
            Kontakt
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row mb-5">
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
                  <h4 className="mb-4" id="get-in-touch-sec3-h1">
                    Contact Us
                  </h4>
                  <div id="form-message-warning" className="mb-4" />
                  <div id="form-message-success" className="mb-4">
                    <p id="get-in-touch-sec3-p">
                      Your message was sent, thank you!
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="vorname"
                            id="get-in-touch-sec3-h1_h1"
                          >
                            Vorname
                          </label>
                          <input
                              type="text"
                              className={`form-control ${formErrors.vorname && 'is-invalid'}`}
                              name="vorname"
                              id="vorname"
                              placeholder="Vorname"
                              value={formData.vorname}
                              onChange={handleChange}
                            />
                            {formErrors.vorname && <div className="invalid-feedback">{formErrors.vorname}</div>}
                          </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="nachname"
                            id="get-in-touch-sec3-h1_h2"
                          >
                            Nachname
                          </label>
                          <input
                              type="text"
                              className={`form-control ${formErrors.nachname && 'is-invalid'}`}
                              name="nachname"
                              id="nachname"
                              placeholder="Nachname"
                              value={formData.nachname}
                              onChange={handleChange}
                            />
                            {formErrors.nachname && <div className="invalid-feedback">{formErrors.nachname}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="email"
                            id="get-in-touch-sec3-h1_h4"
                          >
                            E-mail
                          </label>
                          <input
                              type="text"
                              className={`form-control ${formErrors.email && 'is-invalid'}`}
                              name="email"
                              id="email"
                              placeholder="E-mail"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                        
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="subject"
                            id="get-in-touch-sec3-h1_h4"
                          >
                            Firma
                          </label>
                          <input
                              type="text"
                              className={`form-control ${formErrors.firma && 'is-invalid'}`}
                              name="firma"
                              id="firma"
                              placeholder="Firma"
                              value={formData.firma}
                              onChange={handleChange}
                            />
                            {formErrors.firma && <div className="invalid-feedback">{formErrors.firma}</div>}
                        
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            className="label"
                            htmlFor="#"
                            id="get-in-touch-sec3-h1_h5"
                          >
                            Message
                          </label>
                          <textarea
                            name="message"
                            className={`form-control ${formErrors.message && 'is-invalid'}`}
                            id="message"
                            cols={30}
                            rows={4}
                            placeholder="Message"
                            defaultValue={""}
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                        </div>
                      </div>
                      <div
                        className="g-recaptcha"
                        data-sitekey="6Ldg-ccoAAAAACGSOy0mXeMkyySJI_rC4IHFmwvq"
                        style={{ marginBottom: 10 }}
                      />
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
                            className="btn btn-primary"
                            style={{ backgroundColor: "#881BFB !important" }}
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
                  style={{ backgroundImage: "url(assets/images/logo.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ContactSection;
