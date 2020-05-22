import http from "http"
import express from "express"
import logger from "morgan"
import bodyParser from "body-parser"
import router from "./router"

export function server() {
    const app = express()

    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    router(app)

    const server = http.createServer(app)
    server.listen(parseInt(process.env.PORT, 10) || 8000)
}
