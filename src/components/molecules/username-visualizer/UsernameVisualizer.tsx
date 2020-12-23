import React from "react"
import "./UsernameVisualizer.scss"

type usernameProps = {
    user: string
    editMode: boolean
}

const UsernameVisualizer = (props: usernameProps) => {
    const {editMode, user} = props

    if (editMode) {
        return (
            <div className="textbox">
                <input className="edit" type="text" placeholder={user}></input>
            </div>
        )
    } //onFocus? onBlur?
    else {
        return (
            <p>{user}</p>
        ) 
    }
}



// :focus pseudo-selector doesn't work. could this be a viable option?
// 
// const focus = () => {
// let field = document.getElementsByClassName("textbox")
//     field[0].className = "textbox-focus"
// }
// 
// const unfocus = () => {
//     let field = document.getElementsByClassName("textbox-focus")
//     field[0].className = "texbox"
// }


export default UsernameVisualizer