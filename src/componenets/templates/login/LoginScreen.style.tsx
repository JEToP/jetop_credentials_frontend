import * as React from "react"
import "./LoginScreen.scss"
import LoginLeft from "../../pages/login-left/LoginLeft"
import LoginRight from "../../pages/login-right/LoginRight"

const LoginScreen = () => {
  return (
    <div className="login-root">
      <LoginLeft />
      <LoginRight />
    </div>
  )
}

export default LoginScreen
