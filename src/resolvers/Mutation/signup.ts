
import {genSalt,hash} from 'bcrypt'

import User from "../../models/user.model";


interface args{
    params:{
        email: String;
        password: Parameters<typeof hash>[0];
        userName: String;
    }
}

const CreatUserController = async(args:args)=>{
    const salt = await genSalt(10);
    const hashPassword = await hash(args.params.password, salt);
    const newUser = await new User({
        email: args.params.email,
        password: hashPassword,
        userName: args.params.userName
    }).save();
    return newUser;
}

export {
    CreatUserController
}