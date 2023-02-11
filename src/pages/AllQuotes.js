import QuoteList from '../components/quotes/QuoteList'
const DUMMY = [
  { id: 'q1', author: 'max', text: '일초' },
  { id: 'q2', author: 'max2', text: '2초' },
]
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY} />
}
export default AllQuotes
