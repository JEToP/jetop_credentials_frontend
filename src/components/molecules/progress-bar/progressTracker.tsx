import React from "react"
import "./progressBar.scss"

const ProgressTracker = (props: { value: number }) => {
  let color = "#ff0000"
  const value = props.value

  if (value < 20) {
    color = "#ff0000"
  } else if (value < 30) {
    color = "#ff4000"
  } else if (value < 40) {
    color = "#ff8000"
  } else if (value < 50) {
    color = "#ffbf00"
  } else if (value < 60) {
    color = "#ffff00"
  } else if (value < 70) {
    color = "#bfff00"
  } else if (value < 80) {
    color = "#80ff00"
  } else if (value < 90) {
    color = "#00ff00"
  } else if (value >= 90) {
    color = "#00ff80"
  }

  const divStyle = {
    background: color,
    width: value + "%",
    height: "100%",
  }

  return <div className="progressTracker" style={divStyle}></div>
}

export default ProgressTracker
