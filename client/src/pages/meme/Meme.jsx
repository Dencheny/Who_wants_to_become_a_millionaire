import './meme.css';

export default function Meme({ isCorrect }) {
  isCorrect = false;
  const image = isCorrect
    ? '../../../public/memeTrue.jpeg'
    : '../../../public/memeFalse.jpeg'; // путь из public

  return (
    <>
      <div
        className="dibrov-screen"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="reaction-text">{isCorrect ? 'Верно!' : 'Неверно!'}</div>
        <div className="buttony">
        <button className="buttoa">Далее</button>
      </div>
      </div>
    </>
  );
}
