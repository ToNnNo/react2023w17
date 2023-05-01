import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import Loading from "../../component/Loading";

export default function Quote() {
  const [quote, setQuote] = useState('');

  const getQuote = useCallback( async () => {
    const result = await axios.get('http://localhost:3200/quotes');
    setQuote(result.data);
  }, []);

  useEffect( () => {
    getQuote();
  }, [getQuote]);

  if(!quote) {
    return <Loading />
  }

  return (
    <>
      <h2>Quote</h2>

      <figure>
        <blockquote className="blockquote">
          <p>{ quote.citation }</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          { quote.auteur }
        </figcaption>
      </figure>

    </>
  )

}