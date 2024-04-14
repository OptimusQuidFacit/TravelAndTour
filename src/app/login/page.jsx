"use client"
import Head from "next/head";
import Link from "next/link";
import styles from "./login.module.css";
import { GitHub, Google } from "@mui/icons-material";
import {useFormState} from "react-dom"
import { handleGitHubLogin, handleGoogleLogin, login } from "@/lib/controllers/user";

// export const metadata= {
//     title: "Unlock Exclusive Benefits: Log in to Your Travel Account", 
//     description: "Access personalized offers, manage bookings, and enjoy a seamless travel experience by logging in to your account. Stay updated with your travel plans, earn rewards, and unlock exclusive benefits. Log in now and start exploring the world with ease."    
// }
const page = () => {
    const [state, formAction] = useFormState(login, undefined);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />
            </Head>
            <div className={`${styles.container}`}>
                <h1 className={styles.heading}>Login</h1>
                <form action={formAction}>
                    <input className={`${styles.input} mb-3`} type="email" name="email" placeholder="Enter your email" id="email" />
                    <input className={`${styles.input} mb-3 `} type="password" name="password" placeholder="Enter your Password" id="password" />
                    <input className={`${styles.input} rounded rounded-1 bg-primary text-white mb-3`} type="submit" value={`Submit`}/>
                </form>
                {state?.error&&<p className="text-danger">{state.error}</p>}
                <div className={`${styles.login} text-center`}>
                    <form action={handleGoogleLogin}>
                        <button className="btn btn-info text-white ">
                            Sign in with Google <Google/>
                        </button>
                    </form>
                    <form className="mt-3" action={handleGitHubLogin}>
                        <button className="btn btn-secondary text-white ">
                            Sign in with GitHub <GitHub/>
                        </button>
                    </form>
                </div>
                <div className="alreadyText">
                    <p>
                    Don't have an account? 
                        <Link className="ms-2" href={`/register`}>
                           Sign Up
                        </Link>
                        
                    </p>
                </div>
            </div>
        </>
    );
}

export default page;