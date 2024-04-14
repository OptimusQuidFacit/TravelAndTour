import mongoose from "mongoose";


export const connectToDb= async ()=>{
    // since a page refresh would prompt a this function to run again wherever it is called
    // I would not want to reconnect everytime the page refreshes but instead use the existing connection
    const connection= {}
    try{
        if (connection.isConnected){
            console.log('use existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected= db.connections[0].readyState;
    }
    catch(err){
        console.log(err);
        // throw new Error(`Could not connect to Database`)
    }
}

