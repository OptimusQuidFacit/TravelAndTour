import { getUsers } from "@/lib/data";
import styles from "./admin.module.css";
import Users from "@/components/admincomponents/users/Users";
import UserPie from "@/components/admincomponents/charts/UserPie";
// import UpdateUser from "@/components/admincomponents/updateuser/UpdateUser";


const page = async () => {
    const users = await getUsers();
    // console.log(users);
    return (
        <div className="h-100">
            <div className={` ${styles.section1}`}>
                <Users users={users}/>
            </div>
            <div className={`${styles.section2}`}>
                <UserPie/>
            </div>
        </div>

    );
}

export default page;