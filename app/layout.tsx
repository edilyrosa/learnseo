import "./globals.css";
import Headers from "./header/Header"
import Banner from "./legalBanner/Banner"
import Sumary from './sumary/Sumary.jsx'
import { montserrat } from './fonts'
import './HeadLogo.css'
import logo from './assets/bobS.gif'
import Image from 'next/image';

import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

//import { usePathname } from 'next/navigation';
import Link from 'next/link';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

return (
    <html lang="es">
    <Headers/>
    <head>

      {/* Google Analitics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
     
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
          `,
        }}></script>


        {/* Google Tag Manager */}
      <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',"${process.env.NEXT_PUBLIC_GOOGLE_TAGS}");`,
            }}
          />

    <title>Último Chisme</title>
    <meta name="lang" content="es"/>
    <meta httpEquiv="Content-Language" content="es" />
    <meta name="DC.Language" content="Spanish"/>
    <meta name="author" content="ultimochisme.com" />
    <meta name="description" content="Este es un sitio web destinado al entretenimiento e información de
       farándula, tendencias de moda, belleza y estilo de vida, celebridades, comida, viajes y lugares de interés.
       Noticias diarias sobre música, series, películas, conciertos, musicales, estrellas de cine, artistas, 
       deportistas, tendencias de moda, consejos de belleza, recetas de cocina, estilo de vida y 
       la novedad de las principales" />
      <meta name="keywords" content="último chisme, chisme, noticias, entretenimiento, secretos de belleza, 
      frutas, vegetales, piel, cabello, dientes, dietas, adelgazar, masajes, mascarillas, cremas, farándula, 
      últimas noticias de la farándula, noticias de farandula, noticias de farandula hoy, farándula hoy, 
      chismes de, Kate Middleton, Princesa de Gales, Shakira, Kardashian, Ariana Grande, taylor swift, 
      Selena Gomez, Sebastián Yatra, Tini Stoessel, Camilo, Evaluna, Karol G, Anitta, Aitana, María Becerra, 
      Emilia Mernes, Duki, Milo J, Moda, cine, famosos, información internacional, cine, música, gastronomía, 
      cocina, pasarelas, belleza, niños, hombres, imágenes de todos los desfiles, exclusivas, noticias, 
      el tiempo, programación televisión, horóscopo, sociedad, novias, realeza, famosos" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3, user-scalable=yes"/>
      <meta name="DC.title" lang="es" content="ultimochisme.com • Portal informativo de actualidad, belleza, 
      lifestyle, moda, música y deportes"/>
      <meta name="DC.description" lang="es" content="Número 1 en actualidad y tendencias. Portal femenino líder 
      en internet. Noticias diarias sobre las estrellas de cine, la música, tendencias de moda, 
      consejos de belleza, recetas de cocina, estilo de vida y la actualidad de las principales artistas y deportistas"/>
      <meta name="DC.subject" lang="es" content="último chisme, chisme, noticias, entretenimiento, secretos de belleza, 
      frutas, vegetales, piel, cabello, dientes, dietas, adelgazar, masajes, mascarillas, cremas, farándula, 
      últimas noticias de la farándula, noticias de farandula, noticias de farandula hoy, farándula hoy, 
      chismes de, Kate Middleton, Princesa de Gales, Shakira, Kardashian, Ariana Grande, taylor swift, 
      Selena Gomez, Sebastián Yatra, Tini Stoessel, Camilo, Evaluna, Karol G, Anitta, Aitana, María Becerra, 
      Emilia Mernes, Duki, Milo J, Moda, cine, famosos, información internacional, cine, música, gastronomía, 
      cocina, pasarelas, belleza, niños, hombres, imágenes de todos los desfiles, exclusivas, noticias, 
      el tiempo, programación televisión, horóscopo, sociedad, novias, realeza, famosos" />
      <meta name="DC.creator" content="ultimochisme.com"/>
      <meta name="DC.publisher" content="ultimochisme.com"/>
      <meta name="origen" content="ultimochisme.com"/>
      <meta name="organization" content="ultimochisme.com"/>
      <meta name="subject" content="noticias"/> 
      <meta name="Classification" content="World, Español, Regional, Europa, España, América, Argentina, Bolivia, 
      Chile, Colombia, Costa Rica, Cuba, República Dominicana, Ecuador, El Salvador, Guatemala, Honduras, 
      México, Nicaragua, Panamá, Paraguay, Perú, Puerto Rico, República del Congo, Uruguay, Venezuela, 
      Andorra, España, Guinea Ecuatorial, GibraltarNoticias y medios, Revistas" />
      <meta http-equiv="Content-Language" content="es"/>
      <meta name="Locality" content="Caracas, Venezuela"/>
      <meta name="geo.placename" content="Caracas, Venezuela"/>
      <meta name="VW96.objecttype" content="Homepage"/>
      <meta name="distribution" content="global"/>
      <meta name="resource-type" content="document"/>
      <meta name="google-site-verification" content="ZQkeK5O0FkeEPn67f_ayWtWwXeUKAAOG5XgfpHPplZM" />
      <meta name="robots" content="all" />

      <meta property="og:title" content="Lo último en Chismes, Realeza, Artistas, viajes, Moda, Celebridades y Farándula" />
      <meta property="og:image" content= "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/logo-ultimochisme%20-%20Copy.png?alt=media&token=e2866bf0-236a-4215-8236-15d6bc6993da"/>
      <meta property="og:description" content="Este es un sitio web destinado al entretenimiento e información de
       farándula, tendencias de moda, belleza y estilo de vida, celebridades, comida, viajes y lugares de interés.
       Noticias diarias sobre música, series, películas, conciertos, musicales, estrellas de cine, artistas, 
       deportistas, tendencias de moda, consejos de belleza, recetas de cocina, estilo de vida y 
       la novedad de las principales"/>
      <meta property="og:url" content="https://www.ultimochisme.com"/>
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content="Último Chisme"/>
      <meta property="og:locale" content="es_LA"/>

      <meta name="HandheldFriendly" content="True"/>
      <meta name="MobileOptimized" content="True"/>
      <link rel="canonical" href="https://www.ultimochisme.com/" />
      
      <meta name="twitter:creator" content="@ultimochisme" />
      <meta name="twitter:title" content="Último Chisme" />
      <meta name="twitter:description" content="Este es un sitio web destinado al entretenimiento e información de
       farándula, tendencias de moda, belleza y estilo de vida, celebridades, comida, viajes y lugares de interes.
       Noticias diarias sobre música, series, películas, conciertos, musicales, estrellas de cine, artistas, 
       deportistas, tendencias de moda, consejos de belleza, recetas de cocina, estilo de vida y 
       la novedad de las principales" />
      <meta name="twitter:card" content="app"/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@ultimochisme"/>
      <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/logo-ultimochisme%20-%20Copy.png?alt=media&token=e2866bf0-236a-4215-8236-15d6bc6993da" /> 

      <meta name="theme-color" content="#fff"/>

      <meta data-itemprop="name" content="Último Chisme"/>
      <meta data-itemprop="logo" content="https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/logo-ultimochisme%20-%20Copy.png?alt=media&token=e2866bf0-236a-4215-8236-15d6bc6993da"/> 
             
      <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16"/>
      <link rel="apple-touch-icon" href="/favicon.ico" sizes="32x32 16x16"/>
      <meta name="msapplication-TileImage" content="https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/logo-ultimochisme%20-%20Copy.png?alt=media&token=e2866bf0-236a-4215-8236-15d6bc6993da"/> 
      <link rel="mask-icon" href="https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/logo-ultimochisme%20-%20Copy.png?alt=media&token=e2866bf0-236a-4215-8236-15d6bc6993da" color="#fff"/>


    </head>

    <body className="body">
       {/* Google Tag Manager (noscript) */}
       <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAGS}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
           {/* End Google Tag Manager (noscript) */}
      <div className="children-main">
        
        <div className="head-logo">
             <Image src={logo} alt='logo' width={200} />
            <h1 className={`${montserrat.className} antialiased span-title`}>Learn JavaScript and SEO</h1>
            </div>
            
            <div>

        
          </div>
     
        {children}
      </div>
      <Sumary/>
    </body>
    
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Hecho por: {" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
            style={{paddingRight:'20px'}} 
            >
            Aprende Javascript y SEO
          </a>
          <span style={{paddingRight:'20px'}} >Siguenos:</span>
        </p>
        <br/>
        
        <Link style={{paddingRight:'20px'}} {...{href: '/'} }target="_blank" > 
            <i > <FaFacebook /></i>
        </Link >
        
        <Link style={{paddingRight:'20px'}}  {...{href: 'https://www.instagram.com/ultimochisme/'}} target="_blank"> 
        <i > <FaInstagramSquare /> </i>
        </Link>
        
        <Link style={{paddingRight:'20px'}}  {...{href: 'https://www.tiktok.com/search?lang=en&q=%40ultimochisme&t=1713234158046'}} target="_blank" > 
        <i > <FaTiktok /> </i>
        </Link>
       
        
        {/* <Icons/>  */}
      </footer>
      <Banner/>

  </html>
  );
}


