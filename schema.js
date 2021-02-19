import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        IsFriend: Boolean
        stock: [Stock]
        email: String
    }

    type Stock {
        id: ID
        price: Float
        closingPrice: Float
        name: String
    }
    type Query {
        getFriend(id : ID) : Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        IsFriend: Boolean
        stock: [Stock]
        email: String
    }

    type Mutation {
        createFriend( input: FriendInput): Friend
    }
    `)

export default schema;