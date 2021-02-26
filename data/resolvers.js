import {Friend, Aliens} from './dbConnectors'
import { NoDeprecatedCustomRule } from 'graphql';
export const resolvers = {
    Query :{
        getFriend: ({id}) => {
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation:{
        createFriend: (root, {input}) => {
            const newFriend = new Friend ({
            firstName : input.firstName,
            lastName : input.lastName,
            gender : input.gender,
            age : input.age,
            email : input.email,
            contacts : input.contacts
        })
        newFriend.id = newFriend._id;
        return new Promise((resolve, object) => {
            newFriend.save((err) => {
                if(err)
                    reject(err);
                 else resolve(newFriend)
            })
        })
        },
        updateFriend: (root, {input}) => {
            return new Promise((resolve, object) => {
                Friend.findOneAndUpdate({_id:input.id}, input, {new: true}, (err, friend) => {
                    if(err)
                    reject(err);
                 else resolve(friend)
                })
            })
        }
    }
}