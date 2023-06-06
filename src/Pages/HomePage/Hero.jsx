import { useState, useEffect, useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";

function Hero() {

  const app = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //!preloader-text
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
        y: 56,
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

      gsap.to(".text-left, .txt-btm-lft", {
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

      //!circle time line
      const tl = gsap.timeline({ repeat: -1 });
      tl.from(".circle-container", {
        scale: 0,
        duration: 2,
        delay: 7,
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
          x: 0,
          y: 72,
          duration: 1,
          delay: 1,
        })
        .to(
          ".block-2 , .block-4",
          {
            x: 0,
            y: -72,
            duration: 1,
          },
          "-=1"
        )
        .to(".block-1 , .block-3", {
          x: 0,
          y: 72,
          duration: 1,
          scaleX: -1,
        })
        .to(
          ".block-2 , .block-4",
          {
            x: 0,
            y: -72,
            scaleX: -1,
            duration: 1,
          },
          "-=1"
        )
        .to(".block-3", {
          x: 0,
          y: 72,
          duration: 1,
          delay: 1,
          scaleX: 1,
        })
        .to(
          ".block-2",
          {
            x: 0,
            y: -72,
            duration: 1,
            scaleX: 1,
          },
          "-=1"
        )
        .to(".block-1 , .block-3", {
          x: 0,
          y: 0,
          duration: 1,
          delay: 1,
        })
        .to(
          ".block-2 , .block-4",
          {
            x: 0,
            y: 0,
            duration: 1,
          },
          "-=1"
        )
        .to(".block-3", {
          x: 0,
          y: 0,
          duration: 1,
          delay: 1,
          scaleX: -1,
        })
        .to(
          ".block-2",
          {
            x: 0,
            y: 0,
            duration: 1,
            scaleX: -1,
          },
          "-=1"
        )
        .to(".circle-container", {
          scale: 0,
          duration: 2,
          delay: 1,
          ease: "back.in(3)",
        });
      //!hero-headings
      gsap.from(".hero-headings", {
        y: -20,
        opacity: 0,
        ease: "power3.inOut",
        delay: 7.5,
        duration: 1,
        stagger: 0.2,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={app} className="h-hero  relative w-full ">
      {/**
       * //!overlay sections
       */}
      {/**
        * 
      <div className="overlay-fixed z-50  fixed h-screen w-full inset-0 pointer-events-none">
        <div className="overlay-wrapper-relative relative h-full w-full">
          <div className="overlay-left fixed left-0 top-0 h-full w-1/2 bg-pink-200"></div>
          <div className="overlay-right fixed right-0  top-0 h-full  w-1/2 bg-pink-200 "></div>
          {/**
           * //!overlay text
           *
           * /}
          <h2 className="absolute  left-1/2 top-1/2 -translate-x-full -translate-y-full pr-2 text-left text-2xl font-bold tracking-widest">
            OMATECH
          </h2>
          <h2 className="absolute right-1/2 top-1/2 -translate-y-full translate-x-full pl-2 text-right text-2xl font-bold tracking-widest">
            AGENCY
          </h2>
          <h2 className="text-bottom txt-btm-lft absolute bottom-1/2  left-1/2 -translate-x-full translate-y-full pr-2  pt-4 text-2xl font-light tracking-widest md:text-lg sm:text-base">
            Your Last Choice
          </h2>
          <h2 className="text-bottom txt-btm-rght absolute bottom-1/2 right-1/2 translate-x-full translate-y-full pt-4  text-2xl font-light tracking-widest md:text-lg sm:text-base  ">
            for Web Design.
          </h2>
        </div>
      </div>
        */}
      {/**
       * //!hero content
       */}
      <div className="hero-container width flex h-full items-center justify-between gap-24  md:h-fit md:flex-col md:justify-center md:py-20">
        <div className="hero-left flex  w-1/2 items-center justify-center   md:w-full">
          <div className="headings-wrapper w-full flex-col md:text-center">
            <h1 className="hero-headings text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur sed?
            </h1>
            <h2 className="hero-headings mt-5 text-xl font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolores distinctio nisi exercitationem iure temporibus.
            </h2>
            <div className="hero-headings mt-7 flex justify-start gap-6 md:justify-center">
              <a href="#n" className="plain-blob bg-secondary px-4 py-2">
                Call Us
              </a>
              <a href="#n" className="plain-blob bg-primary px-4 py-2">
                See Projects{" "}
              </a>
            </div>
          </div>
          {/***
           * 
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100%"
            id="blobSvg"
            style={{ opacity: "1" }}
          >
            <path id="blob" fill="url(#gradient)" style={{ opacity: "1" }}>
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
              ></animate>
            </path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ "stopColor": "rgb(238, 205, 163)" }}
                ></stop>
                <stop
                  offset="100%"
                  style={{ "stopColor": "rgb(239, 98, 159)" }}
                ></stop>
              </linearGradient>
            </defs>
          </svg>
           <div className="blob"></div>
           */}
        </div>
        <div className="hero-right flex  w-1/2 items-center justify-center  md:w-full">
          {/**
           * //!circle
           */}
          <div className="circle-container flex  w-72 flex-wrap">
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
