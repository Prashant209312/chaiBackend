import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })
  return (
    <>
      <div>
        <h1>Chai and full stack</h1>
        <p>Jokes: {jokes.length}</p>
        {jokes.map((joke, index) => {
          return (
            <div key={index}>
              <h3>{joke.title}</h3>
              <p>{joke.content} </p>
            </div>
          )

        })}
      </div>
    </>
  )
}

export default App
