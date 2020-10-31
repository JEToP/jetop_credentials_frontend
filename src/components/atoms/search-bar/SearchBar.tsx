import React from "react"
import "./SearchBar.scss"
import { Input } from "../input/Input"

interface SearchBarProps {
  onChange?(event: React.ChangeEvent<HTMLInputElement>): any
}

export function SearchBar(props: SearchBarProps) {
  return (
    <div className={"SearchBar"}>
      <Input
        type={"search"}
        placeholder={"Cerca..."}
        onChange={props.onChange}
      />
    </div>
  )
}
