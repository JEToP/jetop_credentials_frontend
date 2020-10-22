import React, {
  Component,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"

type ServiceProps = {
  serviceUrl: string
  nickname: string
  username: string
  password: string
  lastUsedPasswords: Array<string>
}

const defaultProps: ServiceProps = {
  serviceUrl: "https://www.jetop.com",
  nickname: "JEToP Account",
  username: "example@jetop.com",
  password: "PraticamenteFinit0",
  lastUsedPasswords: [],
}

const Service = (props: ServiceProps = defaultProps) => {
  const { serviceUrl, nickname, username, password, lastUsedPasswords } = props
  const [faviconUrl, setFaviconUrl] = useState("")

  useEffect(() => {
    const isValid = validateProps()
    if (isValid) postNewService()
  }, [props])

  const validateProps = useCallback((): boolean => {
    if (!nickname) return false
    if (!username) return false
    if (!password) return false
    if (!serviceUrl) return false

    return true
  }, [])

  // TODO can't test this function on localhost but I tested both the RegExp and they work as intended.
  // TODO I saw that google.com does not use a <link> tag to set it's favicon, more RegExp are needed for those cases.
  const fetchFavicon = async (): Promise<string> => {
    let response = await fetch(serviceUrl)
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

    // TODO add more RegExp to the array in order to handle other cases

    let faviconUrl = ""

    for (let i = 0; i < faviconRegexes.length; i++) {
      let currentRegExp = faviconRegexes[i]
      matches = currentRegExp.exec(headContent)

      faviconUrl = ""

      if (matches && matches.length > 1) {
        faviconUrl = `${serviceUrl}${matches[1]}`
      }

      if (faviconUrl) break
    }

    // console.log(faviconUrl)

    return faviconUrl
  }

  // TODO use actual Endpoint and structure data with the correct name system
  const postNewService = async () => {
    setFaviconUrl(await fetchFavicon())
    const DatabaseAPIPath = ""

    let data = {
      serviceName: nickname,
      username: username,
      password: password,
      serviceUrl: serviceUrl,
      faviconUrl: faviconUrl,
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }

    return fetch(DatabaseAPIPath, options)
  }

  return <div>{faviconUrl}</div>
}

type ServiceState = {
  faviconUrl: string
}

export default Service
