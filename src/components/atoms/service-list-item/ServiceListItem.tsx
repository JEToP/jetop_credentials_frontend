import React from "react"
import "./ServiceListItem.scss"
import Service from "../../../models/Service"

interface ServiceListItemProps {
  service: Service
  isActive?: boolean
  onClick?(): any
}

export function ServiceListItem(props: ServiceListItemProps) {
  const activeClass = props.isActive ? "active" : ""

  return (
    <div className={`ServiceListItem ${activeClass}`} onClick={props.onClick}>
      {props.service.favicon ? (
        <img
          src={props.service.favicon}
          className={"favicon"}
          alt={"favicon"}
        />
      ) : (
        <div className={"favicon-placeholder"} />
      )}
      <div className={"name"}>{props.service.name}</div>
    </div>
  )
}
