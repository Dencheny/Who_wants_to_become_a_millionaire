import './score.css';

export default function Score() {
  return (
    <div className="score-container">
      <div className="question-box">
        <h2>Сколько будет 2 + 2?</h2>
      </div>
      <div className="answers-grid">
        <button className="answer">A: 3</button>
        <button className="answer">B: 4</button>
        <button className="answer">C: 5</button>
        <button className="answer">D: 22</button>
      </div>
    </div>
  );
}
