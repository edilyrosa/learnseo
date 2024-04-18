
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
            <i > <FontAwesomeIcon icon={faNewspaper} /> <span>La Portada</span></i>
        </Link>
        </li>

        <li id='li-1'>
          <Link {...{href:'/celebridades', className: path === "/celebridades" ? 'link-active': ''}}>
            <i > <FontAwesomeIcon icon={faFire} /> <span>Celebridades</span></i>
         </Link>  
        </li>

        <li id='li-1'>
        <Link {...{href:'/moda', className: path === "/moda" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faVestPatches} /> <span>Moda y Tendencias</span></i>
         </Link>    
        </li>

        <li id='li-1'>
        <Link {...{href:'/belleza', className:path === "/belleza" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faPaintBrush} /> <span>Secretos de Belleza</span></i>
         </Link>    
        </li>


        {/* <li id='li-1'>
        <Link {...{href:'/viaje', className:path === "/viaje" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faPlaneDeparture} /> <span>Viajes y Destinos</span></i>
         </Link>    
        </li> */}

        <li id='li-1'>
        <Link {...{href:'/deportes', className:path === "/deportes" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faMedal} /> <span>Deportes</span></i>
         </Link>    
        </li>

        <li id='li-1'>
        <Link {...{href:'/horoscopo', className:path === "/horoscopo" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faClover} /> <span> Tu Horoscopo</span></i>
         </Link>    
        </li>

        {/* <li id='li-1'>
        <Link {...{href:'/entretenimiento', className:path === "/entretenimiento" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faIcons} /> <span>Entretenimiento</span></i>
         </Link>    
        </li> */}

        {/* <li id='li-1'>
        <Link {...{href:'/salud', className:path === "/salud" ? 'link-active': ''}}>
         <i> <FontAwesomeIcon icon={faHeartPulse} /> <span>Salud y Biestar</span></i>
         </Link>    
        </li>


        <li id='li-1'>
        <Link href='/comida' className={path === "/comida" ? 'link-active': ''}>
         <i> <FontAwesomeIcon icon={faMortarPestle} /> <span>Comida y Recetas</span></i>
         </Link>    
        </li> */}

      </ul>
    </div>
  );
};

export default Sidebar;


