import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import QuotesPage from './pages/QuotesPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/quotes" element={<QuotesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;