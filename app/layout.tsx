import "./globals.css";
import Headers from "./header/Header"
import Banner from "./legalBanner/Banner"
import Sumary from './sumary/Sumary.jsx'
import { montserrat } from './fonts'
import './HeadLogo.css'
import logo from './assets/bobS.gif'
import Image from 'next/image';
import './globals.css'
import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

//import { usePathname } from 'next/navigation';
import Link from 'next/link';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

return (
  <html lang="es" id='html'>
  <Headers/>
  {children}
  </html>
  );
}


