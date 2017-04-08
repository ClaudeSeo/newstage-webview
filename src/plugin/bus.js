let EventBusPlugin = {}

EventBusPlugin.install = (Vue, option) => {
  const eventBus = new Vue()
  const event = {
  }

  Vue.nsbus = eventBus
  Vue.prototype.$nsbus = eventBus
  Vue.prototype.$nsevent = event
}

export default EventBusPlugin
