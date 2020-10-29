import React from "react"
import ProgressTracker from "./progressTracker"
import "./progressBar.scss"

const ProgressBar = (props: any)=>{
    const {percentage} = props;

    return(
        <div className="progressBarDiv">
            <ProgressTracker percentage={percentage}/>
        </div>
    )
}

export default ProgressBar;