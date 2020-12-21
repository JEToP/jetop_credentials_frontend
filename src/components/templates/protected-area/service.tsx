import React, {
  // Component,
  useCallback,
  useEffect,
  // useMemo,
  useState,
} from "react"

import ServiceData from "../../../models/Service"

type ServiceProps = {
  serviceData: ServiceData
  username: string
  password: string
}

const Service = (props: ServiceProps) => {
  const {
    name,
    id,
    // notes,
    url,
    // favicon
  } = props.serviceData
  const { username, password } = props
  const [faviconUrl, setFaviconUrl] = useState("")

  useEffect(() => {
    const isValid = validateProps()
    if (isValid) postNewService()
  })
  // , [props]

  const validateProps = useCallback((): boolean => {
    if (!name) return false
    if (!username) return false
    if (!password) return false
    if (!url) return false

    return true
  }, [name, password, url, username])

  // TODO: can't test this function on localhost but I tested both the RegExp and they work as intended.
  // FIXME: I saw that google.com does not use a <link> tag to set it's favicon, more RegExp are needed for those cases.
  const fetchFavicon = async (): Promise<string> => {
    let response = await fetch(url ?? "www.jetop.com")
    let data: string = await response.text()

    // Match any number of characters between <head> tags. Case-insensitive, including newline
    let headContentRegex = /<head>(.*)<\/head>/is
    let matches: RegExpExecArray | null = headContentRegex.exec(data)

    let headContent = ""

    if (matches && matches.length > 1) {
      headContent = matches[1]
    }

    if (!headContent) return ""

    let faviconRegexes: Array<RegExp> = []

    // Matches THE FIRST <link> tag whose [rel] property contains "icon" and extracts the url WITHOUT the domain
    let faviconLinkRegex = /<link.*rel=".*icon.*".*href="(.+)".*>/i
    faviconRegexes.push(faviconLinkRegex)

    // FIXME: add more RegExp to the array in order to handle other cases

    let faviconUrl = ""

    for (let i = 0; i < faviconRegexes.length; i++) {
      let currentRegExp = faviconRegexes[i]
      matches = currentRegExp.exec(headContent)

      faviconUrl = ""

      if (matches && matches.length > 1) {
        faviconUrl = `${url}${matches[1]}`
      }

      if (faviconUrl) break
    }

    // console.log(faviconUrl)

    return faviconUrl
  }

  // FIXME: use actual Endpoint
  const postNewService = async () => {
    return makeHttpRequest("api.jetop-services.com", "POST")
  }

  // FIXME: use actual Endpoint
  // const updateService = async () => {
  //   return makeHttpRequest("api.jetop-services.com", "PATCH")
  // }

  // TODO: Use correct naming system for data
  // TODO: Add access token
  const makeHttpRequest = async (endpoint: string, method: string) => {
    setFaviconUrl(await fetchFavicon())

    const headers = { "Content-Type": "application/json" }

    let data = getDataObject()
    let options = getOptionsObject(method, headers, data)

    return fetch(endpoint, options)
  }

  const getOptionsObject = (method: string, headers: {}, data: {}) => {
    return {
      method,
      headers,
      body: JSON.stringify(data),
    }
  }

  const getDataObject = () => {
    return {
      id,
      serviceName: name,
      username,
      password,
      serviceUrl: url,
      faviconUrl,
    }
  }

  return <div>{faviconUrl}</div>
}

export default Service
