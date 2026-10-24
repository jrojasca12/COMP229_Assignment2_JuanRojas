const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const projectsSchema = new Schema({
    title: String, 
    completion: Date,
    description: String,
    image: String 
});
projectsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model("Projects", projectsSchema);