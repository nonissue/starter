import React from 'react';
import PropTypes from 'prop-types';
// import { SearchMajorMonotone } from "@shopify/polaris-icons";
import styles from './OptionsList.module.css';
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
 * @param {Number} selected index of selected option
 * @return {ReactComponent} returns react component
 */

// eslint-disable-next-line no-unused-vars
const OptionsList = ({ data, selected }) => {
  return (
    <>
      {data.length !== 0 && (
        <div className={`${styles['results-list']}`}>
          <ul>
            {data.map((d, i) => {
              return (
                <li key={d.name}>
                  <div
                    className={`${styles['results-item']} ${
                      i + 1 === selected && styles.selected
                    }`}
                  >
                    <div className={styles['item-name']}>
                      {d['name']}
                      &nbsp;&nbsp;
                      <div className={styles['shortcut-label']}>
                        &#8984; + {i + 1}
                      </div>
                    </div>
                    <div className={styles['item-url']}>{d['url']}</div>
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
  data: [],
};

OptionsList.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.number,
};

export default OptionsList;
