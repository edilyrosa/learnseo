"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import './TracingBeamBodyArticle.css'
import { strict } from "assert";
export default function TracingBeamDemo( {news} ) {

  return (

    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative father-article" >
        <h2>LEARNING JAVASCRIPT.</h2>
        {news.map((item, index) => ( //aqio
          <div key={`content-${index}`}>
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <h3 className={twMerge("text-xl mb-4")}>
              {(item.title).toUpperCase()}
            </h3>

              {item?.img_url && (

                  <Image
                    src={item.img_url}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                    />
            
              )}
            
            <div className={ `main-text-img text-sm prose prose-sm dark:prose-invert article-text`} dangerouslySetInnerHTML={{ __html: item.body }}>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

  );
}









