import React, { useState, useEffect } from "react"
import PasswordVisualization from "./passwordVisualization"
import { generatePassword } from "../../../libs/passwordGenerator"
import "./passwordGenerator.scss"
import "./password.style.scss"

//show the password casually generated, user can choose lenght with slider
const PasswGenerator = (props: any) => {
  const [count, setCount] = useState(8)
  const [isUpperCase, setUpperCase] = useState(false)
  const [isNum, setNum] = useState(false)
  const [isSpecial, setSpecial] = useState(false)
  const [isAmbiguous, setAmbiguous] = useState(false)

  const { closeModal } = props

  const [pswValue, setPsw] = useState(
    generatePassword(count, isUpperCase, isNum, isSpecial, isAmbiguous)
  )

  function handleChange(e: any) {
    setCount(parseInt(e.target.value))
  }
  function handleUpperCase(e: any) {
    setUpperCase(e.target.checked)
  }
  function handleNumber(e: any) {
    setNum(e.target.checked)
  }
  function handleSpecial(e: any) {
    setSpecial(e.target.checked)
  }
  function handleAmbiguous(e: any) {
    setAmbiguous(e.target.checked)
  }

  useEffect(() => {
    setPsw(generatePassword(count, isUpperCase, isNum, isSpecial, isAmbiguous))
  }, [count, isUpperCase, isNum, isSpecial, isAmbiguous])

  return (
    <div className="passwGeneratorContainer">
      <div className="passwGeneratorModal">
        <div className="modalHeader">
          <h3>Genera una nuova password:</h3>
          <p className="btnPassword closeModal" onClick={closeModal}>
            X
          </p>
        </div>
        <PasswordVisualization valueActual={pswValue} />
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
            value="UpperCase"
            onChange={handleUpperCase}
          />
          <label>Includi lettere maiuscole</label>
          <br />
          <input
            type="checkbox"
            id="Number"
            value="Number"
            onChange={handleNumber}
          />
          <label>Includi caratteri numerici</label>
          <br />
          <input
            type="checkbox"
            id="Special"
            value="Special"
            onChange={handleSpecial}
          />
          <label>Includi caratteri speciali</label>
          <br />
          <input
            type="checkbox"
            id="Ambiguous"
            value="Ambiguous"
            onChange={handleAmbiguous}
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
