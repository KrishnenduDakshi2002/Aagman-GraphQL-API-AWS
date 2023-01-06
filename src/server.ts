import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import serverlessExpress from "@vendia/serverless-express";
import express from "express";
import { json } from "body-parser";
import  cors from "cors";

import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";
import connect from "./db";


const main = () =>{
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });
  
  server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();
  
  const app = express();
  app.use(cors(), json(), expressMiddleware(server,{
    // this context will be available to all resolvers
    context : async ({req,res})=> ({
      token: req.headers.authorization
    })
  }));
  app.listen(4000,()=>{
    connect();
    console.log(`server running : http://localhost:4000`)
  })
  return app;
}

const app = main();

exports.graphqlHandler = serverlessExpress({ app });
