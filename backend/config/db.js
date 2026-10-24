// import mongoose from 'mongoose';
require('dotenv').config();
const mongoose = require('mongoose');
let ConnectionString=process.env.ATLASDB;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

module.exports = async function(){
    try{
        await mongoose.connect(ConnectionString,clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });

        console.log("You succesfully connected to MongoDB");
        // return mongoose;
    } catch(err){
        console.log("error connecting to mongoDB", err);
        await mongoose.disconnect();
    }
}
// module.exports=connectToMongoDB;