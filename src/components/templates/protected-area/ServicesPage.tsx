import React, { useCallback } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useServiceContext } from "../../../hooks/useServiceContext"
import { ServiceList } from "../../molecules/service-list/ServiceList"
import Service from "../../../models/Service"

function ServicesPage() {
  const { id } = useParams()
  const history = useHistory()
  const Services = useServiceContext({ fetchOnLoad: true })
  const setActiveService = useCallback(
    (item: Service) => history.push(`/services/${item.id}`),
    [history]
  )

  if (Services.loading || !Services.data?.length) return null

  return (
    <div className={"CredentialsPage"}>
      <ServiceList
        services={Services.data}
        onItemClick={setActiveService}
        activeServiceId={parseInt(id)}
      />
    </div>
  )
}

export default ServicesPage
