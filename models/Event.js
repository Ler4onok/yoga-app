const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    participants: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = model("Event", schema);
