import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { SearchMajorMonotone } from "@shopify/polaris-icons";
import styles from "./Search.module.css";
import OptionsList from "./OptionsList";
const testData = require("../data.json");

/*
Will have to implement and customize: 
* input
* popover
* search ahead functionality
* key press listener
* event listener (click outside or focus out) 

Gets rendered twice?

*/

/**
 * Custom search field component
 * Copied/implemented from scratch based on: https://polaris.shopify.com/components/forms/select#navigation
 * Notes: labelinline not implemented ATM
 * Err, how do we actually handle the change?
 *
 * @param {Array} options array of objects of form { label, value } NOTE: First object has to match initial state
 * @param {String} label label string
 * @param {Boolean} labelinline show label to the left of value
 *
 * @return {ReactComponent} returns react component
 */

// eslint-disable-next-line no-unused-vars
const Search = ({ placeholder, label, data }) => {
  // const [query, setQuery] = useState();
  const [userInput, setUserInput] = useState({ value: "" });
  const [results, setResults] = useState([]);

  // our json data is an array of objects with a nested array
  // so we flatten them for search. if we care about category,
  // we shouldnt do this
  const flattened = testData.map(category => category.data).flat();

  const handleChange = e => {
    setUserInput({ value: e.currentTarget.value });

    const searchString = e.currentTarget.value.toLowerCase();

    let matches = [];
    testData.forEach(category => {
      // matches = matches.concat(
      category.data.forEach(item => {
        if (
          (item.name.toLowerCase().includes(searchString) ||
            item.url.includes(searchString)) &&
          e.currentTarget.value.length > 1
        ) {
          matches.push({ ...item, category: category.category });
          // console.log({ ...item, category: category.category });
          // return [{ ...item, category: category.category }];
        }
        // return undefined;
      });
      // );
    });

    console.log(matches);

    setResults(matches.slice(0, 5));
  };

  const clearSearch = e => {
    console.log("clearSearch fired");
    setUserInput({ value: "" });
    setResults([]);
  };

  return (
    <>
      <div className={styles.wrapper}>
        {userInput.value !== "" && <button onClick={clearSearch}>X</button>}
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={userInput.value}
          onChange={handleChange}
        ></input>
        <span className={styles["label-icon"]}>
          <SearchMajorMonotone viewBox="-1 -1 23 23" />
        </span>
        <div className={styles.backdrop}></div>
      </div>
      {/* Break this out to a new component, optionslist? */}
      <OptionsList data={results} />
    </>
  );
};

Search.defaultProps = {
  placeholder: "Enter text"
};

Search.propTypes = {
  placeholder: PropTypes.string
};

export default Search;
