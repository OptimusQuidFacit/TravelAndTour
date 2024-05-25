"use client"
import { useState } from "react";
import UpdateUser from "../updateuser/UpdateUser";
import styles from "./user.module.css"

const Users = ({users}) => {
    const [updatingUser, setUpdatingUser] = useState(null)
    // const [show, setShow] = useState(true);
    return (
        <div>
           {users.map(user=>
                <div key={user.email} className={`d-flex rounded rounded-2 shadow shadow-1 p-2 align-items-center`}>
                    <p className={` ${styles.col}`}>
                        {user.firstname}
                    </p>
                    <p className={` ${styles.col} ${styles.email}` }>
                        {user.email}
                    </p>
                    <div className={`${styles.col} text-center `}>
                        
                    <button className={`btn btn-primary ${styles.userButton}`}
                    disabled={updatingUser&&true}>
                        Delete User</button>
                    </div>
                    <div className={`${styles.col} text-center `}>
                        
                    <button onClick={()=>setUpdatingUser(user)} className={`btn btn-success ${styles.userButton}`}
                     disabled={updatingUser&&true}>
                        Update User
                    </button>
                    </div>
                    {
                        updatingUser&&
                        <UpdateUser prop={[updatingUser, setUpdatingUser]}/>
                    }
                </div>
                )

                }
        </div>
    );
}

export default Users;