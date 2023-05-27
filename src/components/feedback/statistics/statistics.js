import Notification from '../notification/notification';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      {bad + good + neutral ? (
        <ul>
          <li>
            <p>
              Good: <span>{good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral: <span>{neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad: <span>{bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total: <span>{total()}</span>
            </p>
          </li>
          <li>
            <p>
              Positive feedback: <span>{positivePercentage()}</span>
            </p>
          </li>
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default Statistics;
