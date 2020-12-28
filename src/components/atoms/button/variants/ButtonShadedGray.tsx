import React, { ReactNode } from "react"
import BaseButton from "../base-button/BaseButton"
import "./ButtonShadedGray.scss"

type ButtonEditProps = {
  onClick: ()=> void
  label: string
}
const ButtonShadedGray = ({ onClick, label }: ButtonEditProps) => {
  return (
    <BaseButton onClick={onClick} className="button-edit">
    {label}
    </BaseButton>
)
}
export default ButtonShadedGray
