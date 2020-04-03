import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { SearchMajorMonotone } from "@shopify/polaris-icons";
import styles from "./Search.module.css";
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

  console.log(typeof testData);
  console.log("Loading");
  const handleChange = e => {
    console.log("Handlechange fired");
    setUserInput({ value: e.currentTarget.value });
  };

  const clearSearch = e => {
    console.log("clearSearch fired");
    setUserInput({ value: "" });
  };

  return (
    <>
      <button onClick={clearSearch}>Clear</button>
      <div className={styles.wrapper}>
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
      {userInput.value && (
        <div className={styles["results-list"]}>
          {testData.map(d => {
            if (d.name === userInput.value) {
              return `${d["name"]} ${d["url"]}`;
            }
            return "";
          })}
        </div>
      )}
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
