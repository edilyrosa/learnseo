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
    title: "Importance of Learning CSS for Attractive, Responsive, and Enjoyable Web Pages",
    description: (
      <>
      <br/>
        <p>
        In today's digital age, having a visually appealing and user-friendly website is crucial 
        for any business or individual looking to establish an online presence. One of the key 
        elements in achieving this is the mastery of Cascading Style Sheets (CSS). CSS is a 
        fundamental technology for web development, allowing developers to control the layout, 
        appearance, and behavior of web pages. Its importance cannot be overstated, as it plays 
        a vital role in creating a seamless user experience across various devices and browsers.
        </p>
        
      <br/>
        <p >
        CSS is essential for several reasons. Firstly, it enhances the aesthetic appeal of a website 
        by providing a wide range of styling options, from colors and fonts to backgrounds and layouts. 
        This not only makes the website more visually appealing but also helps to establish a brand's 
        identity. Secondly, CSS is critical for responsive web design, which ensures that a website 
        adapts to different screen sizes and devices, providing an optimal user experience regardless 
        of how users access the site. This is particularly important in today's mobile-first world, 
        where the majority of internet users access websites through their mobile devices.
        </p>
        <br/>
        <p>
        To simplify the process of creating responsive and attractive web pages, developers often 
        rely on CSS frameworks. These frameworks provide pre-built, reusable code for common design 
        elements and components, such as grids, forms, and buttons. 
        </p>
        <br/>
        <p style={{color:'#007878'}}>
        This saves time and effort, 
        allowing developers to focus on more complex aspects of web development. Some of the most 
        popular CSS frameworks currently in use include: Bulma, Bootstrap, Tailwind CSS, among others.
        </p>
        <br/>    
        <br/>
      </>
    ),
    badge: "Amazing CSS",
    image:
      "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/learnSEO%2Fcss.gif?alt=media&token=cfab15fb-3e3a-435a-bd05-df3c2394dffb",
  },
  
];








