import styles from "./admin.module.css";
import Sidebar from "@/components/admincomponents/sidebar/Sidebar";


const RootLayout = async ({children}) => {
    // const users = await getUsers();
    // console.log(users);
    return (
        <div className={`${styles.wrapper} m-4 p-4 shadow shadow-1`}>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            {/* <div className={styles.children}>
            </div> */}
                {children}
        </div>

    );
}

export default RootLayout;