
import { montserrat } from '../fonts.ts'
import './sumary.css';

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

