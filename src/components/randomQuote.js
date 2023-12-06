import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const Quotes = [
  {
    quote: "The best way to predict the future is to create it",
    author: "-Steve Jobs",
  },
  {
    quote:
      " In three words I can sum up everything I learned about life: it goes on",
    author: "-Franklin D",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dream",
    author: "-Eleanor Roosevelt",
  },
  {
    quote: "Dont watch the clock; do what it does. Keep going.",
    author: "-Steve Jobs",
  },
];

export default function RandomQuote() {
  const [quote, setQuote] = useState([
    {
      quote: "Don't take revenge. Let Karma do all the work",
      author: "-Steve Jobs",
    },
  ]);

  function handleNext() {
    let arrayIndex = Math.floor(Math.random() * Quotes.length);
    setQuote([Quotes[arrayIndex]]);
    // setQuote({ quote: quote.quote, author:quote.author });
    // setQuote([Quotes[arrayIndex].quote]);
    // setQuote([Quotes[arrayIndex].author])
  }

  console.log(quote);
  return (
    <div className="quote_container">
      <div className="quote_box">
        <h2>Quote of the day</h2>
        <div className="quotes_and_author">
        <FaQuoteLeft className="left_icon"/>
          <p className="input_quote">{quote[0]?.quote}</p>
          <div className="right_icon">
          <FaQuoteRight />
          </div>
          <p className="author">{quote[0]?.author}</p>
          
        </div>
        <div>
          <button onClick={() => handleNext()} className="next_quote_button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
