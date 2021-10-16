import mongoose from 'mongoose';

const schema = mongoose.Schema;

const ContactSchema = new schema({
    contactName: String,
    contactNumber: String,
    email: String
}, {
    collection: 'contacts'
});

const Model = mongoose.model("contact", ContactSchema);

export default Model;