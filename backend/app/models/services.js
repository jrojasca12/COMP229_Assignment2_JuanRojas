const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const servicesSchema = new Schema({
    title: String, 
    description: String
});
servicesSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model("Services", servicesSchema);