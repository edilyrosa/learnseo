"use client"
import { useState } from "react";
import './header.css'
import { montserrat } from '../fonts'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../sideBar/Sidebar.jsx";

const initialTheme = true //light
function HeaderHome() {
    const path = usePathname();
    const [theme, setTheme] = useState(initialTheme);
    
    const handleTheme = (e) => {
        if(theme === true) {
            setTheme(false)
            document.querySelector('body').classList.add("darkTheme"); 
        }
        else{
            setTheme(true) 
            document.querySelector('body').classList.remove("darkTheme"); 
        }     
    }
    const [menuOpen, setMenuOpen] = useState(false)
    const handleSidebarMenu = () =>{
        setMenuOpen(!menuOpen)
    }
    return ( 
        <div className="head head-home">
                <section className= {`${montserrat.className} antialiased banner-logo-head-home banner-logo-head`}style={{color:'white'}}>
                
    
                     <Link {...{href: '/javascript', className: path === '/javascript' ? 'link-active-h' : ''}} >  
                    
                        <i > 
                         <span>Learn JavaScript</span> 
                        </i>
                    </Link>


                     <Link {...{href: '/seo', className: path === '/seo' ? 'link-active-h' : ''}} >  
                    
                        <i > 
                        <span>Learn SEO</span> 
                        </i>
                    </Link>

                 
                    <Link {...{href: '/css', className: path === "/css" ? 'link-active-h': ''}}>
                        <i >  
                        <span>Learn CSS</span> 
                        </i>
                    </Link> 


                </section>
        </div>);
}

export default HeaderHome;