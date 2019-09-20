const routes = require('next-routes')

module.exports = routes()
.add('index')
.add('detail', '/:slug-:code', 'detail')