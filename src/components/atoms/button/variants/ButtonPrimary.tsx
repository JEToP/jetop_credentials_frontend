import React, { ReactNode } from "react"
import BaseButton from "../BaseButton"
import "./ButtonSave.scss"

type ButtonSaveProps = {
  onClick: ()=> void
  label: string
}
const ButtonSave = ({ onClick, label }: ButtonSaveProps) => {
  return (
    <BaseButton onClick={onClick} className="button-save">
    {label}
    </BaseButton>
)
}
export default ButtonSave
