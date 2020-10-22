import { Service } from "../../models/Service"
import { createContext } from "react"

export interface FetchServicesFilters {
  id?: string
}

interface ServiceContextMethods {
  fetchServices(filters?: FetchServicesFilters): any
}

export interface ServiceContextState extends ServiceContextMethods {
  loading: boolean
  errors?: any[]
  data?: Service[]
}

export const ServiceContext = createContext<ServiceContextState>({
  loading: false,
  fetchServices(filters?: FetchServicesFilters): any {},
})
