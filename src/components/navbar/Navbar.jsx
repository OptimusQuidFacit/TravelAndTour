"use client"
import Link from "next/link";
import styles from "@/components/navbar/navbar.module.css"
import Menulink from "./Menulink/Menulink";
import Sidebar from "./Sidebar/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { handleLogout } from "@/lib/controllers/user";
import { usePathname } from "next/navigation";

const Navbar = ({session}) => {
    const isAdmin= session?.user.isAdmin;
    const pathname= usePathname();
    // console.log(pathname.startsWith('/admin'))
    // console.log(session);
    // console.log(session?.user.isAdmin)
    
    const link1 =[
        {name:"Discover Now", path:"/packages"},
        {name:"Explore Top", path:"/destinations"},
        {name:"Trending", path:"/blog"},
    ]

    const link2= [
        {name:"Get Started", path:"/bookings"},
        {name:`${session?'Logout':'Login'}`, path:`${session?'/logout':'/login'}`},
    ]
    isAdmin&& link2.push({
        name: 'Admin',
        path: '/admin'
    })
    
    const [open, setOpen] = useState(false);

    // remove sidebar whenever user clicks outside the the sidebar
    useEffect(()=>{
        const handleClickOutside= (e)=>{
            if(open && !e.target.closest('.sidebar')){
                // setTimeout(()=>{
                        setOpen(false);
                    // }, 1000);
            }
        }
        document.addEventListener('click', handleClickOutside);

        return ()=>{
            document.removeEventListener('click', handleClickOutside);
        }
    }, [open]);
    
    return (
        <div className={`${styles.container} ${pathname.startsWith('/admin')&&styles.admin}`}>
        <div className="d-flex px-5 py-3 justify-content-between align-items-center">
            <div className="container1 d-flex align-items-center">
                <div className="logo fw-bold fs-3 me-3">
                    <Link className={styles.link} href="/">
                        TravelExpl
                    </Link>
                </div>

                <div className={styles.menuContainer}>
                    <ul className={`${styles.navlinks} d-flex align-items-center`}>
                        {
                            link1.map(link=>
                               
                                    <Menulink key={link.path} path={link.path} name={link.name}/>
                                )
                        }
                        
                    </ul>
                </div>
            </div>
            <div className={`${styles.menuContainer} ${styles.menu2}`}>
                <ul className={`${styles.navlinks} d-flex align-items-center`}>
                    {
                        link2.map(link=>
                            <form  key={link?.path} action={link.name==='Logout'?handleLogout:""}>  
                            { link.name!=='Logout'?
                                <Menulink path={link.path} name={link.name} secondlinks={true}/>
                            :
                            <button className="text-white btn btn-primary">
                                Logout
                            </button>}    
                            </form>

                        )
                    }
                </ul>
                
            </div>
            <div className={styles.menuicon} onClick={()=>setOpen(!open)}>
                <MenuIcon/>
            </div>

        </div>
        {open&&
        <div className='sidebar'>
            <Sidebar  session={session}/>
        </div>
            }
        </div>
    );
}

export default Navbar;