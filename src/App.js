import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OurProcess from './components/ourProcess';
import Coaches from './components/coaches';
import Pricing from './components/pricing';
import FAQ from './components/faq';
import Contact from './components/contact';
import Join from './components/join'; 
import Reviews from './components/reviews';
import Support from './components/support';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <Home />
            </section>
            <section id="our-coaches">
              <Coaches />
            </section>
            <section id="reviews">
              <Reviews />
              </section>
              <section id="our-process">
              <OurProcess />
            </section>
            <section id="pricing">
              <Pricing />
            </section>
          </>
        } />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;
