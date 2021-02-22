import mongoose from 'mongoose';

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/friends',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    gender:{
        type: String
    },
    age:{
        type: Number
    },
    email:{
        type: String
    },
    contacts:{
        type: Array
    },
})

const Friends = mongoose.model('friends',friendSchema);
export { Friends }