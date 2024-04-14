"use server"

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { connectToDb } from "../config/dbconnection";
import Orders from "../models/orders";
// import PaystackAPI from "paystack-api";

// const paystack= new PaystackAPI(process.env.PAYSTACK_SEC);

export const addOrder = async (prevState, formData)=>{
    const data = Object.fromEntries(formData);
    data.nights =parseInt(data.nights)
    data.guests =parseInt(data.guests)
    data.accommodationFee= data.unitAccommodationPrice * data.nights;
    data.flight_Fee= data.flight_Fee ? data.flight_Fee * data.guests:
    data.flightFee * data.guests;
    const user = await auth();
    data.user= user;
    if(!data.check_In) return {error: "Please fill in the date you want to check-in"}
    const newOrder = new Orders(data);
    let id =null;
    try{
        connectToDb();
        const order= await newOrder.save();
        id=order._id.toString();
        
        // return {message: "Booking successfully submitted"}
    }
    catch(err){
        console.log(err);
        return {error: "Something went Wrong, please contact support"}
    }
    id&&redirect(`/summary/${id}}`);
}

export const updateOrders = async(id, update)=>{
    let modified=false;
    try{

        connectToDb();
        const modifiedOrder = await Orders.findOneAndUpdate({_id:id}, update);
        // console.log(modifiedOrder);
        modified=true;

    }
    catch(err){
        console.log(err);
    }
    // modified&&redirect('/bookings');

}


// export const handlePayment = async (prevState, formData)=>{
//     let data = Object.fromEntries(formData);
//     let {email, total} = data;
//     const payment = await paystack.transaction.initialize({email, amount: total});
//     console.log(payment.data);
// }
