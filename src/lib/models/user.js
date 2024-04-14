import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname:{ type: String, required:true},
    lastname:{ type: String},
    email:{ type: String, required:true, unique:true},
    password:{ type: String},
    img:{ type: String},
    admin:{ type: Boolean, default:false},
    github_id:{ type:String},
    google_id:{ type:String},
}, {timestamps: true});




const User = mongoose.models?.User || mongoose.model('User', userSchema);
export default User;