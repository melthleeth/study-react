import { Fragment } from "react";
import { useParams, Routes, Route } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Sylvie", text: "Marketing is difficult" },
  { id: "q2", author: "Emily", text: "We're on the same line!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <p>{params.quoteId}</p>
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
