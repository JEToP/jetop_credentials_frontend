import React from "react"
import PasswordVisualization from "./passwordVisualization"

const PasswordHistory = (props: any) => {
  const { history } = props

  return (
    <div>
      <div>
        <PasswordVisualization valueActual={history[0]} />
        <span> data: 00/00/0000</span>
      </div>
      <div>
        <PasswordVisualization valueActual={history[1]} />
        <span> data: 00/00/0000</span>
      </div>
      <div>
        <PasswordVisualization valueActual={history[2]} />
        <span> data: 00/00/0000</span>
      </div>
    </div>
  )
}

export default PasswordHistory
