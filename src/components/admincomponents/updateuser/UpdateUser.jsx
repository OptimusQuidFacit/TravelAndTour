"use client"
import { Close } from "@mui/icons-material";
import styles from "./updateuser.module.css"
import { useState } from "react";
import {useFormState} from "react-dom";
import { updateUser } from "@/lib/controllers/user";
const UpdateUser = ({ prop}) => {
    const [updatingUser, setUpdatingUser] = prop;
    let user=updatingUser;
    const [isChecked, setIsChecked] = useState(user.admin);
    const [state, formAction]= useFormState(updateUser, undefined);
    return (
        <>
            <div className={styles.container}>
                <div className="text-end p-3">
                    <Close style={{cursor: "pointer"}} onClick={()=>setUpdatingUser(null)}/>
                </div>
                <form  action={formAction} className="p-3">
                    <div className="d-flex">
                        <label htmlFor="email" className="me-4">Email:</label>
                        <input className="rounded-2" type="text" name="email" id="email" defaultValue={user.email}/>
                    </div>
                    <div className="d-flex mt-3">
                        <label htmlFor="admin" className="me-4">Admin:</label>
                        <input className="rounded-2" type="checkbox" name="admin" id="admin" 
                        onChange={() => setIsChecked(!isChecked)} checked={isChecked} value={isChecked}/>
                    </div>
                    <input type="hidden" name="id" value={user._id} />
                    <div className="mt-3 text-center">
                        <input className="btn btn-secondary" type="submit" value='Update'/>
                    </div>
                    <div>
                        {
                            state?.error&&<p className="text-warning">{state.error}</p>
                        }
                        {
                            state?.message&&<p className="text-white text-center">{state.message}</p>
                        }
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default UpdateUser;