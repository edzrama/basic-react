import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Product from './views/Product';
function App() {
  return (
    <div className="relative pb-10 min-h-screen">
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element={<About /> } />
        <Route path='/products/:id' element={<Product /> } />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
