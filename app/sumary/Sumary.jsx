
import { montserrat } from '../fonts.ts'
import Image from "next/image";
import './sumary.css';
import Link from 'next/link';
import MsjError from '../MsjError';
import { createClient } from "@/utils/supabase/server";



export default async function Sumary() {

    
     


return ( 
        <article className='container-seccion-sumary'> 

            <h2 className={`${montserrat.className} antialiased h2Sumary`}>Comentarios!! 😋</h2>
          <section className='section-sumary'>
             
             <div className="cards-sumary-img">
            
            comentarios
            </div> 

  
        </section>
    </article>
     );
}

