// src/components/QuoteGenerator.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteGenerator() {
  const [quote, setQuote] = useState("This is a default quote.");

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const newQuote = response.data.content;
      setQuote(newQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

  return (
    <div className="quote-container">
      <p className="quote-text">{quote}</p>
      <div className="button-container">
        <button className="get-quote-button" onClick={fetchQuote}>Get New Quote</button>
      </div>
    </div>
  );
}

export default QuoteGenerator;
