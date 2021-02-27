import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  
  useEffect(() => {
    const welcome = async () => {
      const response = await axios({
        method: "GET",
        url: "/"
      })
      .then((res) => {
        console.log('res: ',res);
      })
      .catch(e => console.error(e));
    }
    welcome();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
