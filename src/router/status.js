import express from "express"

const router = express.Router()

router.get("/status", (req, res) => {
    return res.json({ status: 'PDF api is running' })
})

export default router
