import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path = "/" element = {<Create/>} />
      </Routes>
    </fieldset>
  );
}

export default App;