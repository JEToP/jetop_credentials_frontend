import React, { useState } from "react"
import PasswordVisualization from "../../molecules/password-visualization/passwordVisualization"
import PasswGenerator from "../../molecules/password-generator/passwordGeneratorModal"
import PasswordHistory from "../../molecules/password-visualization/passwordHistory"
import ProgressBar from "../../molecules/progress-bar/progressBar"
import "./password.style.scss"

// This component shows current password and older, and adds the possibility to create a new one

// TODO password history is a list of older passw
const Password = (props: any) => {
  const { actualPassword, history } = props
  const [status, setStatus] = useState(false)

  return (
    <div>
      <div className="passwordContainer">
        <div className="rowPsw">
          <div className="colLabel">
            <div className="tabRow">
              <p>Password</p>
            </div>
            <div className="tabRow"></div>
            <div className="tabRow" id="ultimeMod">
              <p>Ultime modifiche</p>
            </div>
          </div>
          <div className="colPsw">
            <div className="tabRow">
              <PasswordVisualization password={actualPassword} />
            </div>
            <div className="tabRow">
              <ProgressBar pwd={actualPassword} />
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
        <PasswGenerator closeModal={() => setStatus(false)}></PasswGenerator>
      )}
    </div>
  )
}

export default Password
