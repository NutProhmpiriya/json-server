const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now().toString()

    }
    if (req.method === 'PUT' || 'PATCH') {
        req.body.updatedAt = Date.now().toString()
    }
    next()

})

server.use(router)
const port = 3501

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})