
"use client"
import Link from 'next/link';
import './sidebar.css';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVestPatches, faNewspaper, faFire, faPaintBrush, faClover, faCircleXmark, faMedal} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Sidebar = () => {
  const path = usePathname();
  const [menuOpens, setMenuOpens] = useState(false)
  const handleSidebarMenu = () =>{
      setMenuOpens(!menuOpens)
  }
  return (
    
   <div className={`navbar ${menuOpens?  `closeMenu` : '' } `} id='navbar'>
      
      <div className="iconCloseSidebar">
        <i ><FontAwesomeIcon icon={faCircleXmark} onClick={handleSidebarMenu}/></i>
      </div>
  
      <ul className="menu">

        <li id='li-1'>
         <Link {...{href: '/', className: path === '/' ? 'link-active' : ''}} > 
            <i > <FontAwesomeIcon icon={faNewspaper} /> <span>Home Page</span></i>
        </Link>
        </li>

        <li id='li-1'>
          <Link {...{href:'/javascript', className: path === "/javascript" ? 'link-active': ''}}>
            <i > <FontAwesomeIcon icon={faFire} /> <span>JavaScript</span></i>
         </Link>  
        </li>

        <li id='li-1'>
        <Link {...{href:'/javascript/windowjs', className: path === "/windowjs" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faVestPatches} /> <span>Window Object</span></i>
         </Link>    
        </li>

        <li id='li-1'>
        <Link {...{href:'/javascript/elementsjs', className:path === "/elementsjs" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faPaintBrush} /> <span>HTML Elements</span></i>
         </Link>    
        </li>

        <li id='li-1'>
        <Link {...{href:'/javascript/eventsjs', className:path === '/eventsjs' ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faMedal} /> <span>Handle Events</span></i>
         </Link>    
        </li>


      </ul>
    </div>
  );
};

export default Sidebar;


