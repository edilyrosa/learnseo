"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <h2>WHY LEARN SEO?</h2>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover img-gif img-gif-seo"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

  );
}

const dummyContent = [
  {
    title: "Learn SEO",
    description: (
      <>
      <br/>
        <p>
        Mastering Search Engine Optimization (SEO) is a powerful skill that can significantly 
        impact the success of your web pages. By understanding and implementing effective SEO 
        strategies, you can improve the visibility and ranking of your website on search engine 
        results pages (SERPs), driving more organic traffic to your content. 
        </p>
        
      <br/>
        <p>
        This increased 
        visibility translates to greater opportunities for monetization, as you can leverage 
        the targeted audience to generate revenue through various means, such as advertising, 
        affiliate marketing, or selling your own products or services. 
        </p>
        <br/>
        <p>
        Optimizing your web 
        pages for search engines not only helps you reach a wider audience but also positions 
        your content as a trusted and authoritative source, enhancing your credibility and the 
        likelihood of conversions.
        </p>
        <br/>
        <p >
        Furthermore, SEO is an ongoing process that requires continuous learning and adaptation. 
        As search engine algorithms evolve, staying up-to-date with the latest SEO best practices 
        and trends can give you a competitive edge. 
        </p>
        
        <br/>
        <p style={{color:'#007878 '}}>
        By consistently optimizing your web pages, 
        you can maintain and improve your search engine rankings over time, ensuring a steady 
        flow of targeted traffic and potential customers. This, in turn, can lead to increased 
        revenue streams, whether through direct sales, advertising, or other monetization 
        strategies. Investing time and effort into mastering SEO can be a game-changer for 
        your web-based business, helping you achieve sustainable growth and profitability.
        </p>
      </>
    ),
    badge: "Amazing SEO",
    image:
      "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/learnSEO%2Fgifseo1.gif?alt=media&token=c0c792b2-cd11-4075-a7de-9a433cfb3290",
  },
  
];








