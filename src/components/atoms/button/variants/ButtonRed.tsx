import React, { ReactNode } from "react"
import BaseButton from "../base-button/BaseButton"
import "./ButtonRed.scss"

type ButtonDeleteProps = {
  onClick: ()=> void
  label: string
}
const ButtonRed = ({ onClick, label }: ButtonDeleteProps) => {
  return (
    <BaseButton onClick={onClick} className="button-red">
      {label}
    </BaseButton>
  )
}
export default ButtonRed
