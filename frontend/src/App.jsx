import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Createcard} from "./components/createCard"

function App() {
  const [Cards, setCards] = useState([]);
  const[refresh , setRefresh] = useState([false]);

  useEffect(()=>{
    const fetchCards = async()=>{
      const response = await fetch("http://localhost:3001/gettingCards");
      setCards(response.Cards);
    }
    fetchCards();
  },[Cards])

  const cardAdded = ()=>{
    setRefresh(!refresh);
  }

  return(
    <div>
      <Createcard cardAdded={cardAdded} ></Createcard>
    </div>
  )
}

export default App
