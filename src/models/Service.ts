export default interface Service {
  id?: number
  name: string
  favicon?: string
  notes?: string
  url?: string
}

interface ServiceOverrides {
  id?: number
  name?: string
  favicon?: string
  notes?: string
  url?: string
}

class _ServiceFaker {
  single(overrides?: ServiceOverrides): Service {
    const index = Math.floor(Math.random() * FAKE_DATA.length)
    return {
      ...(overrides ?? {}),
      ...FAKE_DATA[index],
    }
  }

  array(size?: number, overrides?: ServiceOverrides[]): Service[] {
    if (!size) return FAKE_DATA

    const that = this
    return [...new Array(size)].map((element, index) => {
      return that.single((overrides ?? [])[index])
    })
  }
}

const FAKE_DATA: Service[] = [
  {
    id: 12,
    name: "FunXPS x JEMP",
    favicon:
      "https://c.1password.com/richicons/images/login/120/www.airbnb.com.png",
    url: "https://funxps-dev.web.app",
  },
  {
    id: 13,
    name: "Crash&Go x Maribello",
    favicon:
      "https://uploads-ssl.webflow.com/5dff758010bfa7f94c98e37e/5e578ae13dfad1d012388287_favicon-flat%20small.png",
  },
  {
    id: 14,
    name: "Apple Developers",
    favicon:
      "https://c.1password.com/richicons/images/login/120/www.apple.com.png",
  },
  {
    id: 15,
    name: "Amazon Web Services",
    favicon:
      "https://c.1password.com/richicons/images/login/120/www.aws.com.png",
  },
]

export const ServiceFaker = new _ServiceFaker()
