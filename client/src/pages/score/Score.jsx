import './score.css';

export default function Score({ answers }) {
  answers = [
    { status: 'correct', answer: 'jjjdjkdfjj' },
    { status: 'wrong', answer: 'jjjdjkdfjj' },
    { status: 'correct', answer: 'jjjdjkdfjj' },
    { status: 'correct', answer: 'jjjdjkdfjj' },
    { status: 'correct', answer: 'jjjdjkdfjj' },
    { status: 'correct', answer: 'jjjdjkdfjj' },
    { status: 'correct', answer: 'jjjdjkdfjj' },
    { status: 'correct', answer: 'jjjdjkdfjj' },
    { status: 'pending' },
  ];

  return (
    <>
      <div className="answer-container">
        {answers.map((item, index) => (
          <div
            key={index}
            className={`answer-item ${
              item.status === 'correct'
                ? 'correct'
                : item.status === 'wrong'
                ? 'wrong'
                : 'pending'
            }`}
          >
            <span className="question-number">Вопрос {index + 1}:</span>
            <span className="answer-text">{item.answer}</span>
          </div>
        ))}
      </div>
      <div className='buttons'>
        <button className='button' >Далее</button>
      </div>
    </>
  );
}
