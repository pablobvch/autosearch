import React, { useEffect, useState } from "react";
import { getTrendingProducts } from "./utils/getTrendingProducts";
import { ProductList } from "./ProductList";

export const ResultContainer = ({
  onSearch,
  showSearchContainer,
  showingSearch,
  searchingResults,
  inputValue,
  setInputValue
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
    const getData = setTimeout(() => {
      onSearch(inputValue);
    }, 1000);

    return () => clearTimeout(getData);
  }, [inputValue]);

  console.log({ inputValue, setInputValue });

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input type="text" value={inputValue} onChange={(e)=>{
        setIsTrendingProducts(false)
        setInputValue(e.target.value)
      }}/>
      <a href="#" onClick={(e) => {
        setInputValue("")
        showSearchContainer(e)
        }}>
        <i className="material-icons close">close</i>
      </a>
      {
        <ProductList
          isTrendingProducts={isTrendingProducts}
          products={
            isTrendingProducts ? trendingProducts : searchingResults?.products
          }
          total={searchingResults?.total}
        />
      }
    </div>
  );
};
