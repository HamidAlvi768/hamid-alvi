import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {ProductList} from './components/ProductList';
import {UpdateProduct} from './components/UpdateProduct';
import {Login} from './components/Login';
import {Signup} from './components/Signup';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
