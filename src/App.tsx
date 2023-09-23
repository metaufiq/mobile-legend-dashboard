import { useEffect } from 'react';

import heroAPI from './api/hero';
import { RANK_TYPE } from './api/hero/constants';
import logo from './logo.svg';
import './App.scss';

function App() {

  useEffect(()=>{
    heroAPI.getRankData({lang:'en', language: 'en', type: RANK_TYPE.ALL})
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
