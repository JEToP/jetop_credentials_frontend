import React, { useCallback, useEffect, useState } from "react"
import { generatePassword } from "../../../libs/passwordGenerator"

import "./passwordGenerator.scss"

const PasswGenerator = ({ closeModal }: any) => {
  const [passwordOptions, setPasswordOptions] = useState({
    passwLength: 8,
    useUpperCase: false,
    useNumber: false,
    useSpecial: false,
    avoidAmbiguous: false,
  })

  const [password, setPassword] = useState(() => {
    return generatePassword(
      passwordOptions.passwLength,
      passwordOptions.useUpperCase,
      passwordOptions.useNumber,
      passwordOptions.useSpecial,
      passwordOptions.avoidAmbiguous
    )
  })

  const optChangeHandle = useCallback(
    (e: any) => {
      setPasswordOptions({
        ...passwordOptions,
        [e.target.id]: e.target.value,
      })
    },
    [passwordOptions]
  )

  useEffect(() => {
    setPassword(
      generatePassword(
        passwordOptions.passwLength,
        passwordOptions.useUpperCase,
        passwordOptions.useNumber,
        passwordOptions.useSpecial,
        passwordOptions.avoidAmbiguous
      )
    )
  }, [passwordOptions])

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
        <span>{password}</span>
        <form>
          <div className="sliderContainer">
            <input
              type="range"
              min="6"
              max="40"
              id="passwLength"
              value={passwordOptions.passwLength}
              onChange={optChangeHandle}
              className="slider"
            />
            <br />
            <label>Numero di caratteri: {passwordOptions.passwLength}</label>
            <br />
          </div>
          <input type="checkbox" id="useUpperCase" onChange={optChangeHandle} />
          <label>Includi lettere maiuscole</label>
          <br />
          <input type="checkbox" id="useNumber" onChange={optChangeHandle} />
          <label>Includi caratteri numerici</label>
          <br />
          <input type="checkbox" id="useSpecial" onChange={optChangeHandle} />
          <label>Includi caratteri speciali</label>
          <br />
          <input
            type="checkbox"
            id="avoidAmbiguous"
            onChange={optChangeHandle}
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
