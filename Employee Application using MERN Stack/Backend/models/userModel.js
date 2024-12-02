import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number
})
const userdata =mongoose.model('userdata', userSchema);
export default userdata;