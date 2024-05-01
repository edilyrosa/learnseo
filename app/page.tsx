'use client';
import { useEffect } from 'react';
import HeroParallaxDemo from './(UI-JavaScript)/javascript/HeroParallaxDemo';
import HeadersHome from "./header/HeaderHome.jsx"
export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import("locomotive-scroll")).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    
      <div  className="view-home">
        <HeadersHome/>
        <HeroParallaxDemo/>
        </div>

  )
}

