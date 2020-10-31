import React, { useState } from "react"
import { useServiceContext } from "../../../hooks/useServiceContext"
import { ServiceListItem } from "../../atoms/service-list-item/ServiceListItem"
import { ServiceList } from "../../molecules/service-list/ServiceList"
import Service from "../../../models/Service"
import { act } from "react-dom/test-utils"

function CredentialsPage() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const Services = useServiceContext({ fetchOnLoad: true })

  if (Services.loading || !Services.data?.length) return null

  return (
    <div className={"CredentialsPage"}>
      <ServiceList
        services={Services.data}
        onItemClick={setActiveService}
        activeServiceId={activeService?.id}
      />
    </div>
  )
}

export default CredentialsPage
