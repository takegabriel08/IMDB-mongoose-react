import { useState, useEffect } from 'react'
import Header from './components/header'
import List from './components/List'
import './App.css'

function App() {
  const [movieArr, setMovieArr] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/imdb')
      .then(res => res.json())
      .then(data => setMovieArr((prev) => data?.data?.comingSoonMovie?.edges))
  }, [])

  return (
    <div className="App">
      <Header />
      <List
        movieArr={movieArr}
      />
    </div>
  )
}

export default App
