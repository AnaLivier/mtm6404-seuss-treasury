import React, { useState, useEffect } from 'react';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://seussology.info/api/quotes/random/10');
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (loading) {
    return (
      <div className="container p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Dr. Seuss Quotes</h2>
        <div className="text-center">Loading quotes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Dr. Seuss Quotes</h2>
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container p-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-4">Dr. Seuss Quotes</h2>
        <button 
          onClick={fetchQuotes}
          className="btn btn-blue"
        >
          Get New Quotes
        </button>
      </div>
      
      <div className="quotes-container">
        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-card p-6">
              <p className="text-gray-800 text-lg italic leading-relaxed">
                "{quote.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;