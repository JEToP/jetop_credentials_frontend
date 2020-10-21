import React, { Component } from "react"

class Service extends Component<ServiceProps> {
  static defaultProps: ServiceProps = {
    serviceUrl: "https://www.google.com",
    nickname: "Google Account",
    username: "example@gmail.com",
    password: "Password",
    lastUsedPasswords: [],
  }

  constructor(props: ServiceProps) {
    super(props)

    this.fetchFavicon = this.fetchFavicon.bind(this)
  }

  // TODO cannot test this function on localhost but I tested both the RegExp and they work as intended   .
  // TODO I saw that google.com does not use a <link> tag to set it's favicon, more RegExp are needed for those cases.
  async fetchFavicon() {
    let response = await fetch(this.props.serviceUrl)
    let data: string = await response.text()

    // Match any number of characters between <head> tags. Case-insensitive, including newline
    let headContentRegex = /<head>(.*)<\/head>/is
    let matches: RegExpExecArray | null = headContentRegex.exec(data)

    let headContent = ""

    if (matches && matches.length > 1) {
      headContent = matches[1]
    }

    if (headContent === "") return null

    /// Matches THE FIRST <link> tag whose [rel] property contains "icon" and extracts the url WITHOUT the domain
    let faviconRegex = /<link.*rel=".*icon.*".*href="(.+)"\s?>/i
    matches = faviconRegex.exec(headContent)

    let faviconUrl = ""

    if (matches && matches.length > 0) {
      faviconUrl = `${this.props.serviceUrl}${matches[1]}`
    }

    if (faviconUrl === "") return null

    console.log(faviconUrl)

    return faviconUrl
  }

  render() {
    this.fetchFavicon()

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

export default Service
