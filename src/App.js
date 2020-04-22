import React, { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import Search from "./components/Search";
const data = require("./data.json");

const servicesData = data[0].data;
const resourcesData = data[1].data;
const newsData = data[2].data;

function App() {
  const [searchStatus, setSearchStatus] = useState({
    value: "",
    results: []
  });

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img
          alt="startpage logo"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          width="50px"
          height="50px"
        />
        <h1>Starter</h1>
      </header>
      <div className={styles.search}>
        <Search
          label="Test"
          placeholder="Search"
          currentStatus={searchStatus}
          updateFunction={setSearchStatus}
        />
      </div>
      <div className={styles.content}>
        <div
          className={`${styles.lists} ${searchStatus.results.length > 0 &&
            styles["dim-lists"]}`}
        >
          {/* Break below into new component */}
          <div>
            <h3>Services</h3>
            <ul>
              {servicesData.map(item => (
                <li>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* New component ends here */}
          <div>
            <h3>Design Resources</h3>
            <ul>
              {resourcesData.map(item => (
                <li>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h3>News</h3>
            <ul>
              {servicesData.slice(0, 6).map(item => (
                <li>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <h3>News</h3>
            <ul>
              {newsData.map(item => (
                <li>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
