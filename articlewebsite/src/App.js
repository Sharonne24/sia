

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/AdminLogin';


function App () {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/blog" element={<BlogDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
