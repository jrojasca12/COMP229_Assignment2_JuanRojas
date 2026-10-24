const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const usersSchema = new Schema({
    firstname: String,
    lastname: String, 
    email: String, 
    password: String, 
    created: Date,
    updated: Date 
})
usersSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.password;

    }
});

module.exports = mongoose.model("Users", usersSchema);