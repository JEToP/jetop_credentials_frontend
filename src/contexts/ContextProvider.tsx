import React from "react"
import { ServiceContextProvider } from "./service-context/ServiceContext.provider"

export function ContextProvider({ children }: any) {
  return <ServiceContextProvider>{children}</ServiceContextProvider>
}
