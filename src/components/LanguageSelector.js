import React, { useState } from "react";
import "../assets/css/style.css";
const LanguageSelector = ({ onChangeLanguage }) => {
  const [language, setLanguage] = useState("de");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onChangeLanguage(selectedLanguage);
  };

  return (
    <select className="btn translation-button"  value={language} onChange={handleLanguageChange}
    style={{ marginRight: '40px' }}>
      <option value="en">English</option>
      <option value="de">German</option>
      {/* <option value="fr">French</option> */}
    </select>
  );
};

export default LanguageSelector;
