import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import "../assets/css/style.css";
import products from './data';

const Productpagegrid = () => {
  
  const navigate = useNavigate();
  
  const handleBuyNow = (productId) => {
    // Redirect to product overview page with product ID in the URL
    navigate(`/product/${productId}`);
  };

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  };

  const chunkedProducts = chunkArray(products, 3);

  const [expandedText, setExpandedText] = useState({});

  const toggleExpand = (index) => {
    setExpandedText((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  // Function to limit the number of words in text
  const limitWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };
  

  return (
    <div className="mt-5 product-section">
      {chunkedProducts.map((chunk, index) => (
        <div key={index} className="row justify-content-center">
          {chunk.map((product, productIndex) => (
            <div key={productIndex} className="col-lg-4 col-md-6">
              <div className="card col mx-1 h-100 d-flex flex-column">
                <div className="carousel-image justify-content-center d-flex">
                  <img src={product.bannerImageDark[0]} className="card-img-top" alt={product.name} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text flex-grow-1">
                    {expandedText[`${index}-${productIndex}`] ?
                      product.previewText.en :
                      limitWords(product.previewText.en, 15)}
                  </p>
                  <div className="mt-auto">
                    {!expandedText[`${index}-${productIndex}`] &&
                      <a onClick={() => toggleExpand(`${index}-${productIndex}`)} className="btn ">Read More</a>
                    }
                    {expandedText[`${index}-${productIndex}`] &&
                      <a onClick={() => toggleExpand(`${index}-${productIndex}`)} className="btn ">Read Less</a>
                    }
                    <button onClick={() => handleBuyNow(product.id)} className="btn container-fluid bg-dark mt-2 text-white">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Productpagegrid;
