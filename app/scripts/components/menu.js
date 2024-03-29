/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useState } from "react";
import { ResultContainer } from "./ResultContainer/ResultsContainer";
import { getProductsByCriteria } from "./utils/getProductsByCriteria";

const Menu = () => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [searchingResults, setSearchingResults] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const showSearchContainer = (e) => {
    e.preventDefault();
    setShowingSearch(!showingSearch);
  };

  const onSearch = async (value) => {
    if (value) {
      const data = await getProductsByCriteria(value);
      setSearchingResults(data);
    }
  };

  console.log({inputValue})

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>PAB</h1>
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
        searchingResults={searchingResults}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </header>
  );
};

// Export out the React Component
export default Menu;
