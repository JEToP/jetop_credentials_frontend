import React, { useState } from "react"
import "./ServiceList.scss"
import Service from "../../../models/Service"
import { ServiceListItem } from "../../atoms/service-list-item/ServiceListItem"
import { SearchBar } from "../../atoms/search-bar/SearchBar"

interface ServiceListProps {
  services: Service[]
  activeServiceId?: number
  onItemClick?(item: Service): any
}

export function ServiceList(props: ServiceListProps) {
  const [searchValue, setSearchValue] = useState<string | null>(null)

  function _onItemClick(item: Service) {
    if (typeof props.onItemClick === "function") props.onItemClick(item)
  }

  const filteredServices = props.services.filter(
    (service) =>
      !searchValue ||
      service.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  )

  const mappedServices = filteredServices.map((service) => (
    <ServiceListItem
      key={`service-item-${service.id}`}
      onClick={() => _onItemClick(service)}
      service={service}
      isActive={service.id === props.activeServiceId}
    />
  ))

  return (
    <div className={"ServiceList"}>
      <SearchBar onChange={(e) => setSearchValue(e.target.value)} />
      <div className={"content"}>{mappedServices}</div>
    </div>
  )
}
