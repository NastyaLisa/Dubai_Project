import React from 'react';
import Header from './cotainers/Header/Header';
import Home from './pages/Home';
import Buy from './pages/Buy';
import ApartmentCategory from './pages/ApartmentCategory';
import Blog from './pages/Blog';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Footer from './cotainers/Footer/Footer';
import './scss/main.scss';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div >
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/apartment-category" element={<ApartmentCategory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
      </React.Fragment>
    </div>
  );
};

export default App;
