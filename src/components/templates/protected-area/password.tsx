import React, { useState } from "react"
import PasswordVisualization from "./passwordVisualization"
import PasswGenerator from "./passwordGenerator"
import PasswordHistory from "./passwordHistory"
import ProgressBar from "./progressBar"
import "./password.style.scss"

// This component shows current password and older, and adds the possibility to create a new one

// TODO password history is a list of older passw
const Password = (props: any) => {
  const { actualPassword, newPassword, history, strength } = props
  const [status, setStatus] = useState(false)

  return (
    <div>
      <div className="passwordContainer">
        <div className="rowPsw">
          <div className="colPsw">
            <div className="tabRow">Password:</div>
            <div className="tabRow">Strength:</div>
            <div className="tabRow" id="ultimeMod">Ultime modifiche:</div>
          </div>
          <div className="colPsw">
            <div className="tabRow">
              <PasswordVisualization valueActual={actualPassword} />
            </div>
            <div className="tabRow">
              <ProgressBar percentage={strength}/>
            </div>
            <div id="historyTabRow">
              <PasswordHistory history={history} />
            </div>
          </div>
        </div>

        <button className="btnPassword" onClick={() => setStatus(true)}>
          Genera nuova password
        </button>
      </div>
      {status && (
        <PasswGenerator
          value={newPassword}
          closeModal={() => setStatus(false)}
        ></PasswGenerator>
      )}
    </div>
  )
}

export default Password
