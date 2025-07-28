import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-red-500 text-white p-4">
      <div className="container">
        <h1 className="text-2xl font-bold">Seuss Treasury</h1>
        <div className="space-x-4">
          <Link to="/books" className="px-3 py-2 rounded">
            Books
          </Link>
          <Link to="/quotes" className="px-3 py-2 rounded">
            Quotes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;