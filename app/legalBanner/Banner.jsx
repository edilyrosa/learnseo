"use client"
import './banner.css'
import { montserrat } from '../fonts'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Banner() {
    const path = usePathname();
   
    return ( 
        <div className="head-banner">
                <section className= {`${montserrat.className} antialiased banner-legal`}style={{color:'white'}}>

                     <Link {...{href: '/cookies', className: path === '/cookies' ? 'link-active-h' : ''}} >  
                    
                        <i > 
                         <span >Cookies</span> 
                        </i>
                    </Link>

                    <Link {...{href: '/privacy-policy', className: path === "/privacy-policy" ? 'link-active-h': ''}}>
                        <i >  <span>Privacy Policy</span></i>
                    </Link> 

                    <Link {...{href:'/legal-notice', className:path === "/legal-notice" ? 'link-active-h': ''}}>
                        <i>  <span>Legal Notice</span></i>
                    </Link> 

                    <Link {...{href:'/about-me', className:path === "/about-me"? 'link-active-h': ''}}>
                        <i> <span>About me</span></i>
                    </Link>
                </section>
        </div>);
}

export default Banner;