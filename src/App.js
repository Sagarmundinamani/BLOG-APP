import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Navigation from './components/Navigation';
import "./App.css";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
