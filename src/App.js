
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count : {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>

    </div>
  );
}

export default App;
