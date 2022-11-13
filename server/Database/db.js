import mongoose from 'mongoose'

const Connection=async ()=>{
    const URL = 'mongodb://root:1234@ac-5lasdr9-shard-00-00.qjzjub5.mongodb.net:27017,ac-5lasdr9-shard-00-01.qjzjub5.mongodb.net:27017,ac-5lasdr9-shard-00-02.qjzjub5.mongodb.net:27017/?ssl=true&replicaSet=atlas-g7r2x5-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    }
    catch(err){
        console.error(err);
    }
}

export default Connection;