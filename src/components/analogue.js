import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const AnalogueProductCarousel = () => {
 
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
  
  const navigate = useNavigate();
  const handleBuyNow = (product) => {
    // Redirect to product overview page and pass product data as state
    navigate('/product', { state: { product } });
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
    <div id="carouselExampleIndicators2" className="carousel slide mt-5 Carousel-Desktop container" data-bs-interval="false">
    <div className="carousel-inner">
      {chunkedProducts.map((chunk, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <div className="row justify-content-center carousel-product">
            {chunk.map((product, productIndex) => (
              <div key={productIndex} className="col-lg-4 col-md-6">
                <div className="card col mx-1 h-100 d-flex flex-column">
                  <div className="carousel-image">
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
                      <a className="btn container-fluid bg-dark mt-2 text-white" onClick={() => handleBuyNow(product)}>Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators2"
      data-bs-slide="prev"
    >
      <span className="bi bi-arrow-left-circle-fill text-black fs-1 rounded-5" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators2"
      data-bs-slide="next"
    >
      <span className="bi bi-arrow-right-circle-fill text-black fs-1 rounded-5" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
}

export default AnalogueProductCarousel;