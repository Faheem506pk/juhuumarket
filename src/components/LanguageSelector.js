import React, { useState } from "react";

const LanguageSelector = ({ onChangeLanguage }) => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onChangeLanguage(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleLanguageChange}
    style={{ marginRight: '40px' }}>
      <option value="en">English</option>
      <option value="de">German</option>
      <option value="fr">French</option>
    </select>
  );
};

export default LanguageSelector;
