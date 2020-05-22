import corsRouter from "./cors"
import statusRouter from "./status"
import pdfRouter from "./pdf"

export default (app) => {
    app.use(corsRouter)
    app.use(statusRouter)
    app.use(pdfRouter)
}
