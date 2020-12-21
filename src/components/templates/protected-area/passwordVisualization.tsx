import React, { ReactNode, useMemo } from "react"
import "./passwordVisualization.scss"

type PasswordVisualizationProps = {
  password: string
}
const PasswordVisualization = (props: PasswordVisualizationProps) => {
  const { password } = props

  let str: ReactNode[] = useMemo(() => {
    const app: ReactNode[] = []
    console.log(password)
    for (let i = 0; i < password.length; i++) {
      if (password[i].match(/[A-z]/)) {
        app[i] = <span className="passw-alpha">{password[i]}</span>
      } else if (password[i].match(/[0-9]/)) {
        app[i] = <span className="passw-numbs">{password[i]}</span>
      } else {
        app[i] = <span className="passw-special">{password[i]}</span>
      }
    }
    return app
  }, [password])

  return <span className="password-visualizer">{str}</span>
}

export default PasswordVisualization
