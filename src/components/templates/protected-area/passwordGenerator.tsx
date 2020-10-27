import React, { useState } from "react"
import PasswordVisualization from "./passwordVisualization"
import "./passwordGenerator.scss"
import "./password.style.scss"

//show the password casually generated, user can choose lenght with slider
const PasswGenerator = (props: any) => {
  const [count, setCount] = useState("8")
  const { closeModal, value } = props
  function handleChange(e: any) {
    setCount(e.target.value)
  }
  return (
    <div className="passwGeneratorContainer">
      <div className="passwGeneratorModal">
        <div className="modalHeader">
          <h3>Genera una nuova password:</h3>
          <p className="btnPassword closeModal" onClick={closeModal}>
            X
          </p>
        </div>
        <PasswordVisualization valueActual={value} />
        <form>
          <div className="sliderContainer">
            <input
              type="range"
              min="6"
              max="40"
              value={count}
              onChange={handleChange}
              className="slider"
            />
            <br />
            <label>Numero di caratteri: {count}</label>
            <br />
          </div>
          <input
            type="checkbox"
            id="UpperCase"
            name="UpperCase"
            value="UpperCase"
          />
          <label>Includi lettere maiuscole</label>
          <br />
          <input type="checkbox" id="Number" name="Number" value="Number" />
          <label>Includi caratteri numerici</label>
          <br />
          <input type="checkbox" id="Special" name="Special" value="Special" />
          <label>Includi caratteri speciali</label>
          <br />
          <input
            type="checkbox"
            id="Ambiguous"
            name="Ambiguous"
            value="Ambiguous"
          />
          <label>Evita caratteri ambigui</label>
          <br />
          <div className="modalFooter">
            <button type="submit" className="btnPassword saveModal">
              Salva
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswGenerator
