//App.js

import React , { useState }from 'react';
import {  Routes, Route } from 'react-router-dom';
import ProductOverviewPage from './components/ProductOverviewPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetailsPage from './components/ProductDetailsPage';
import { TranslationProvider } from './components/TranslationContext';
import LanguageSelector from './components/LanguageSelector';



function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (<div className="App">
<TranslationProvider>
    <Header/>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div></div> {/* Left side content */}
  <LanguageSelector onChangeLanguage={handleLanguageChange}   /> {/* Right side content */}
</div>

    <Routes>
    <Route path="/" element={<ProductOverviewPage language={language} />} />
    
    <Route path="/product/:productId" element={<ProductDetailsPage language={language}/>} />


    </Routes>
    
    <Footer/>

    
    </TranslationProvider>
    
   
</div>
  );
}

export default App;
