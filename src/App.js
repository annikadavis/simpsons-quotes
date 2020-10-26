import React, {useEffect, useState} from "react";
import Quote from './quote';
import './App.css';

function App() {

const [quote, setQuote] = useState([]);

useEffect ( async () => {
}, []);

const getQuote = async () => {
  const response = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes");
  const data = await response.json();
  setQuote(data);
}

const quoteButton = e =>{
  e.preventDefault();
  getQuote()
}
  return (
    <div className="App">
      <button onClick={quoteButton} className="button">Generate Quo-diddly-ote!</button>
      {quote.map(quote => (
        <Quote 
          quote={quote.quote} 
          character={quote.character} 
          image={quote.image} />
      ))}
    </div>
  );
}

export default App;
