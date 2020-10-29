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
    return {
      ...(overrides ?? {}),
      id: 12,
      name: "FunXPS",
    }
  }

  array(size: number, overrides?: ServiceOverrides[]): Service[] {
    const that = this
    return [...new Array(size)].map((element, index) => {
      return that.single((overrides ?? [])[index])
    })
  }
}

export const ServiceFaker = new _ServiceFaker()
