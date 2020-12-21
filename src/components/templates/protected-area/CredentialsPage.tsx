import React, { useState } from "react"
import { useServiceContext } from "../../../hooks/useServiceContext"
import Password from "./password"
import { ServiceList } from "../../molecules/service-list/ServiceList"
import Service from "../../../models/Service"

function CredentialsPage() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const Services = useServiceContext({ fetchOnLoad: true })


  console.log("services", Services)

  if (Services.loading || !Services.data?.length) return null
      
  return (
    <div className={"CredentialsPage"}>
      <ServiceList
        services={Services.data}
        onItemClick={setActiveService}
        activeServiceId={activeService?.id}
      />
      <Password
        history={["h!story1", "h!story2", "h!story3"]}
        actualPassword="myActualPassw123!!"
      />
    </div>

  )
}

export default CredentialsPage
