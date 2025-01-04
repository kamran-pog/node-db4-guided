const express = require("express");
const Animal = require("../models/animal")
const router = express.Router();

router.get("/api", (req, res) => {
    res.status(200).json ({
        message: "Welcome to our API"
    })
})

router.get("/api/animals", async (req, res, next) => {
    try {
        const animals = await Animal.find()
        res.json(animals)
    } catch(err) {
        next(err)
    }
})

module.exports = router;