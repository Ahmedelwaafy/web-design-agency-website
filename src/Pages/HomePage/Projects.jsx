import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  const app = useRef();
  const ref = useRef([]);
  const pushRef = (el) => ref.current.push(el);

  useEffect(() => {
    let cursor = document.querySelector(".cursor");
    let follower = document.querySelector(".cursor-follower");

    let uniqueRefs = [...new Set(ref.current)];

    uniqueRefs.map((ref) => {
      ref.addEventListener("mouseenter", function (e) {
        cursor.classList.add("active");
        follower.classList.add("active");
      });
      ref.addEventListener("mouseleave", function (e) {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    });

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

      gsap.to(".projects-title", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top bottom",
          //scrub:true,
          toggleActions: "restart none none reset",
        },
        duration: 1,
        delay: 0.3,
        y: 0,
        opacity: 1,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section id="projects" ref={app} className="width h-fit pt-28">
      <h2 className="projects-title mb-80 translate-y-20 text-center text-3xl font-bold tracking-widest opacity-0">
        Our Projects
      </h2>

      <div className="projects grid-auto-fit w-full">
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-1.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-2.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-3.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-4.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-1.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-2.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-3.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-4.png"
            alt="project"
          />
        </div>
        {/**
         * //!--- project 1 ------
         */}
        <div className="project relative h-[450px] w-[350px] cursor-pointer border-2 border-secondary md:w-[300px]">
          <div className="project-content absolute"></div>
          <img
            ref={pushRef}
            className="h-full w-full object-cover object-top transition-all duration-[5s] ease-in-out hover:object-bottom"
            src="../assets/images/project-1.png"
            alt="project"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
