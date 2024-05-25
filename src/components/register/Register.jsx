"use client"
import Head from "next/head";
import Link from "next/link";
import styles from "./register.module.css";
import { Google } from "@mui/icons-material";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/controllers/user";

const Register = () => {
    const [state, formAction]= useFormState(addUser, undefined);
    
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />
            </Head>
            <div className={`${styles.container}`}>
                <h1 className={styles.heading}>Register</h1>
                <form action={formAction}>
                    <input className={`${styles.input} mb-3`} type="text" name="firstname" placeholder="Enter your First Name" id="firstname" />
                    <input className={`${styles.input} mb-3`} type="text" name="lastname" placeholder="Enter your Last Name" id="lastname" />
                    <input className={`${styles.input} mb-3`} type="email" name="email" placeholder="Enter your email" id="email" />
                    <input className={`${styles.input} mb-3 `} type="password" name="password" placeholder="Enter your Password" id="password" />
                    <input className={`${styles.input} mb-3`} type="password" name="passwordconfirm" placeholder="Comfirm Password" id="password" />
                    <input className={`${styles.input} rounded rounded-1 bg-primary text-white mb-3`} type="submit" value={`Submit`}/>
                </form>
                <p className="text-danger">
                    {state?.error}
                </p>
                <p className="text-info">
                    {state?.message}
                </p>
                <div className={`${styles.login} text-center`}>
                    <a href="/" className="btn btn-secondary text-white ">
                        Sign in with Google <Google/>
                    </a>
                </div>
                <div className="alreadyText">
                    <p>
                    Already have an account? 
                        <Link className="ms-2" href={`/login`}>
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Register;