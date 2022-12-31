// routing
const { Router, response } = require("express");
// validation middleware
const { check, validationResult } = require("express-validator");
// config
const config = require("config");
// models
const Event = require("../models/Event");

const router = Router();

router.post("/add", async (request, response) => {
    try {
        const { name, date, participants, price } = request.body;
        console.log({ name, date, participants, price });

        const event = new Event({ name, date, participants, price });
        await event.save();

        return response
            .status(201)
            .json({ message: "Event successfully created." });
    } catch (error) {
        console.log(error);
    }
});

router.get("/events", async (request, response) => {
    try {
        Event.find((error, events) => {
            if (error) return console.error(error);
            response.send(events);
        });
    } catch (error) {
        console.log(error);
    }
});

// creating and exporting a module
module.exports = router;
