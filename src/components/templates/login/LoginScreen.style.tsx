import React, { useEffect } from "react"
import "./LoginScreen.scss"
import LoginLeft from "../../pages/login-left/LoginLeft"
import LoginRight from "../../pages/login-right/LoginRight"
import { useGoogleLogin } from "react-google-login"

declare var google: any

const CLIENT_ID =
  "232797005510-t37q65unc636bupg35ta2ofl12mqllq2.apps.googleusercontent.com"

const LoginScreen = () => {
  const handleCredentialResponse = (tokenId: string) => console.log(tokenId)
  const { signIn } = useGoogleLogin({
    clientId: CLIENT_ID,
    onSuccess: (response: any) => handleCredentialResponse(response.tokenId),
    onFailure: (e) => console.error(e),
  })
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: (e: any) => handleCredentialResponse(e.credential),
    })
    google.accounts.id.prompt()
  }, [])

  return (
    <div className="login-root">
      <LoginLeft googleLoginOnClick={signIn} />
      <LoginRight />
    </div>
  )
}

export default LoginScreen
