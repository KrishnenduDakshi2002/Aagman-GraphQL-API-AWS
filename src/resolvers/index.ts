import { DiscussionModel } from "../models/discussion.model";
import { LoginController } from "./Mutation/login";
import { CreatUserController } from "./Mutation/signup";
import { GetAllDiscussionsController } from "./Query/discussion";
import { GetAllEventsController } from "./Query/event";

export const resolvers = {
  Query: {
    getAllEvents: GetAllEventsController,
    getAllDiscussions: GetAllDiscussionsController
  },
  Mutation: {
    login: (parent: any,args:any)=> LoginController(args),
    signup: (parent: any,args:any)=> CreatUserController(args)
  },
};
