class RequestAddress {
  constructor() {
    this.address = this.interface()
    this.baseUrl = [{
        key: 'getUrl',
        value: 'getdefaultValue'
      },
      {
        key: 'saveUrl',
        value: 'saveDefaultValue'
      },
      {
        key: 'delUrl',
        value: 'delDefaultValue'
      },
    ]
    for (const item in this.address) {
      this.baseUrl.map(url => {
        if (!this.address[item][url.key]) {
          this.address[item][url.key] = url.value
        }
      })

    }
    return this.init(this.address)
  }
  init(data) {
    let apiPath = {}
    for (const item in data) {
      for (const i in data[item]) {
        let key = this.caseToCase(item, data[item][i])
        let value = this.getPath(item, data[item][i])
        apiPath = {
          ...apiPath,
          [key]: value
        }
      }
    }
    return apiPath
  }
  getPath(key, value) {
    return `/api/${key}/${value}`
  }
  caseToCase(str, ...arg) {
    arg.map(item => {
      let w = item.slice(0, 1)
      str += item.replace(w, w.toUpperCase())
    })
    return str
  }
  interface() {
    return {
      system: {},
      user: {
        getUrl: 'getSelfUser',
        saveUrl: 'saveSelfUser',
        delUrl: 'delSelfUser'
      },
      opm: {

      }
    }
  }
}
const requestAddress = new RequestAddress()
export default requestAddress