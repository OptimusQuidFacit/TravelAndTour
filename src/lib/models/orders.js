import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    user :{type: Object,required:true},
    destination:{type: String, required: true},
    check_In:{type: String, required: true},
    accommodation:{type: String, required: true},
    guests:{type: Number, required: true},
    nights:{type: Number, required: true},
    accommodationFee:{type: Number, required: true},
    flight_Fee:{type: Number, required: true},
    Airline:{type: String, required: true},
    take_Off_Time:{type: String, required: true},
    paid:{type:Boolean, default:false},
    comments:{type: String, },
}, {timestamps: true});




const Orders = mongoose.models?.Orders || mongoose.model('Orders', orderSchema);
export default Orders;