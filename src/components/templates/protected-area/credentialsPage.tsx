import React from "react"
import { useServiceContext } from "../../../hooks/useServiceContext"
import Password from "./password"

function CredentialsPage() {
  const Services = useServiceContext({ fetchOnLoad: true })

  console.log("services", Services)
  return (
    <Password
      history={["h!story1", "h!story2", "h!story3"]}
      actualPassword="myActualPassw123!!"
    />
  )
}

export default CredentialsPage
