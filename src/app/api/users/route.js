import { connectToDb } from "@/lib/config/dbconnection";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export const GET = async (request)=>{
    try{
        connectToDb();
        // const {id} = request.params.id;
        const users = await User.find({});
        // console.log(order)

        if(users) return NextResponse.json(users);
        else{
            return NextResponse.json("Users not found");
        }

    }
    catch(err){
        console.log(err);
    }
}