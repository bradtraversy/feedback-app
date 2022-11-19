import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // NOTE: simpler average calculation
  // Calculate ratings avg
  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length

  // average = average.toFixed(1).replace(/[.,]0$/, '')
  // average = Math.round(average)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1)}</h4>
    </div>
  )
}

export default FeedbackStats
