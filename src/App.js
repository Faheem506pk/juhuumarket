//App.js

import React , { useState }from 'react';
import {  Routes, Route } from 'react-router-dom';
import ProductOverviewPage from './components/ProductOverviewPage';
import Header from './components/header';
import Footer from './components/Footer';
import ProductDetailsPage from './components/ProductDetailsPage';
import { TranslationProvider } from './components/TranslationContext';
import LanguageSelector from './components/LanguageSelector';
import Bikepage from './components/Filter/bike/bikepage';
import Scooterpage from './components/Filter/Scooter/Scooterpage';
import FilterPage from './components/Filter/Filterpage';
import NewsletterSignup from './components/NewsletterSignup';

function App() {
  const [language, setLanguage] = useState("de");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (<div className="App">
<TranslationProvider>
  
    <Header />
    <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div></div> {/* Left side content */}
          <LanguageSelector  onChangeLanguage={handleLanguageChange}  /> {/* Right side content */}
        </div>
    <Routes>
    <Route path="/" element={<ProductOverviewPage language={language} />} />
    
    <Route path="/v1/products/:productId" element={<ProductDetailsPage language={language}/>} />
    <Route path="/v1/products/:categoryType/:productId" element={<ProductDetailsPage language={language}/>} />
    <Route path="/v1/products/Bike" element={<Bikepage  language={language} />} />
    <Route path="/v1/products/Scooter" element={<Scooterpage  language={language} />} />
    <Route path="/filter" element={<FilterPage  language={language} />} />
    

    </Routes>
    <NewsletterSignup language={language}/>
    <Footer language={language}/>

    
    
    </TranslationProvider>
    
   
</div>
  );
}

export default App;
