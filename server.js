const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    if (req.method === 'PUT') {
        req.body.updatedAt = Date.now()
    }
    next()

})

server.use(middlewares)
server.use(router)

const port = 3501

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})