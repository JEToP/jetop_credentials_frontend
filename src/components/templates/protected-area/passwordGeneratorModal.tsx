import React, { useEffect, useState } from "react"
// import PasswordVisualization from "./passwordVisualization"
import { generatePassword } from "../../../libs/passwordGenerator"
import "./passwordGenerator.scss"
import "./password.style.scss"

//show the password casually generated with generatePassword func, user can choose lenght with slider
const PasswGenerator = (props: any) => {
  const [passwLength, setPasswLength] = useState(8)
  const [isUpperCase, setUpperCase] = useState(false)
  const [isNumber, setNumber] = useState(false)
  const [isSpecial, setSpecial] = useState(false)
  const [isAmbiguous, setAmbiguous] = useState(false)

  const [PasswValue, setPasswValue] = useState(
    generatePassword(passwLength, isUpperCase, isNumber, isSpecial, isAmbiguous)
  )

  const { closeModal } = props

  function handlepasswLength(e: any) {
    setPasswLength(parseInt(e.target.PasswValue))
  }

  function handleUpperCase(e: any) {
    setUpperCase(e.target.checked)
  }

  function handleNumber(e: any) {
    setNumber(e.target.checked)
  }

  function handleSpecial(e: any) {
    setSpecial(e.target.checked)
  }

  function handleAmbiguous(e: any) {
    setAmbiguous(e.target.checked)
  }

  useEffect(() => {
    setPasswValue(
      generatePassword(
        passwLength,
        isUpperCase,
        isNumber,
        isSpecial,
        isAmbiguous
      )
    )
  }, [passwLength, isUpperCase, isNumber, isSpecial, isAmbiguous])

  return (
    <div className="passwGeneratorContainer">
      <div className="passwGeneratorModal">
        <div className="modalHeader">
          <h3>Genera una nuova password:</h3>
          <p className="btnPassword closeModal" onClick={closeModal}>
            X
          </p>
        </div>
        {/* <PasswordVisualization valueActual={PasswValue} /> */}
        <span>{PasswValue}</span>
        <form>
          <div className="sliderContainer">
            <input
              type="range"
              min="6"
              max="40"
              value={passwLength}
              onChange={handlepasswLength}
              className="slider"
            />
            <br />
            <label>Numero di caratteri: {passwLength}</label>
            <br />
          </div>
          <input type="checkbox" id="UpperCase" onChange={handleUpperCase} />
          <label>Includi lettere maiuscole</label>
          <br />
          <input type="checkbox" id="Number" onChange={handleNumber} />
          <label>Includi caratteri numerici</label>
          <br />
          <input type="checkbox" id="Special" onChange={handleSpecial} />
          <label>Includi caratteri speciali</label>
          <br />
          <input type="checkbox" id="Ambiguous" onChange={handleAmbiguous} />
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
