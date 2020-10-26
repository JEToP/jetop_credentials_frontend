import React from "react"
import { useServiceContext } from "../../../hooks/useServiceContext"
import PasswGenerator from "./passwordGenerator"

function CredentialsPage() {
  const Services = useServiceContext({ fetchOnLoad: true })

  console.log("services", Services)
  return <PasswGenerator />
}

export default CredentialsPage
