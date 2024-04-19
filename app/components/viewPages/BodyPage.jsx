// import React from 'react';
// import MsjError from '../MsjError.jsx';
// import Image from 'next/image';
// import {montserrat} from '../../fonts'
// import './bodyPage.css'

// export default async function bodyPage({news}) {

//     return ( 
//        <>
//       { (news.length === 0 || news[0].body === '') ? (
//         <MsjError /> 
//         ) : (
//           news.map((newsItem, index) => (
//           <div className='big-container' key={index}>

//             <head>
//             <meta name="keywords" content={newsItem.keywords}/>
//             <link rel="prefetch" href={newsItem.img_url}/>
//             </head>
//             <h2 className={`${montserrat.className} antialiased`}> <b>{newsItem.title.toUpperCase()}</b> </h2>
//             <article class="article-container" id={`seccion${index+1}`}>

//                 <section class="section1Celebridad">
//                 <Image src={newsItem.img_url} alt={newsItem.img_alt} width={700} height={500} sizes="(max-width: 678px) 100vw, 600px" loading="lazy" />
//                 </section>
                
//                 <section class="section2Celebridad">
//                 <div className={`${montserrat.className} main-text-img`} dangerouslySetInnerHTML={{ __html: newsItem.body }}></div>
        
//                 </section>
//             </article>
//             <hr/>

//           </div>
//         ))
//         )}
        
//     </>
//      );
// }


import React from 'react';
import MsjError from '../MsjError.jsx';
import {montserrat} from '../../fonts'
import './bodyPage.css'

export default async function bodyPage({news}) {

    return ( 
       <>
      { (news.length === 0 || news.body === '') ? (
        <MsjError /> 
        ) : (
         
          <div className='big-container'>
            <head>
            <meta name="keywords" content={news.keywords}/>
            <link rel="prefetch" href={news.img_url}/>
            </head>
            <h2 className={`${montserrat.className} antialiased`}> <b>{news.title.toUpperCase()}</b> </h2>
            <article class="article-container">

                
                <section class="section2Celebridad">
                <div className={`${montserrat.className} main-text-img`} dangerouslySetInnerHTML={{ __html: news.body }}></div>
        
                </section>
            </article>
            <hr/>

          </div>
      
        )}
        
    </>
     );
}