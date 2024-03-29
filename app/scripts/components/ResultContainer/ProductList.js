import React from 'react'
import { currencyFormater } from '../../../utils/currencyFormater';

export const ProductList = ({ isTrendingProducts, products, total }) => {
  return (
    <>
      {isTrendingProducts ? (
        <h1 className="title">Trending Products</h1>
      ) : (
        products?.length > 0 &&
        <div className='title-row'>
          <h1 className="title">Displaying {products.length} of {total} </h1>
          {total > products.length && <h1 className="all-results"><a href='#'>See all results</a></h1>}
        </div>
      )}
      <div className="products-list-container">
      {products?.length > 0 &&
        products.map(({ _id, name, price, tags, picture }) => {
          return (
            <div key={_id} className="product-container">
              <img className="product-image" src={picture} alt={name}/>
              <h2 className='name'>{name}</h2>
              <h4 className='price'>{currencyFormater(price)}</h4>
              <div className='tags'>{tags.join(", ")}</div>
            </div>
          );
        })}
      </div>

    </>
  );
};
