import React from "react"
import { Logo } from "../../atoms/logo/Logo"
import Account from "../account/Account"

import "./Menu.style.scss"

export default function Menu() {
  return (
    <div className="menu">
      <Logo />
      <Account profileImage="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
    </div>
  )
}
