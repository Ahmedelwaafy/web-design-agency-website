import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

function Projects() {
    gsap.registerPlugin(ScrollTrigger);

    const app = useRef();
    const projectsRef = useRef([]);
      const pushRef = (el) => projectsRef.current.push(el);

    useEffect(() => {
      let uniqueRefs = [...new Set(projectsRef.current)];
      console.log(uniqueRefs);
      let ctx = gsap.context(() => {
        //! time line
        uniqueRefs.map((ref) => {
          const wrapper = ref.querySelector(".feature-img-container");
          const image = ref.querySelector(".feature-img-container img");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ref,
              start: "top bottom",
              toggleActions: "restart none none reset",
            },
          });
          tl.to(wrapper, {
            duration: 2,
            ease: "power2",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }).to(
            image,
            {
              scale: 1,
              duration: 2,
            },
            "<"
          );
          return;
        });
      }, app);

      return () => ctx.revert();
    }, []);
  return (
    <section ref={app} className="width h-fit py-20">
      <h2 className="mb-20 text-center text-3xl font-bold tracking-widest">
        Our Projects
      </h2>
    </section>
  );
}

export default Projects;
