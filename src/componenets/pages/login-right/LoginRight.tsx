import React from "react"
import "./LoginRight.scss"

const LoginRight = () => {
  return (
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
  )
}
export default LoginRight
