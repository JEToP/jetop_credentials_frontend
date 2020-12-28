import React, { ReactNode } from "react"
import "./BaseButton.scss"

type BaseButtonProps = {
  onClick: ()=> void
  children: ReactNode
  className: string
}
const BaseButton = (props: BaseButtonProps) => {
  return (
    <button className={"button " + props.className} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
export default BaseButton
