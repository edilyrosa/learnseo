"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <h2>WHY LEARN JAVASCRIPT?</h2>
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
                  className="rounded-lg mb-10 object-cover img-gif"
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
    title: "Learn JavaScript",
    description: (
      <>
        <p>
        Learning JavaScript offers numerous benefits and opens up a world of possibilities 
        in software development. By mastering JavaScript, individuals can delve into creating 
        a wide range of software applications, including immersive video games. JavaScript's 
        versatility allows developers to craft interactive and dynamic web applications, 
        enhancing user experiences and engagement. 
        </p>
        <p>
        Moreover, JavaScript is instrumental in developing mobile applications, 
        server-side software, web servers, and even 
        real-time communication applications like video conferencing platforms. Its 
        widespread use in various domains, from web development to game design, 
        showcases its adaptability and power in shaping modern digital experiences.
        </p>
      </>
    ),
    badge: "Amazing JavaScript!",
    image:
      "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/learnSEO%2Fjsjs.gif?alt=media&token=b1c91213-c02f-4f99-acd2-21e61dc24011",
  },
  {
    title: "Then learn React",
    description: (
      <>
        <p>
        Created by Facebook, React is renowned for its component-based architecture, 
        enabling developers to build reusable user interface elements and improve 
        the maintainability and scalability of their code. 
        </p>
        <p>
        React utilizes a virtual DOM approach to optimize the performance of web applications.
        </p>
      </>
    ),
    badge: "Amazing React",
    image:
      "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/learnSEO%2Fgiphy.gif?alt=media&token=ca399a2b-65b0-472d-8286-3e7eac11d133",
  },
  {
    title: "you could also master Angular",
    description: (
      <>
        <p>
        Developed by Google, Angular is a comprehensive framework that provides numerous 
        out-of-the-box features, such as data binding, dependency injection, and more. 
        Angular follows an MVC architectural pattern and is highly modular, making it 
        easy to create custom modules and libraries.
        </p>
      </>
    ),
    badge: "Amazing Angular",
    image:
      "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/learnSEO%2Fgiphy%20(1).gif?alt=media&token=a8aa6c96-f9d9-4457-b105-4d1848f08fee",
  },





  {
    title: "Become into a PRO in VUE",
    description: (
      <>
      <br/>
        <p style={{color:'#007878 '}}>
        Vue.js is known for its simplicity and flexibility, allowing 
        for rapid development and easy integration with existing projects. 
        Vue.js stands out for its focus on creating reusable user interface 
        components and its two-way data binding system, making it an excellent choice 
        for large-scale web applications.
        </p>
      </>
    ),
    badge: "Amazing VUE",
    image:
    "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/learnSEO%2F1_uQPuwh-rv8KI9PiYEN8AtA.gif?alt=media&token=48287cb4-413b-481c-85d7-b7ddcff0e2ec"
  },
];








