import { useState, useEffect, useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

function Hero() {
  gsap.registerPlugin(Flip);

  const app = useRef();
  const overlayLeft = useRef();
  const overlayRight = useRef();
  useLayoutEffect(() => {
    const links = document.querySelectorAll(".nav-item");
    const link = document.querySelector(".nav-item a.active");
    let ctx = gsap.context(() => {
      gsap.from(".text-left , .text-right", {
        y: -50,
        opacity: 0,
        ease: "power3.inOut",
        delay: 0.5,
        duration: 1,
        stagger: 0.2,
      });
      gsap.from(".text-bottom", {
        y: 70,
        opacity: 0,
        ease: "power3.inOut",
        delay: 2,
        duration: 1,
      });
      gsap.to(".text-left , .text-right", {
        top: "0",
        y: -56,
        ease: "power3.inOut",
        delay: 4,
        duration: 2,
      });
      gsap.to(".text-bottom", {
        bottom: "0",
        y: -56,
        ease: "power3.inOut",
        delay: 4,
        duration: 2,
      });

      gsap.to(".text-left", {
        left: "16.2%",
        ease: "power3.inOut",
        delay: 6,
        duration: 1.8,
      });
      gsap.to(".text-left", {
        ease: "power3.inOut",
        delay: 8,

        opacity: 0,
      });
      gsap.to(".txt-btm-lft", {
        left: "-1%",
        ease: "power3.inOut",
        delay: 6,
        duration: 2,
      });
      gsap.to(".text-right , .txt-btm-rght", {
        right: "-1%",
        ease: "power3.inOut",
        delay: 6,
        duration: 2,
      });
      gsap.to(".overlay-left", {
        left: "-50%",
        ease: "power3.inOut",
        delay: 6,
        duration: 2,
      });
      gsap.to(".overlay-right", {
        right: "-50%",
        ease: "power3.inOut",
        delay: 6,
        duration: 2,
      });

      const tl = gsap.timeline({repeat:-1});
      tl
        .from(".circle-container", {
        scale: 0,
        duration: 2,
        delay: 9,
        ease: "elastic(2, 1)",
        })
        .from(".block-1 , .block-3", {
          x: 144,
          duration: 1,
          delay: 1,
        })
        .from(
          ".block-2 , .block-4",
          {
            x: -144,
            duration: 1,
          },
          "-=1"
        )
        .to(".block-1 , .block-3", {
            x:0,
            y:72,
            duration:1,
            delay:1
        })
        .to(".block-2 , .block-4", {
            x:0,
            y:-72,
            duration:1,
          
        }, "-=1")
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={app} className="h-hero relative w-full ">
      {/**
       * //!overlay sections
       */}

      <div
        ref={overlayLeft}
        className="overlay-left fixed left-0 top-0 h-screen w-1/2 bg-pink-200"
      ></div>
      <div
        //ref={overlayRight}
        className="overlay-right fixed right-0  top-0 h-screen  w-1/2 bg-pink-200 "
      ></div>

      {/**
       * //!overlay text
       */}

      <h2 className="absolute  left-1/2 top-1/2 -translate-x-full -translate-y-full pr-2 text-left text-2xl font-bold tracking-widest">
        OMATECH
      </h2>
      <h2 className="absolute right-1/2 top-1/2 -translate-y-full translate-x-full pl-2 text-right text-2xl font-bold tracking-widest">
        AGENCY
      </h2>
      <h2 className="text-bottom txt-btm-lft absolute bottom-1/2  left-1/2 -translate-x-full translate-y-full pr-2  pt-4 text-2xl font-light tracking-widest">
        Your Last Choice
      </h2>
      <h2 className="text-bottom txt-btm-rght absolute bottom-1/2 right-1/2 translate-x-full translate-y-full pt-4  text-2xl font-light tracking-widest ">
        for Web Development.
      </h2>
      {/**
       * //!hero content
       */}

      <div className="hero-container width flex h-full justify-between">
        <div className="hero-left w-1/2 bg-accent">hero left</div>
        <div className="hero-right w-1/2 bg-white">
          hero right
          <div className="circle-container flex w-72 flex-wrap">
            <div className="block-1 h-36 w-36 rounded-tr-full bg-primary"></div>
            <div className="block-2 h-36 w-36 rounded-tl-full bg-secondary"></div>
            <div className="block-3 h-36 w-36 rounded-br-full bg-accent"></div>
            <div className="block-4 h-36 w-36 rounded-bl-full bg-graish"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
