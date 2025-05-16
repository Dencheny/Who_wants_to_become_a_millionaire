import { useEffect, useState } from 'react'
import './theme.css'
import axios from 'axios'

export default function Theme() {

  const [theme, setTheme] = useState([])

  async function themeAll() {
    axios.get('http://localhost:3000/api/categories').then((res) => setTheme(res.data.data)).catch((error) => console.log(error))
  }

  useEffect(() => {
    themeAll()
  }, [])

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
        {theme?.map((obj) => (<button onClick={playSound}>{obj.name}</button>))}
      </div>
    </div>
  );
}
