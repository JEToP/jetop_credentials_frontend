import React, { useState } from "react"
import PasswordVisualization from "./passwordVisualization"
import "./passwordGenerator.scss"

//show the password casually generated, user can choose lenght with slider
const PasswGenerator = () => {
  const [count, setCount] = useState("8")

  function handleChange(e: any) {
    setCount(e.target.value)
  }

  return (
    <div>
      <PasswordVisualization value="Prova123!!!!" />
      <div className="slideContainer">
        <input
          type="range"
          min="8"
          max="20"
          value={count}
          onChange={handleChange}
          className="slider"
        />
        <div>Numero di caratteri: {count}</div>
      </div>
    </div>
  )
}

export default PasswGenerator
