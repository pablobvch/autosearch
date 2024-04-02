import React, { useEffect, useState, forwardRef } from "react";
import { getTrendingProducts } from "./utils/getTrendingProducts";
import { ProductList } from "./ProductList";

const Input = forwardRef(({ inputValue, handleOnChange }, ref) => {
  return (
    <input type="text" value={inputValue} onChange={handleOnChange} ref={ref} />
  );
});

export const ResultContainer = forwardRef(
  (
    {
      onSearch,
      showSearchContainer,
      showingSearch,
      searchingResults,
      inputValue,
      setInputValue,
      loading,
      setLoading,
    },
    ref
  ) => {
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
        setLoading(true);
        await onSearch(inputValue);
        setLoading(false);
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
        <Input
          inputValue={inputValue}
          handleOnChange={handleOnChange}
          ref={ref}
        />
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
  }
);
