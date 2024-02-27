

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import Portfolio from './components/Portfolio';


function App () {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
