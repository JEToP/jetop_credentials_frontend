import React from "react"
import { useServiceContext } from "../../../hooks/useServiceContext"
import Password from "./password"

//at the moment this file is used to show password. Change it if you need
function CredentialsPage() {
  const Services = useServiceContext({ fetchOnLoad: true })

  console.log("services", Services)
  return (
    <Password
      history={["h!story1", "h!story2", "h!story3"]}
      actualPassword="myActualPassw123!!"
      strength="81%"
    />
  )
}

export default CredentialsPage
