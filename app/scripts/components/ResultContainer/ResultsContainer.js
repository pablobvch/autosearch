import React, { useEffect, useState } from "react";
import { getTrendingProducts } from "./utils/getTrendingProducts";
import { ProductList } from "./ProductList";

export const ResultContainer = ({
  onSearch,
  showSearchContainer,
  showingSearch,
  searchingResults,
  inputValue,
  setInputValue,
  loading,
  setLoading,
}) => {
  const [trendingProducts, setTrendingProducts] = useState(null);
  const [isTrendingProducts, setIsTrendingProducts] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const _trendingProducts = await getTrendingProducts();
      setTrendingProducts(_trendingProducts);

    };

    fetchData();
  }, []);

  useEffect(() => {
    const getData = setTimeout(async () => {
      setLoading(true); // Iniciamos la carga
      await onSearch(inputValue);
      setLoading(false); // Finalizamos la carga
    }, 1000);

    return () => clearTimeout(getData);
  }, [inputValue]);


  const handleOnChange = (e) => {
    setIsTrendingProducts(false);
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    setInputValue("");
    showSearchContainer(e);
  };

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input type="text" value={inputValue} onChange={handleOnChange} />
      <a href="#" onClick={handleClick}>
        <i className="material-icons close">close</i>
      </a>
      {
        <ProductList
          isTrendingProducts={isTrendingProducts}
          products={
            isTrendingProducts ? trendingProducts : searchingResults?.products
          }
          total={searchingResults?.total}
          loading={loading}
        />
      }
    </div>
  );
};
