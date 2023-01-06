"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const event_model_1 = require("../models/event.model");
exports.resolvers = {
    Query: {
        getAllEvents: async () => {
            try {
                const events = await event_model_1.EventModel.find({});
                return events;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        },
    },
    Mutation: {
        mutateHello: () => "this is mutated hello",
    },
};
