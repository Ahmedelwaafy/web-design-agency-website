import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  const app = useRef();
 
  useEffect(() => {
   
    let ctx = gsap.context(() => {
      //! time line
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".project",
          scrub: true,
        },
      });
      tl.to(".project", {
        stagger: 0.2,
        y: -300,
        scrub: true,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={app} className="width h-fit py-20">
      <h2 className="mb-60 text-center text-3xl font-bold tracking-widest">
        Our Projects
      </h2>

      <div className="projects grid-auto-fit w-full">
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/12.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/13.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/14.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/15.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/16.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/17.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/18.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/19.jpg"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div  className="project relative w-[350px] aspect-square md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            className="h-full w-full object-cover"
            src="../assets/images/20.jpg"
            alt="project"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
