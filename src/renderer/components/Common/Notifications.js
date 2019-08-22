const notifier = require('node-notifier')

export const NotificationsMixin = {
  created () {
    this.notify(this.$data.notificationData)
  },
  methods: {
    notify (notifyData) {
      let notificationData = new Notifications(notifyData.title, notifyData.message, notifyData.type)
      notificationData.init()
    }
  }
}

class Notifications {
  constructor (title, message, type) {
    this.title = title
    this.message = message
    this.type = type
  }
  init () {
    if (this.type === 'desktop') {
      notifier.notify({
        'title': this.title,
        'message': this.message,
        'type': this.type
      })
    } else if (this.type === 'popup') {
      console.log('trap')
    }
  }
}
