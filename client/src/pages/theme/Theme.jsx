import './theme.css'

export default function Theme() {

  const playSound = () => {
    const audio = new Audio('../../public/theme_sound.mp3')
    audio.play()
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Выбор темы</h1>
      </div>
      <div className="themeButtons">
        <button onClick={playSound}>Тема 1</button>
        <button onClick={playSound}>Тема 2</button>
        <button onClick={playSound}>Тема 3</button>
      </div>
    </div>
  );
}
