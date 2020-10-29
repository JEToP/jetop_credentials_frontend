import { useContext, useEffect } from "react"
import { ServiceContext } from "../contexts/service-context/ServiceContext"

export interface UseServiceContextConfig {
  fetchOnLoad?: boolean
}

export function useServiceContext(config?: UseServiceContextConfig) {
  const Service = useContext(ServiceContext)

  useEffect(() => {
    if (!config?.fetchOnLoad) return
    if (Service.loading) return
    if (Service.errors) return
    if (Service.data) return
    Service.fetchServices()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return Service
}
