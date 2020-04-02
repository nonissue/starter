import React from "react";
import "./App.css";
import styles from "./App.module.css";

import Search from "./components/Search";

function App() {
  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Startpage</h1>
      </header>
      <div className={styles.search}>
        <Search label="Test" placeholder="Search" />
      </div>
      <div className={styles.content}>
        <h2>Lists</h2>
      </div>
    </div>
  );
}

export default App;
