const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
    res.status(200).json ({
        message: "Welcome to our API"
    })
})

module.exports = router;