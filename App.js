// import logo from './logo.svg';
import styles from "./App.module.css"
import './App.css';
import Posts from "./Components/Posts"
function App() {
  return (
    <div className={styles.App}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <Posts/>
    </div>
  );
}

export default App;
