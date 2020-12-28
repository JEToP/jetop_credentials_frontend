import React, { ReactNode } from "react"
import BaseButton from "../BaseButton"
import "./ButtonDelete.scss"

type ButtonDeleteProps = {
  onClick: ()=> void
  label: string
}
const ButtonDelete = ({ onClick, label }: ButtonDeleteProps) => {
  return (
    <BaseButton onClick={onClick} className="button-delete">
      {label}
    </BaseButton>
  )
}
export default ButtonDelete
