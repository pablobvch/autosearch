/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useState } from 'react';
import { ResultContainer } from './ResultContainer/ResultsContainer';
import { getProductsByCriteria } from './utils/getProductsByCriteria';

const Menu = () => {
  const [showingSearch, setShowingSearch] = useState(false);

  const [productsToFind, setProductsToFind] = useState("")

  const [searchingResults, setSearchingResults] = useState(null);

  const showSearchContainer = (e) => {
    e.preventDefault();
    setShowingSearch(!showingSearch);
  };

  const onSearch = async (e) => {
    const _productsToFind = e.target.value;
    setProductsToFind(_productsToFind);
    if (_productsToFind.length > 2) {
      const { total, products } = await getProductsByCriteria(_productsToFind);
      setSearchingResults({ total, products });
    }
  };

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT'S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a href="#" onClick={(e) => showSearchContainer(e)}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <ResultContainer
        onSearch={onSearch}
        showSearchContainer={showSearchContainer}
        showingSearch={showingSearch}
        productsToFind={productsToFind}
        searchingResults={searchingResults}
      />
    </header>
  );
};

// Export out the React Component
export default Menu;