import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/style.css";

const NewsletterSignup = ({ language }) => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setErrorMessage("Please agree to the privacy policy.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_sdrpbke",
        "template_newslettersign",
        e.target,
        "u2A2El51hkznvTwCJ"
      );
      setSuccessMessage("Your email was sent successfully!");
      setEmail("");
      setIsChecked(false);
      setErrorMessage("");
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    }
  };

  const renderLanguageSpecificText = () => {
    if (language === "en") {
      return {
        placeholder: "Your email address",
        declaration: "By submitting the registration, I declare myself in accordance with the",
        dataProtection: "Data protection",
        processingAgreement: "I agree to the processing of my data",
        subscribe: "Subscribe to the newsletter:"
      };
    } else if (language === "de") {
      return {
        placeholder: "Ihre Email Adresse",
        declaration: "Mit dem Absenden der Anmeldung erkläre ich mich entsprechend der",
        dataProtection: "Datenschutzerklärung",
        processingAgreement: "mit der Verarbeitung meiner Daten einverstanden",
        subscribe: "Zum Newsletter anmelden:"
      };
    }
  };

  const {
    placeholder,
    declaration,
    dataProtection,
    processingAgreement,
    subscribe
  } = renderLanguageSpecificText();

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-content" style={{ fontSize: "24px", color: "white" }}>
              <h2>
                <i className="bi bi-newspaper" /> {subscribe}
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="action-btn">
              <form onSubmit={handleSubmit}>
                <div className="line d-flex align-items-center justify-content-between mb-2">
                  <input
                    className="email form-control"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    required
                    style={{ width: "100%" }} // Adjust the width as needed
                  />
                  <button className="btn btn-link bg-white text-dark" type="submit" style={{ marginLeft: "10px" }}>
                    <i className="bi bi-arrow-right" />
                  </button>
                </div>
                <div className="line d-flex align-items-center">
                  <div className="privacy-checkbox">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="privacyPolicy"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      required
                    />
                  </div>
                  <label htmlFor="privacyPolicy" className="privacy small" style={{ color: "white", marginLeft: "10px" }}>
                    {declaration}{" "}
                    <a
                      style={{ color: "white", textDecoration: "underline" }}
                      href="https://juhuu-bikebox.at/en/legal"
                    >
                      {dataProtection}
                    </a>{" "}
                    {processingAgreement}.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
