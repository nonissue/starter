import React from "react";
import "./App.css";
import styles from "./App.module.css";
import Search from "./components/Search";
const data = require("./data.json");

const servicesData = data[0].data;
const resourcesData = data[1].data;

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
        <div className={styles.lists}>
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
            <h3>Resources</h3>
            <ul>
              {resourcesData.map(item => (
                <li>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>News</h3>
            <ul>
              {servicesData.map(item => (
                <li>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Sites</h3>
            <ul>
              {servicesData.map(item => (
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
