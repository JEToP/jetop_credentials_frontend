import React from "react"
import "./Button.style.scss"

type Button = {
  label: string
}
const Button = ({ label }: Button) => {
  return <button className="button">{label}</button>
}
export default Button
