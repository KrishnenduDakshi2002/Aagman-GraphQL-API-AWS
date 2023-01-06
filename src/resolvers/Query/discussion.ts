import { DiscussionModel } from "../../models/discussion.model"


const GetAllDiscussionsController = async()=>{
    const discussions = await DiscussionModel.find({});
    return discussions;
}

export {
    GetAllDiscussionsController
}