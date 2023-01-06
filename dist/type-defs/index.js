"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
type Event{
    eventName: String!
    description: String!
    startTime: String!
    endTime: String
    startDate: String!
    endDate: String
    mode: String!
    type: String!
    organizers: [String]!
    eventLink: String
    imageUri: String
    participant: Int
  },   
  type Query {
    getAllEvents: [Event]
    getEvent: Event
  },
  type Mutation{
    mutateHello: String
  }
`;
