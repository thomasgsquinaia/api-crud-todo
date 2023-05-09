const moment = require('moment')

module.exports = {
  getDateToday: () => {
    return moment().format('YYYY-MM-DD HH:mm:ss')
  }
}