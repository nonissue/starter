import React from "react";
import "./App.css";
import styles from "./App.module.css";
import Search from "./components/Search";
const listData = require("./data.json");

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Starter</h1>
      </header>
      <div className={styles.search}>
        <Search label="Test" placeholder="Search" />
      </div>
      <div className={styles.content}>
        <h3>Lists</h3>
        <div className={styles.lists}>
          <ul>
            {listData.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
          <ul>
            {listData.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
          <ul>
            {listData.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
          <ul>
            {listData.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
