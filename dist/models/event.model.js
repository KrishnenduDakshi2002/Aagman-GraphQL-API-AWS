"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
const mongoose_1 = require("mongoose");
const EventSchema = new mongoose_1.Schema({
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
    },
    mode: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    organizers: {
        type: Array
    },
    imageUri: String,
    participant: Number
}, {
    timestamps: true
});
exports.EventModel = (0, mongoose_1.model)('EventModel', EventSchema);
