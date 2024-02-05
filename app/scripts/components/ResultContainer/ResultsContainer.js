import React, { useEffect, useState } from "react";
import { getTrendingProducts } from "./utils/getTrendingProducts";
import { ProductList } from "./ProductList";

export const ResultContainer = ({
  onSearch,
  showSearchContainer,
  showingSearch,
  productsToFind,
  searchingResults,
}) => {
  const [trendingProducts, setTrendingProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const _trendingProducts = await getTrendingProducts();
      setTrendingProducts(_trendingProducts);
    };

    fetchData();
  }, []);

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input type="text" onChange={(e) => onSearch(e)} />
      <a href="#" onClick={(e) => showSearchContainer(e)}>
        <i className="material-icons close">close</i>
      </a>
      {
        <ProductList
          isTrendingProducts={productsToFind.length === 0}
          products={
            productsToFind.length === 0 ? trendingProducts : searchingResults?.products
          }
          total={searchingResults?.total}
        />
      }
    </div>
  );
};
