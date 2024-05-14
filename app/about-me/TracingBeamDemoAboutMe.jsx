"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function TracingBeamDemo() {

  const ruleImg = {
    width: '50vw',
    height: '40vh',
  }
  return (
    
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
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
                  className="rounded-lg mb-10 object-cover img-gif img-gif-built"
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
    title: "ABOUT ME",
    description: (
      <>
      <h3>Hi there! I'm Edily Mora</h3>
  <p>
    I wear many hats! I'm a Lawyer and a Front-end Web Developer with a passion for SEO (Search Engine Optimization). JavaScript is my programming language of choice, and I love building beautiful web applications using Next.js and Node.js.
  </p>
  <p>
    Beyond the world of code, I'm also interested in fashion, entertainment, and healthy living. This passion fuels my creativity, and I enjoy creating content related to these topics.
  </p>
  <p>
    Feel free to reach out if you'd like to connect! You can email me at: <a href="mailto:ultimochisme1@gmail.com">ultimochisme1@gmail.com</a>
  </p>
  <h3 style={{color:'#007878'}}>What https://learnseo.vercel.app/?</h3>
  <br/>
  <p style={{color:'#007878'}}>
    Is a website dedicated to learn JavaScript, SEO and CSS.
  </p>
      
      </>
    ),
    badge: "👩🏼‍💻",
  },
  
];








