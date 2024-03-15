import Product from './components/product';
import Header from './components/header';
import Product_overview_page from './components/product_overview_page';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Footer from './components/footer';

import './assets/css/style.css';


function App() {
  return (<div className="App">

    <Header/>
    <Routes>
    <Route path="/" element={<Product/>} />
    <Route path="Product_overview_page" element={<Product_overview_page/>} />



    </Routes>
    
    <Footer/>

    
    
    
    <>
  
</>
</div>
  );
}

export default App;
