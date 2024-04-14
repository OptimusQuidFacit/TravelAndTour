import { connectToDb } from "@/lib/config/dbconnection";
import Orders from "@/lib/models/orders";
import { NextResponse } from "next/server";

export const GET = async (request, {params})=>{
    
    const {slug}= params;
    try{
        connectToDb();
        // const {id} = request.params.id;
        const order = await Orders.findOne({_id:slug});
        // console.log(order)
        const {_id, flight_Fee, accommodationFee ,destination, accommodation, checkIn, guests, nights, Airline, take_Off_Time, comments} = order;

        if(order) return NextResponse.json({_id, destination, flight_Fee, accommodation, accommodationFee, checkIn, guests, nights, Airline, take_Off_Time, comments});
        else{
            return NextResponse.json("Order not found");
        }

    }
    catch(err){
        console.log(err);
    }
}