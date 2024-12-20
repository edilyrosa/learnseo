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

        news.map((newsItem, index) => (
        
        <div className='big-container' key={index}>
      
            <head>
              <meta name="keywords" content={newsItem.keywords}/>
              <link rel="prefetch" href={newsItem.img_url}/>
              <meta name="google-site-verification" content="Bqy9fOOnSmDnKQl-UhBvUjHAAkPqTV4I6MoKjcFy7vo" />
            </head>
            <h2 className={`${montserrat.className} antialiased`}> <b>{newsItem.title.toUpperCase()}</b> </h2>
            <article class="article-container">

                
                <section class="section2Celebridad">
                <div className={`${montserrat.className} main-text-img`} dangerouslySetInnerHTML={{ __html: newsItem.body }}></div>
        
                </section>
            </article>
          
        </div>
      

      ))
        )}
        
        
    </>
     );
}