import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://seussology.info/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="container p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Dr. Seuss Books</h2>
        <div className="text-center">Loading books...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Dr. Seuss Books</h2>
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Dr. Seuss Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <Link to={`/book/${book.id}`}>
              <img 
                src={book.image} 
                alt={book.title}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                {book.description && (
                  <p className="text-gray-600 text-sm">{book.description.substring(0, 100)}...</p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;