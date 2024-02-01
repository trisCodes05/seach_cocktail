import React, { useState, useEffect } from "react";
import Card from "./card";
import "../App.css";

function SearchBar() {
  const [searchStr, setSearchStr] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchStr) {
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchStr}`
        );
        const data = await response.json();
        setSearchResults(data.drinks);
        console.log("res", data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchStr]);

  return (
    <div>
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Cocktails"
          value={searchStr}
          onChange={(e) => {
            setSearchStr(e.target.value);
          }}
        />
      </div>
      <div className="cocktail-container">
        {searchResults.map((res) => (
          <Card
            key={res.idDrink}
            name={res.strDrink}
            imgUrl={res.strDrinkThumb}
            otherResults={res}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
