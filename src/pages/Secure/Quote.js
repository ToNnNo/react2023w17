import axios from "axios";
import { useCallback, useEffect, useState } from "react"

export default function Quote() {
  const [quote, setQuote] = useState('');

  const getQuote = useCallback( async () => {
    const result = await axios.get('http://localhost:3200/quote');
    setQuote(result.data);
  }, []);

  useEffect( () => {
    getQuote();
  }, [getQuote])

  return (
    <>
      <h2>Quote</h2>

      <blockquote className="blockquote">
        <p>{ quote.citation }</p>
        <footer className="blockquote-footer">
          { quote.auteur }
        </footer>
      </blockquote>

    </>
  )

}