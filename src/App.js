import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './App.css';
import styles from './App.module.css';
import Search from './components/Search';
const data = require('./data.json');

const servicesData = data[0].data;
const resourcesData = data[1].data;
const newsData = data[2].data;
const releasesData = data[3].data;

const myBreakpointsAndCols = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

function App() {
  const [searchStatus, setSearchStatus] = useState({
    value: '',
    results: [],
  });

  console.log('rendered');

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a aria-label='logo-link' href='/'>
          <img
            alt='Starter logo'
            src={process.env.PUBLIC_URL + '/StarterLogoTransparent.png'}
          />
        </a>
        <div aria-label='link-search' className={styles.search}>
          <Search
            label='Search'
            placeholder='Search'
            searchState={searchStatus}
            setSearchState={setSearchStatus}
          />
        </div>
      </header>

      <div aria-label='links' data-testid='links' className={styles.content}>
        <div
          className={`${styles.lists} ${
            searchStatus.results.length > 0 && styles['dim-lists']
          }`}
        >
          <Masonry
            breakpointCols={myBreakpointsAndCols}
            className={styles['my-masonry-grid']}
            columnClassName={styles['my-masonry-grid_column']}
          >
            <div className={styles.list}>
              <h3>Releases</h3>
              <ul>
                {releasesData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.list}>
              <h3>Services</h3>
              <ul>
                {servicesData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.list}>
              <h3>Design Resources</h3>
              <ul>
                {resourcesData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.list}>
              <h3>News</h3>
              <ul>
                {newsData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.list}>
              <h3>Releases</h3>
              <ul>
                {releasesData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.list}>
              <h3>News</h3>
              <ul>
                {newsData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.list}>
              <h3>Services</h3>
              <ul>
                {servicesData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.list}>
              <h3>Design Resources</h3>
              <ul>
                {resourcesData.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Masonry>
        </div>
      </div>
    </div>
  );
}

export default App;
