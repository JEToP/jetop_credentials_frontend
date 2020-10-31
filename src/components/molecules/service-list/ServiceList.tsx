import React from "react"
import "./ServiceList.scss"
import Service from "../../../models/Service"
import { ServiceListItem } from "../../atoms/service-list-item/ServiceListItem"

interface ServiceListProps {
  services: Service[]
  activeServiceId?: number
  onItemClick?(item: Service): any
}

export function ServiceList(props: ServiceListProps) {
  function _onItemClick(item: Service) {
    if (typeof props.onItemClick === "function") props.onItemClick(item)
  }

  const mappedServices = props.services.map((service) => (
    <ServiceListItem
      key={`service-item-${service.id}`}
      onClick={() => _onItemClick(service)}
      service={service}
      isActive={service.id === props.activeServiceId}
    />
  ))

  return <div className={"ServiceList"}>{mappedServices}</div>
}
