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
    title: "Privacy Policy.",
    description: (
      <>
      <p>Our website address is: https://learnseo.vercel.app/</p>

<h3>Comment Policy</h3>
<p>This website offers users the ability to read current information. Users cannot insert, write, update, or delete data, personal information, or comments. The website does not allow comments on displayed information. It is for reading only, and no user information, including personal information, is required as there are no forms.</p>

<h3>Cookies</h3>
<p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie does not contain any personal data and is discarded when you close your browser.</p>

<h3>Embedded Content from Other Websites</h3>
<p>Articles on this site may include embedded content from other websites (e.g., videos, images, articles). This embedded content behaves in the same way as if the visitor had visited the other website.</p>
<p style={{color:'#007878'}}>
    <li>These websites may collect data about you.</li>
    <li>They may use cookies.</li>
    <li>They may embed additional tracking by third parties.</li>
    <li>They may monitor your interaction with the embedded content, including if you have an account and are logged in on that website.</li>
</p>
      
      </>
    ),
    badge: "👮🏼",
  },
  
];








