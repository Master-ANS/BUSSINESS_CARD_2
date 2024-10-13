import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createcard} from "./components/createCard"

function App() {
  const [Cards, setCards] = useState([]);
  const[refresh , setRefresh] = useState([false]);

  useEffect(async ()=>{
    const response = await fetch("http://localhost:3001/gettingCards");
    setCards(response.Cards);
  })

  return(
    <div>
      <createcard></createcard>
    </div>
  )
}

export default App
