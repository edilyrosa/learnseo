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
                    <label className= {`${montserrat.className} antialiased parrafo`} >Lo Ultimo en... </label> 
                        
                        {menuOpen && <Sidebar />} 
                    


                     <Link {...{href: '/', className: path === '/' ? 'link-active-h' : ''}} >  
                    
                        <i > 
                         <span >La Portada</span> 
                        </i>
                    </Link>

                 
                    <Link {...{href: '/celebridades', className: path === "/celebridades" ? 'link-active-h': ''}}>
                        <i >  <span>Celebridades</span></i>
                    </Link> 

                    <Link {...{href:'/moda', className:path === "/moda" ? 'link-active-h': ''}}>
                        <i>  <span>Moda y Tendencias</span></i>
                    </Link> 

                    <Link {...{href:'/belleza', className:path === "/belleza" ? 'link-active-h': ''}}>
                        <i> <span>Secretos de Belleza</span></i>
                    </Link> 

                    {/*<Link {...{href:'/viaje', className:path === "/viaje"? 'link-active-h': ''}}>
                        <i> <span>Viajes y Destinos</span></i>
                    </Link>*/}

                    <Link {...{href:'/deportes', className:path === "/deportes"? 'link-active-h': ''}}>
                        <i> <span>Deportes</span></i>
                    </Link>

                    <Link {...{href:'/horoscopo', className:path === "/horoscopo"? 'link-active-h': ''}}>
                        <i> <span>Tu horoscopo</span></i>
                    </Link>

                    {/* <Link {...{href:'/entretenimiento', className:path === "/entretenimiento"? 'link-active-h': ''}}>
                        <i> <span>Entretenimiento</span></i>
                    </Link> */}

                </section>
        </div>);
}

export default Header;