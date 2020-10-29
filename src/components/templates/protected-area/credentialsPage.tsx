import React from "react"
import { useServiceContext } from "../../../hooks/useServiceContext"

function CredentialsPage() {
  const Services = useServiceContext({ fetchOnLoad: true })

  console.log("services", Services)
  return <p>Protected area</p>
}

export default CredentialsPage
