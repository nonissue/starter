import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Search.module.css";
import { SearchMajorMonotone } from "@shopify/polaris-icons";

/*
Will have to implement and customize: 
* input
* popover
* search ahead functionality
* key press listener
* event listener (click outside or focus out) 

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
  const [userInput, setUserInput] = useState("");

  const handleChange = e => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          onChange={handleChange}
          // onBlur={handleChange}
          // onChange={handleChange}
        ></input>
        <span className={styles["label-icon"]}>
          <SearchMajorMonotone viewBox="-1 -1 23 23" />
        </span>
        <div className={styles.backdrop}></div>
      </div>
      {userInput && <div className={styles["results-list"]}>{userInput}</div>}
    </>
  );
};

Search.defaultProps = {
  labelinline: true,
  onChangeSearch: () => {},
  Icon: undefined
};

Search.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  labelinline: PropTypes.bool,
  onChangeSelect: PropTypes.func,
  Icon: PropTypes.element
};

export default Search;
