import { GraphQLError } from "graphql";
import eventModel from "../../models/event.model"

const GetAllEventsController = async() =>{
    try {
        const events = await eventModel.find({})
        return events;
        
    } catch (error) {
        throw new GraphQLError('sever error')
    }
}


export {
    GetAllEventsController
}