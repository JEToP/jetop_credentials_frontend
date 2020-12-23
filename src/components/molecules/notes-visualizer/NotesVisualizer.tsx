import React from "react"
import "./NotesVisualizer.scss"


type noteProps = {
    editMode: boolean
    currentNote: string
}


const NotesVisualizer = (props: noteProps) => {
    const { editMode, currentNote } = props
    if (editMode) {
        return (
                <div className="textbox">
                    <input className="edit" type="text" placeholder="note on peppecerami"></input>
                </div>
        ) //Same here. onFocus? onBlur?
    }
    else {
        return (
                <p>Lorem ipsum dolor sit amet consectetur,adipisicing elit.
                Consectetur sequi facere, maxime exercitationem qui neque a quam
                magni esse quibusdam commodi cum iure nesciunt dolorem vero libero
                et sit odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae eligendi, ullam neque praesentium fugit voluptate, asperiores
                consectetur ipsa consequatur culpa voluptatum architecto, accusamus
                illo officia iste incidunt aspernatur odit natus.</p>
        )
    }
}

// focus and unfocus functions?

export default NotesVisualizer