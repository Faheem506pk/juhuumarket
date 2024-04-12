import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const FilterPage = ({ language }) => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({
    categoryArray: [],
    modalityArray: [],
    sectorArray: [],
  });
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedText, setExpandedText] = useState({});

  const handleBuyNow = (productId) => {
    // Redirect to product overview page with product ID and category type in the URL

    navigate(`/v1/products/${productId}`);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const handleCheckboxChange = (filterType, filterValue) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: prevState[filterType].includes(filterValue)
        ? prevState[filterType].filter((value) => value !== filterValue)
        : [...prevState[filterType], filterValue],
    }));
  };

  const handleSubmit = () => {
    const filterParams = Object.entries(selectedFilters)
      .filter(([_, value]) => value.length > 0)
      .map(([key, value]) => `${key}=${value.join(",")}`)
      .join("&");
    fetchProducts(filterParams);
  };

  const toggleExpand = (index) => {
    setExpandedText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const limitWords = (text, limit) => {
    if (!text) {
      return "";
    }
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const fetchProducts = async (filterParams = "") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.juhuu.app/v1/products?${filterParams}`
      );
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="mt-5 product-section">
      <div className="container mt-2 mb-4">
        {/* Filter options */}
        <h2 className="mb-4">Filter Page</h2>
        <div className="row mb-4">
          {/* Category filter */}
          <div className="col">
            <h4>Category:</h4>
            {["bike", "car", "scooter", "boat", "moped"].map((category) => (
              <div key={category} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedFilters.categoryArray.includes(category)}
                  onChange={() =>
                    handleCheckboxChange("categoryArray", category)
                  }
                />
                <label className="form-check-label">{category}</label>
              </div>
            ))}
          </div>
          {/* Modality filter */}
          <div className="col">
            <h4>Modality:</h4>
            {["charge", "store", "share", "wash", "repair"].map((modality) => (
              <div key={modality} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedFilters.modalityArray.includes(modality)}
                  onChange={() =>
                    handleCheckboxChange("modalityArray", modality)
                  }
                />
                <label className="form-check-label">{modality}</label>
              </div>
            ))}
          </div>
          {/* Sector filter */}
          <div className="col">
            <h4>Sector:</h4>
            {["tourism", "mobility", "sport"].map((sector) => (
              <div key={sector} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedFilters.sectorArray.includes(sector)}
                  onChange={() => handleCheckboxChange("sectorArray", sector)}
                />
                <label className="form-check-label">{sector}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Submit button */}
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Apply Filters
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Map through products and render each product */}
          {products.map((product, index) => (
            <div
              key={index}
              className="cards col-lg-4 col-md-6 col-sm-6 col-12"
            >
              <div className="card col mx-0 h-100 d-flex flex-column">
                <div className="carousel-image card-image justify-content-center d-flex">
                  <img
                    src={product.bannerImageDark[0]}
                    className="card-img-top"
                    alt={product.name}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text flex-grow-1">
                    {expandedText[`${index}`]
                      ? product.previewText[language]
                      : limitWords(product.previewText[language], 15)}
                  </p>
                  <div className="mt-auto">
                    {!expandedText[`${index}`] && (
                      <a
                        onClick={() => toggleExpand(`${index}`)}
                        className="btn "
                      >
                        Read More
                      </a>
                    )}
                    {expandedText[`${index}`] && (
                      <a
                        onClick={() => toggleExpand(`${index}`)}
                        className="btn "
                      >
                        Read Less
                      </a>
                    )}
                    <button
                      onClick={() => handleBuyNow(product.id)}
                      className="btn container-fluid bg-dark mt-2 text-white"
                    >
                      For More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default FilterPage;
