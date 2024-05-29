import React, { useState } from "react"
import './index.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [values, setValues] = useState([])

  const handleClick = () => {
    setCount(count + 1)
    setValues(values.concat(count))
  }
  return (
    <div className="container">
      hello webpack {count} clicks
      <button onClick={handleClick}>press</button>
    </div>
  )
}

export default App
