var fs = require('fs')
var strftime = require('strftime')
var shell = require('shelljs')
var dataDir = __dirname + '/data/'

shell.mkdir('-p', dataDir)

module.exports = {
  run: function (data, next) {
    var stamp = strftime('%Y-%m-%d-%H:%M:%S:%L-%a')
    fs.writeFileSync(dataDir + stamp + '.txt', data)
    next()
  }
}
