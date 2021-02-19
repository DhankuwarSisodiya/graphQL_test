import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();
app.get('/', (req,res) => {
    res.send('graphQL is amazing');
})

const root = { friend: () => {
    return {
        "id" : 123456789,
        "firstName": "Shefali",
        "lastName": "Vaidya",
        "gender": "Female",
        "email": "shef.vaid@gmail.com"
    }
}}
app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(8080, () => console.log("Running on server port localhost:8080/graphql"));