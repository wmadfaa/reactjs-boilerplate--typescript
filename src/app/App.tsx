import React, { Component } from "react";
import { Logo } from "assets/icons/index";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <p>
            Edit <code>src/app/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
