import React, { ReactNode } from "react"
import BaseButton from "../base-button/BaseButton"
import "./ButtonPrimary.scss"

type ButtonSaveProps = {
  onClick: ()=> void
  label: string
}
const ButtonPrimary = ({ onClick, label }: ButtonSaveProps) => {
  return (
    <BaseButton onClick={onClick} className="button-save">
    {label}
    </BaseButton>
)
}
export default ButtonPrimary
