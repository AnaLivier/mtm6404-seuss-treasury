import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container p-4 text-center">
      <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Seuss Treasury</h2>
        <p className="text-xl text-gray-600 mb-8">
          Explore the wonderful world of Dr. Seuss books and quotes!
        </p>
        <div className="space-x-4">
          <Link to="/books" className="btn btn-red btn-lg">
            Browse Books
          </Link>
          <Link to="/quotes" className="btn btn-blue btn-lg">
            Read Quotes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;