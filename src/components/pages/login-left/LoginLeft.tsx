import BaseButton from "../../atoms/button/variants/ButtonPrimary"
import * as React from "react"
import "./LoginLeft.style.scss"
import ButtonPrimary from "../../atoms/button/variants/ButtonPrimary"

type LoginLeftTypes = {
  googleLoginOnClick: () => void
}
const LoginLeft = ({ googleLoginOnClick }: LoginLeftTypes) => {
  return (
    <div className="login-left">
      <img alt="" src="/assets/jetop_logo.png" className="login-logo" />
      <div className="login-content">
        <div className="login-header">
          <span className="login-title">Login.</span>
          <br />
          <span className="login-subtitle">
            Effettua il login con il tuo account JEToP
          </span>
        </div>
      </div>
      <div className="login-interactive" onClick={googleLoginOnClick}>
        <ButtonPrimary label="Google Login" onClick={()=>{}}/>
        <span className="login-footer">
          Non sei di JEToP?
          <a href="https://jetop.com" className="login-url">
            &nbsp;Candidati!
          </a>
        </span>
      </div>
      <p className="login-credits">Built with &#128151; by JEToP's ITs</p>
    </div>
  )
}
export default LoginLeft
