
export const Feedback = ({ feedbackCounts, totalFeedback, positivePercentage }) => {
  return (
    <div>
        <p>Good: {feedbackCounts.good}</p>
        <p>Netural: {feedbackCounts.neutral}</p>
        <p>Bad: {feedbackCounts.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positivePercentage}%</p>
    </div>
  )
}

export default Feedback