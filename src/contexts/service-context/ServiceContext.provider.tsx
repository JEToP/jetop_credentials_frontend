import React, { useState } from "react"
import {
  FetchServicesFilters,
  ServiceContext,
  ServiceContextState,
} from "./ServiceContext"
import { fakeRequest } from "../../libs/FakeRequest"
import { ServiceFaker } from "../../models/Service"

export function ServiceContextProvider({ children }: any) {
  const [state, setState] = useState<ServiceContextState>({
    loading: false,
    errors: undefined,
    data: undefined,
    fetchServices: fetchServices,
  })

  async function fetchServices(filters?: FetchServicesFilters) {
    console.log("fetchServices", filters)

    setState({
      ...state,
      loading: true,
    })

    const result = await fakeRequest(true, ServiceFaker.array())

    setState({
      ...state,
      loading: false,
      data: result,
    })

    return result
  }

  return (
    <ServiceContext.Provider value={state}>{children}</ServiceContext.Provider>
  )
}
