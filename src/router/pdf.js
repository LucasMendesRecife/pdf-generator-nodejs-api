import express from "express"
import { generatePDF } from "../controller/pdf"

const router = express.Router()

router.get("/pdf", generatePDF)

export default router
