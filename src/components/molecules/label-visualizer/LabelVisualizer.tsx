import React, { ReactNode } from "react"
import "./LabelVisualizer.scss"

type LabelVisualizerProps = {
  editMode: boolean
  data: {
    label: string
    value: JSX.Element
  }
}

// This component returns a label which should describe what the value is (i.e. a username or a passsword) and another label
// which is the value (i.e. the actual username or password). The second label will be replaced with an input which allows
// to change the value when editMode is set to true.

const LabelVisualizer = (props: LabelVisualizerProps) => {
  const { editMode, data } = props

  if (editMode) {
    return (
      <div className="LabelVisualizer">
        <div className="editing">
          <div className="label">
            <p>{data.label}</p>
          </div>
          <div className="textbox">
            <input
              className="input"
              type="text"
              placeholder={data.label}
            ></input>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="LabelVisualizer">
      <div className="show">
        <div className="label">
          <p>{data.label}</p>
        </div>
        <div className="value">{data.value}</div>
      </div>
    </div>
  )
}

export default LabelVisualizer
