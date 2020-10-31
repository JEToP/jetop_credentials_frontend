import { useState } from "react"
import React from "react"

import "./Account.style.scss"

const LayoutDisplay = {
  VISIBLE: "",
  NOT_VISIBLE: "logout-display-none",
}
type AccountProps = {
  profileImage: string
}
function Account({ profileImage }: AccountProps) {
  const [layoutDisplay, setLayoutDisplay] = useState(LayoutDisplay.NOT_VISIBLE)

  return (
    <div className="account">
      <img
        className="avatar"
        onClick={() =>
          setLayoutDisplay(
            layoutDisplay === LayoutDisplay.NOT_VISIBLE
              ? LayoutDisplay.VISIBLE
              : LayoutDisplay.NOT_VISIBLE
          )
        }
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      />

      <button className={"logout " + layoutDisplay}>Log out</button>
    </div>
  )
}
export default Account
