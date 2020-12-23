import React from "react"
import "./LabelVisualizer.scss"

type fieldProps = {
    editMode: boolean
    data: {
        label: string
        value: string
    }
}

const LabelVisualizer = (props: fieldProps) => {
    const {editMode, data} = props

    if (editMode) {
        return (
            <div className="LabelVisualizer">
                <div className="editing">
                    <div className="label">
                        <p>{data.label}</p>
                    </div>
                    <div className="textbox">
                        <input className="input" type="text" placeholder={data.label}></input>
                    </div>
                </div>
            </div>
        )
    } 
    return (
        <p>{data.label}</p>
    ) 
}

export default LabelVisualizer