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
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section id="projects" ref={app} className="width h-fit pt-28">
      <h2 className="mb-80 text-center text-3xl font-bold tracking-widest">
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
