import Product from './components/product';
import Header from './components/header';
import Product_overview_page from './components/product_overview_page';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Footer from './components/footer';
import ProductDetailsPage from './components/ProductDetailsPage';

import './assets/css/style.css';


function App() {
  return (<div className="App">

    <Header/>
    <Routes>
    <Route path="/" element={<Product_overview_page/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/product/:productId" element={<ProductDetailsPage />} />


    </Routes>
    
    <Footer/>

    
    
    
    <>
  
</>
</div>
  );
}

export default App;
