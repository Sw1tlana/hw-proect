
const Options = ({ updateFeedback, totalFeedback, resetFeedBack }) => {
  return (
    <div>
        <ul>
            <li><button onClick={() => updateFeedback("good")} type="button">Good</button></li>
            <li><button onClick={() => updateFeedback("neutral")} type="button">Neutral</button></li>
            <li><button onClick={() => updateFeedback("bad")}type="button">Bad</button></li>
            {totalFeedback > 0 && (
            <li>
                <button onClick={resetFeedBack} type="button">Reset</button>
            </li>
            )}
        </ul>
    </div>
  )
}

export default Options
