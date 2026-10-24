const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const referencesSchema = new Schema({
    name: String, 
    testimonial: String, 
    position: String, 
    company: String
});
referencesSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model("References", referencesSchema);