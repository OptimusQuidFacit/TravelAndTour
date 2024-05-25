// "use client"
// import Head from "next/head";
// import Link from "next/link";
// import styles from "./register.module.css";
// import { Google } from "@mui/icons-material";
// import { useFormState } from "react-dom";
// import { addUser } from "@/lib/controllers/user";

import Register from "@/components/register/Register";

export const metadata= {   
    title: "Join Our Travel Community: Register for Exclusive Benefits",
    description: "Become a part of our vibrant travel community and unlock exclusive benefits by registering for an account. Gain access to personalized recommendations, special offers, and seamless booking experiences. Join us today and start your journey towards unforgettable adventures."
}

const page = () => {
    // const [state, formAction]= useFormState(addUser, undefined);
    
    return (
        <>
           <Register/>
        </>
    );
}

export default page;