import './result.css';

export default function Result(/*{ answers, score, onRestart }*/) {
  return (
    <div className="result-overlay">
      <div className="result-box">
        <h2>Результаты</h2>
        <div className="score">Баллы:</div>  
        {/* {score} */}
        <ul className="answer-list">
          {/* {answers.map((item, index) => (
            <li key={index} className={item.isCorrect ? 'correct' : 'incorrect'}>
              <strong>Вопрос {index + 1}:</strong> {item.question} <br />
              <span>Ваш ответ: {item.userAnswer}</span>
            </li>
          ))} */}
          <li>lalallaalallalala</li>
        </ul>
        <button className="restart-button">Играть снова</button> 
        {/* onClick={onRestart} */}
      </div>
    </div>
  );
}
