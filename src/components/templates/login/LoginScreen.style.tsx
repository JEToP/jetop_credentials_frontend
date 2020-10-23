import React, { useEffect } from "react"
import "./LoginScreen.scss"
import LoginLeft from "../../pages/login-left/LoginLeft"
import LoginRight from "../../pages/login-right/LoginRight"

declare var google: any

const LoginScreen = () => {
  useEffect(() => {
    const handleCredentialResponse = (e: any) => {}
    google.accounts.id.initialize({
      client_id:
        "869086414529-35s2e6odscj5ohkcu29ved8rbkklnieu.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    })
    google.accounts.id.prompt()
  }, [])
  return (
    <div className="login-root">
      <LoginLeft />
      <LoginRight />
    </div>
  )
}

export default LoginScreen
