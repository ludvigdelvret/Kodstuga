import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Button from '@mui/material/Button';


function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {number}
        </p>
        <Button variant="contained" size="large" onClick={() => setNumber(number+1)}>öka</Button>
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
