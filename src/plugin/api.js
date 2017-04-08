import axios from 'axios'

let ApiPlugin = {}

ApiPlugin.install = (Vue, option) => {
  const rootUrl = process.env.BASE_API_URL
  const apiService = {
    getTopics (page = 1, successCb, errorCb) {
      const params = {
        page: page,
        per_page: 21
      }
      axios.get(`${rootUrl}/v1/topics`, {params: params})
        .then(successCb)
        .catch(errorCb)
    }
  }
  Vue.nsapi = apiService
  Vue.prototype.$nsapi = apiService
}

export default ApiPlugin
