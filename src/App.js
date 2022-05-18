import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddProduct from './component/AddProduct';
import SearchProduct from './component/SearchProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<AddProduct/>}/>
      <Route path="/search" exact element={<SearchProduct/>}/>
    </Routes>
    </BrowserRouter>

  </div>

  );
}

export default App;
