import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Schema } from "mongoose";
const schema = mongoose.Schema;

const UserSchema = new schema({
    email: String,
    username: String,
    password: String,
    displayName: String
}, {
    collection: 'users'
});

UserSchema.pre('save', async function(next){
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);

    this.password = hash;
    next();
})

UserSchema.methods.isValidPassword = async function(password){
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

declare global{
    export type UserDocument = mongoose.Document & {
        _id: String,
        email: String,
        username: String,
        password: String,
        displayName: String
    }
}

const Model = mongoose.model("user", UserSchema);

export default Model;