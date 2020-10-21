import * as React from "react"
import "./LoginScreen.scss"

const LoginScreen = () => {
  return (
    <div className="login-root">
      <div className="login-left">
        <img src="/assets/jetop_logo.png" className="login-logo" />
        <div className="login-content">
          <div className="login-header">
            <span className="login-title">Login.</span>
            <br />
            <span className="login-subtitle">
              Effettua il login con il tuo account JEToP
            </span>
          </div>
        </div>
        <div className="login-interactive">
          <button className="login-button">Google Login</button>
          <span className="login-footer">
            Non sei di JEToP?
            <a href="https://jetop.com" className="login-url">
              &nbsp;Candidati!
            </a>
          </span>
        </div>
        <p className="login-credits">Built with &#128151; by JEToP's ITs</p>
      </div>
      <div className="login-right">
        <div className="login-image-container">
          <div className="login-undraw">
            <img
              src="/assets/undraw_security.svg"
              className="login-undraw-main"
            />
            <img
              src="/assets/undraw_background.svg"
              className="login-undraw-background"
            />
          </div>
        </div>
        <div className="login-app-title-container">
          <span className="login-app-title">JEToP Services</span>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
