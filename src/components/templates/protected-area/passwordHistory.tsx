import React from "react"
import PasswordVisualization from "./passwordVisualization"

const PasswordHistory = (props: any) => {
  const { history } = props

  return (
    <div>
      <div>
        <PasswordVisualization valueActual={history[0]} />
      </div>
      <div>
        <PasswordVisualization valueActual={history[1]} />
      </div>
      <div>
        <PasswordVisualization valueActual={history[2]} />
      </div>
    </div>
  )
}

export default PasswordHistory
