"use client"
import Link from "next/link";
import styles from "./sidebar.module.css"
import { usePathname } from "next/navigation";
const adminMenu1= [
    {name:'Users', path: '/admin'},
    {name:'Bookings', path: '/admin/bookings'},
    {name:'Posts', path: '/admin/posts'},
]
const adminMenu2= [
    {name:'Revenue', path: '/admin/revenue'},
    {name:'Packages', path: '/admin/packages'},
    {name:'Places', path: '/admin/places'},
]

const Sidebar = () => {
    const pathname= usePathname();
    return (
        <div className={`${styles.sidebar} p-4 bg-secondary`}>
            <p className="fs-3 text-white fw-bold">
                General
            </p>
            {
             adminMenu1.map(item=>     
                <Link key={item.path} href={item.path} className={styles.link}>
                    <p className={`${styles.menu} ${item.path===pathname&&styles.active} text-white`}>
                            {item.name}
                    </p>
                </Link>
                )   
            }
            <p className="fs-3 text-white fw-bold mt-5">
                Data
            </p>
            {
             adminMenu2.map(item=>     
                <Link key={item.path} href={item.path} className={styles.link}>
                    <p className={`${styles.menu} ${item.path===pathname&&styles.active} text-white`}>
                            {item.name}
                    </p>
                </Link>
                )   
            }
        </div>
    );
}

export default Sidebar;