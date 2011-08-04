var server = require('./server')
  , WunderAPI = require('../lib')

var port = 74123

var api = new WunderAPI(
  { root: "http://localhost:" + port
  , compiler: "vows"
  , parser: "markdown"
  })

server.listen(port)
api.compileFile('test/README.md', function(err, vows) {
    if (err) throw(err)

    vows.reporter = require('vows/lib/vows/reporters/spec')
    vows.run(null, function(results) {
        server.close()
    })
})
