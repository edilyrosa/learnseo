"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import {montserrat} from '../../fonts'

export default function TracingBeamDemo( {news} ) {
  

  return (
    
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <h2>WHY LEARN JAVASCRIPT?</h2>
        {news.map((item, index) => ( //aqio
          <div key={`content-${index}`} className="mb-10 div-img-bean-article">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

              {item?.img_url && (
                <Image
                  src={item.img_url}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover img-bean-article"
                />
              )}
            
            <div className={`${montserrat.className} main-text-img text-sm prose prose-sm dark:prose-invert text-img`} dangerouslySetInnerHTML={{ __html: item.body }}>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

  );
}









