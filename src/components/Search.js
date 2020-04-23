import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  SearchMajorMonotone,
  CircleCancelMajorMonotone
} from "@shopify/polaris-icons";
import { createBrowserHistory } from "history";
import styles from "./Search.module.css";
import OptionsList from "./OptionsList";
import useKeyPress from "./utils/useKeyPress";
const testData = require("../data.json");

const history = createBrowserHistory();

/*
Will have to implement and customize: 
* input
* popover
* search ahead functionality
* key press listener
* event listener (click outside or focus out) 

Gets rendered twice?

TOOD: updateFunction and setUserInput and setResults overlap in terms of responsbilities
Migrate to using updateFunction only as state is passed from parent

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
const Search = ({
  placeholder,
  updateFunction,
  currentStatus,
  label,
  data
}) => {
  // Can probably remove these as state is passed from parent
  const [userInput, setUserInput] = useState({ value: "" });
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");

  useEffect(() => {
    // adding selectedResult to deps breaks this....
    if (results.length && downPress && selectedResult + 1 <= results.length) {
      setSelectedResult(prevState =>
        prevState <= results.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress, results.length]);
  useEffect(() => {
    if (results.length && upPress) {
      setSelectedResult(prevState =>
        prevState > 0 ? prevState - 1 : prevState
      );
    }
  }, [upPress, results.length]);
  useEffect(() => {
    if (selectedResult !== null && enterPress) {
      window.location.assign(`${results[selectedResult - 1].url}`);
    } else if (
      selectedResult === null &&
      userInput.value !== "" &&
      enterPress
    ) {
      window.location.assign(
        `https://www.google.com/search?q=${userInput.value}`
      );
    }
  }, [selectedResult, enterPress, results, userInput.value]);

  // our json data is an array of objects with a nested array
  // so we flatten them for search. if we care about category,
  // we shouldnt do this
  // const flattened = testData.map(category => category.data).flat();

  // dismiss modal with escape
  useEffect(() => {
    const clearSearch = event => {
      if (userInput.value !== "" && event.key === "Escape") {
        updateFunction({ value: "", results: [] });
        setUserInput({ value: "" });
        setResults([]);
      }
    };

    window.addEventListener("keydown", clearSearch);

    return () => {
      window.removeEventListener("keydown", clearSearch);
    };
  }, [currentStatus, updateFunction, userInput]);

  const handleChange = e => {
    setUserInput({ value: e.currentTarget.value });
    updateFunction({ value: e.currentTarget.value });

    const searchString = e.currentTarget.value.toLowerCase();

    let matches = [];
    testData.forEach(category => {
      category.data.forEach(item => {
        if (
          (item.name.toLowerCase().includes(searchString) ||
            item.url.includes(searchString)) &&
          e.currentTarget.value.length > 1
        ) {
          matches.push({ ...item, category: category.category });
        }
      });
      // );
    });

    console.log(matches);

    setResults(matches.slice(0, 5));
    updateFunction({
      ...currentStatus,
      results: [...matches.slice(0, 5)]
    });
  };

  const clearSearch = e => {
    console.log("clearSearch fired");
    setUserInput({ value: "" });
    setResults([]);
    updateFunction({ value: "", results: [] });
  };

  return (
    <>
      {/* <h3>
        Results length {results.length} / User Input {userInput.value.length}
      </h3> */}
      <div
        className={`${styles.wrapper}  ${
          results.length !== 0 && userInput.value.length !== 0
            ? styles["no-bottom-border"]
            : styles["bottom-border"]
        }`}
      >
        <input
          type="text"
          className={`
           ${results.length !== 0 &&
             userInput.value.length !== 0 &&
             styles["no-bottom-border"]} `}
          placeholder={placeholder}
          value={userInput.value}
          onChange={handleChange}
        ></input>

        <span
          className={`${styles["label-icon"]} ${userInput.value.length !== 0 &&
            styles["pseudo-focus-icon"]}`}
        >
          <SearchMajorMonotone viewBox="-1 -1 23 23" />
        </span>
        {results.length === 0 && userInput.value !== "" && (
          <span className={styles["search-help-text"]}>
            Press enter to search google
          </span>
        )}
        {/* If this component is shown, it fucks up focus highlight of search icon */}
        {userInput.value !== "" && true && (
          <button onClick={clearSearch}>
            <span
              className={`${styles["icon-wrapper"]} ${userInput.value.length !==
                0 && styles["pseudos-focus-icon"]}`}
            >
              <CircleCancelMajorMonotone viewBox="-1 -1 23 23" />
            </span>
          </button>
        )}
        <div
          className={`${styles.backdrop} 
           ${results.length !== 0 &&
             userInput.value.length !== 0 &&
             styles["no-bottom-border"]} ${userInput.value.length !== 0 &&
            styles["pseudo-focus"]}`}
        ></div>
      </div>
      <OptionsList data={results} selected={selectedResult} />
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
