import { useState } from 'react'
import './App.css'
import Cv from './components/organisms/Section/Cv/Cv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cv />
    </>
  )
}

export default App
