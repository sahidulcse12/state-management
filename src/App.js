
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
import { createContext, useState } from 'react';


export const CategoryContext = createContext();

function App() {

  const [category, setCategory] = useState('laptop');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>category : {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>

    </CategoryContext.Provider>
  );
}

export default App;
