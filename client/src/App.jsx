import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import OneProduct from './pages/OneProduct';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path = "/" element = {<Create/>} />
        <Route path = "/products/:product_id" element = {<OneProduct/>} />
      </Routes>
    </fieldset>
  );
}

export default App;
