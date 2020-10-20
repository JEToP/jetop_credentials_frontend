import React from "react"
import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <div>
      <span>Hello JEToP</span>
      <br />
      <Link to="/services-credentials">
        <p>Access the protected area</p>
      </Link>
    </div>
  )
}
export default LoginPage
