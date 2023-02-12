import { Fragment } from 'react'
import { Route, useParams } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
const DUMMY = [
  { id: 'q1', author: 'max', text: '일초' },
  { id: 'q2', author: 'max2', text: '2초' },
]
const QuoteDetail = () => {
  const params = useParams()

  const quote = DUMMY.find((quote) => quote.id === params.quoteId)
  if (!quote) {
    return <h1>No find level!</h1>
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
