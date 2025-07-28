import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://seussology.info/api/books/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="container p-4">
        <div className="text-center">Loading book details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container p-4">
        <div className="text-center text-red-500">Error: {error}</div>
        <div className="text-center mt-4">
          <Link to="/books" className="text-blue-500">
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container p-4">
        <div className="text-center">Book not found</div>
        <div className="text-center mt-4">
          <Link to="/books" className="text-blue-500">
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container p-4">
      <div className="book-details">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              src={book.image} 
              alt={book.title}
              className="book-image"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{book.title}</h1>
            <div className="text-gray-600 leading-relaxed mb-6">
              {book.description}
            </div>
            <Link to="/books" className="btn btn-red">
              Back to Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;