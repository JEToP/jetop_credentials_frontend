import React, { ReactNode } from "react"
import BaseButton from "../BaseButton"
import "./ButtonEdit.scss"

type ButtonEditProps = {
  onClick: ()=> void
  label: string
}
const ButtonEdit = ({ onClick, label }: ButtonEditProps) => {
  return (
    <BaseButton onClick={onClick} className="button-edit">
    {label}
    </BaseButton>
)
}
export default ButtonEdit
