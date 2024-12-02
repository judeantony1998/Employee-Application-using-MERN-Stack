import mongoose from "mongoose";
const employeeSchema = mongoose.Schema({
    name:String,
    email:String,
    address:String,
    phone:Number,
    age:Number,
    role:String,
    image:String
})
const employeeData =mongoose.model('employeedata', employeeSchema);
export default employeeData;