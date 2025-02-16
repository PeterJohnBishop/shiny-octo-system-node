import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).send({message: "Welcome to my Node/Express server!"});
})

export default router;