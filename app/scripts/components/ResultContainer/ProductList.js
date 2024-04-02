import React from "react";
import { currencyFormater } from "../../../utils/currencyFormater";

const ListContent = ({ products }) => (
  <div className="products-list-container">
    {products?.length > 0 &&
      products.map(({ _id, name, price, tags, picture }) => {
        return (
          <div key={_id} className="product-container">
            <img className="product-image" src={picture} alt={name} />
            <h2 className="name">{name}</h2>
            <h4 className="price">{currencyFormater(price)}</h4>
            <div className="tags">{tags.join(", ")}</div>
          </div>
        );
      })}
  </div>
);

const ListHeader = ({ isTrendingProducts, total, products }) => (
  <>
    {isTrendingProducts ? (
      <h1 className="title">Trending Products</h1>
    ) : (
      products?.length > 0 && (
        <div className="title-row">
          <h1 className="title">
            Displaying {products.length} of {total}{" "}
          </h1>
          {total > products.length && (
            <h1 className="all-results">
              <a href="#">See all results</a>
            </h1>
          )}
        </div>
      )
    )}
  </>
);

export const ProductList = ({
  isTrendingProducts,
  products,
  total,
  loading,
}) => {

  if (loading) {
    return (
      <div className="loader-container">
        <h1 className="loader">&nbsp;</h1>
      </div>
    );
  }
  return (
    <>
      <ListHeader
        isTrendingProducts={isTrendingProducts}
        total={total}
        products={products}
      />
      <ListContent products={products} />
      {products?.length === 0 && (
        <h4 className="no-data-found">NO DATA FOUND</h4>
      )}
    </>
  );
};
