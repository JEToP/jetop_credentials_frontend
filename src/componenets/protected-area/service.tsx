import React, { Component } from "react"

class Service extends Component<ServiceProps, ServiceState> {
  static defaultProps: ServiceProps = {
    serviceUrl: "https://www.jetop.com",
    nickname: "JEToP Account",
    username: "example@jetop.com",
    password: "PraticamenteFinit0",
    lastUsedPasswords: [],
  }

  constructor(props: ServiceProps) {
    super(props)

    // This line allows me to use the 'this' keyword inside the following methods method
    this.validateProps = this.validateProps.bind(this)
    this.fetchFavicon = this.fetchFavicon.bind(this)
    this.postNewService = this.postNewService.bind(this)

    let isValid = this.validateProps()

    if (isValid) {
      this.postNewService()
    } else {
      throw "Error: invalid props provided to Service Component"
    }
  }

  validateProps(): boolean {
    if (!this.props.nickname) return false
    if (!this.props.username) return false
    if (!this.props.password) return false
    if (!this.props.serviceUrl) return false

    return true
  }

  // TODO can't test this function on localhost but I tested both the RegExp and they work as intended.
  // TODO I saw that google.com does not use a <link> tag to set it's favicon, more RegExp are needed for those cases.
  async fetchFavicon(): Promise<string> {
    let response = await fetch(this.props.serviceUrl)
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
        faviconUrl = `${this.props.serviceUrl}${matches[1]}`
      }

      if (faviconUrl) break
    }

    // console.log(faviconUrl)

    return faviconUrl
  }

  // TODO use actual Endpoint and structure data with the correct name system
  async postNewService() {
    let faviconUrl = await this.fetchFavicon()
    this.setState({ faviconUrl })

    const DatabaseAPIPath = ""

    let data = {
      serviceName: this.props.nickname,
      username: this.props.username,
      password: this.props.password,
      serviceUrl: this.props.serviceUrl,
      faviconUrl: this.state.faviconUrl,
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

  render() {
    return <div></div>
  }
}

type ServiceProps = {
  serviceUrl: string
  nickname: string
  username: string
  password: string
  lastUsedPasswords: Array<string>
}

type ServiceState = {
  faviconUrl: string
}

export default Service
