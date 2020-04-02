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
      <div>
        <Search label="Test" placeholder="Search" />
      </div>
    </div>
  );
}

export default App;
