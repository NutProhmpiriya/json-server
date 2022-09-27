
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    const currentTime = new Date().toISOString()

    if (req.method === "POST") {
        req.body.createdAt = currentTime
        req.body.modifiedAt = currentTime;
    } else if (["PUT", "PATCH"].includes(req.method)) {
        req.body.modifiedAt = currentTime;
    }

    next();
});
server.use(router)
server.listen(3501, () => {
    console.log('JSON Server is running 3501')
})