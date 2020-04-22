import React from "react";
import PropTypes from "prop-types";
// import { SearchMajorMonotone } from "@shopify/polaris-icons";
import styles from "./OptionsList.module.css";
// const testData = require("../data.json");

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
 * @param {Array} data array of objects of form { label, value } NOTE: First object has to match initial state
 *
 * @return {ReactComponent} returns react component
 */

// eslint-disable-next-line no-unused-vars
const OptionsList = ({ data }) => {
  // const [query, setQuery] = useState();
  // const [results, setResults] = useState([]);

  // const handleChange = e => {
  //   setUserInput({ value: e.currentTarget.value });

  //   const searchString = e.currentTarget.value.toLowerCase();

  //   let tempResults = testData.filter(d => {
  //     if (
  //       (d.name.toLowerCase().includes(searchString) ||
  //         d.url.includes(searchString)) &&
  //       e.currentTarget.value.length > 1
  //     ) {
  //       return d;
  //     }
  //     return undefined;
  //   });

  //   console.log(tempResults);

  //   setResults(tempResults);
  // };

  // const clearSearch = e => {
  //   console.log("clearSearch fired");
  //   setUserInput({ value: "" });
  //   setResults([]);
  // };

  return (
    <>
      {/* Break this out to a new component, optionslist? */}

      {data.length !== 0 && (
        <div className={`${styles["results-list"]}`}>
          <ul>
            {data.map((d, i) => {
              return (
                <li key={d.name}>
                  <div className={styles["results-item"]}>
                    <div className={styles["item-name"]}>
                      <div className={styles["shortcut-label"]}>
                        &#8984;{i + 1}
                      </div>
                      {d["name"]}
                    </div>
                    {/* <div className={styles["item-category"]}>
                      {d["category"]}
                    </div> */}
                    <div className={styles["item-url"]}>{d["url"]}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

OptionsList.defaultProps = {
  data: "Enter text"
};

OptionsList.propTypes = {
  data: PropTypes.array
};

export default OptionsList;
