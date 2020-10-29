import React from "react"
import "./passwordVisualization.scss"

//show password in different color based on matched char
const PasswordVisualization = (props: any) => {
  let passw = props.valueActual
  let str: any[] = []
  let i: number
  for (i = 0; i < passw.length; i++) {
    if (passw[i].match(/[A-z]/)) {
      str[i] = <span className="passw-alpha">{passw[i]}</span>
    } else if (passw[i].match(/[0-9]/)) {
      str[i] = <span className="passw-numbs">{passw[i]}</span>
    } else {
      str[i] = <span className="passw-special">{passw[i]}</span>
    }
  }
  return <span className="passwVisual">{str}</span>
}

export default PasswordVisualization
