"use client"
import { useState } from "react";
import './header.css'
import { montserrat } from '../fonts'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../sideBar/Sidebar";

const initialTheme = true //light
function Header() {
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
        <div className="head">
                <section className= {`${montserrat.className} antialiased banner-logo-head`}style={{color:'white'}}>
                
                    <i className="icon-hamburger"><FontAwesomeIcon icon={faBars} onClick={handleSidebarMenu}/></i> 
                    {/* <label className= {`${montserrat.className} antialiased parrafo`} >Learn JavaScript... </label>  */}
                        
                        {menuOpen && <Sidebar />} 
                    


                     <Link {...{href: '/', className: path === '/' ? 'link-active-h' : ''}} >  
                    
                        <i > 
                         <span>Home Page</span> 
                        </i>
                    </Link>


                     <Link {...{href: '/seo/meta', className: path === '/seo/meta' ? 'link-active-h' : ''}} >  
                    
                        <i > 
                         <span>Meta Tags</span> 
                        </i>
                    </Link>


                     <Link {...{href: '/seo/sitemap', className: path === '/seo/sitemap' ? 'link-active-h' : ''}} >  
                    
                        <i > 
                         <span>Sitemap</span> 
                        </i>
                    </Link>

                 
                    <Link {...{href: '/seo/keywords', className: path === "/css/keywords" ? 'link-active-h': ''}}>
                        <i >  <span>Keywords</span></i>
                    </Link> 


                </section>
        </div>);
}

export default Header;