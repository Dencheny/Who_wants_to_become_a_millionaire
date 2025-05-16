import './result.css';

export default function Result({ answers, score, onRestart }) {
  answers = [
    { isCorrect: 'correct', question: 'fdvdffbfbfbfbfffd', userAnswer: '15bdbdbdbd000' },
    { isCorrect: 'incorrect', question: 'fdvdfgbfbfbffbd', userAnswer: '150ddfbdb00' },
    { isCorrect: 'correct', question: 'bfbfbfbfbfbf', userAnswer: 'fdvddbdbdbd' },
    { isCorrect: 'incorrect', question: 'fdvbfbfbfbfbdfd', userAnswer: '15dfbdfbdbdb000' },
  ];

  const playSound = () => {
    const audio = new Audio('../../public/theme_sound.mp3');
    audio.play();
  };

  return (
    <div className="result-overlay">
      <div className="result-box">
        <h2>Результаты</h2>
        <div className="score">Баллы:{score}</div>

        <ul className="answer-list">
          {answers.map((item, index) => (
            <li
              key={index}
              className={item.isCorrect ? 'correct' : 'incorrect'}
            >
              <strong>Вопрос {index + 1}:</strong> {item.question} <br />
              <span>Ваш ответ: {item.userAnswer}</span>
            </li>
          ))}
        </ul>
        <button
          className="restart-button"
          onClick={() => {
            playSound();
            onRestart();
          }}
        >
          Играть снова
        </button>
      </div>
    </div>
  );
}
