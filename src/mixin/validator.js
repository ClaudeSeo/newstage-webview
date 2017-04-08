export default {
  methods: {
    validateURL (url) {
      const regex = /^(((http(s?)):\/\/)?)([0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}(:[0-9]+)?(\/\S*)?$/
      return regex.test(url)
    }
  }
}
