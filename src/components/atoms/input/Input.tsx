import React from "react"
import "./Input.scss"

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export function Input(props: InputProps) {
  return <input {...props} className={`${props.className} Input`} />
}
