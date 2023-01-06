"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const type_defs_1 = require("./type-defs");
const resolvers_1 = require("./resolvers");
const db_1 = __importDefault(require("./db"));
const main = () => {
    const server = new server_1.ApolloServer({
        typeDefs: type_defs_1.typeDefs,
        resolvers: resolvers_1.resolvers,
    });
    server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)(), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(server, {
        context: async ({ req, res }) => ({
            token: req.headers.authorization
        })
    }));
    app.listen(4000, () => {
        (0, db_1.default)();
        console.log(`server running : http://localhost:4000`);
    });
    return app;
};
const app = main();
exports.graphqlHandler = (0, serverless_express_1.default)({ app });
