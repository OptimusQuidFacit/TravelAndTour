"use client"
import Link from "next/link";
import Menulink from "../Menulink/Menulink";
import styles from "@/components/navbar/Sidebar/sidebar.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
// import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { usePathname } from "next/navigation";
import { handleLogout } from "@/lib/controllers/user";
const Sidebar = ({session}) => {
    const isAdmin= session?.user.isAdmin;
    const links=[
        {name:"Discover Now", path:"/packages"},
        {name:"Explore Top", path:"/destinations"},
        {name:"Trending", path:"/trending"},
    ]
    
    const mobileLinks=[
        {name:"Get Started", path:"/bookings"},
        // {name:`${session?'Logout':'Login'}`, path:`${session?'/logout':'/login'}`},
    ]
    isAdmin&&mobileLinks.push({
        name: "Admin",
        path: "/admin"
    })
    
    const pathname= usePathname();
    return (
        <div className={`${styles.container}`}> 
            {/* <div className="text-end">
               <MenuIcon className={styles.menuinbar} />
            </div> */}
            <div className={`${styles.mobileContainer}`}>
                {mobileLinks.map(link=>
                    <div className={`btn ${link.path===pathname?styles.active:"btn-secondary"}`}>
                        <Link className={styles.link} href={link.path}>{link.name}</Link>
                    </div>)}
            </div>
           <ul className={`${styles.navitems} text-center `}>
                {
                    links.map(link=>
                        <li className={`mt-5 text-white ${styles.menuItem}`} key={link.path}>
                            <Link className={`${styles.link} ${link.path===pathname&&styles.active}`} href={link.path}>
                                {link.name}
                            </Link>
                            <hr/>
                        </li>
                        )
                }
           </ul>

           <div className={styles.bottomcontainer}>
            { session ? 
                <form action={handleLogout}>
                    <button className="btn btn-secondary">
                       <LogoutIcon/> Logout
                    </button>
                </form> :

                <Link className={styles.logout} href={"/login"}>
                    
                    { <span><LoginIcon/> Login</span>}
                </Link> 
            }
           </div>
        </div>
    );
}

export default Sidebar;