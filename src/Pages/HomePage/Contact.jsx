import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

function Contact() {
  gsap.registerPlugin(ScrollTrigger);

  const app = useRef();

  useEffect(() => {
    //! -- socials animations ----
    let elements = document.querySelectorAll(".text");
    elements.forEach((element) => {
      let innerText = element.innerText;
      element.innerHTML = "";
      let textContainer = document.createElement("div");
      textContainer.classList.add("block");
      for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      }
      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });
    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove("play");
      });
    });

    
    let ctx = gsap.context(() => {
      //! -- eyes animations ----
      const svg = document.querySelector("#svg");
      const mouse = svg.createSVGPoint();
      const leftEye = createEye("#left-eye");
      const rightEye = createEye("#right-eye");
      let requestId = null;
      window.addEventListener("mousemove", onMouseMove);

      function onFrame() {
        let point = mouse.matrixTransform(svg.getScreenCTM().inverse());
        leftEye.rotateTo(point);
        rightEye.rotateTo(point);
        requestId = null;
      }

      function onMouseMove(event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        if (!requestId) {
          requestId = requestAnimationFrame(onFrame);
        }
      }

      function createEye(selector) {
        const element = document.querySelector(selector);

        gsap.set(element, {
          transformOrigin: "center",
        });
        let bbox = element.getBBox();
        let centerX = bbox.x + bbox.width / 2;
        let centerY = bbox.y + bbox.height / 2;

        function rotateTo(point) {
          let dx = point.x - centerX;
          let dy = point.y - centerY;
          let angle = Math.atan2(dy, dx);
          gsap.to(element, {
            duration: 0.3,
            rotation: angle + "_rad_short",
          });
        }
        return {
          element,
          rotateTo,
        };
      }

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
    <section
      ref={app}
      className="bg-accen mx-auto h-fit min-h-screen  w-full max-w-[1600px] py-20"
    >
      <h2 className="mb-20 text-center text-3xl font-bold tracking-widest">
        Contact Us{" "}
      </h2>

      <div className="contact-wrapper flex h-full min-h-full w-full justify-between md:flex-col md:items-center">
        {/**
         * //!--- socials  ----
         */}
        <div className="contact-left h-screen w-3/5 bg-primary px-[2%] py-10 lg:w-1/2 md:w-full">
          <div className="socials relative flex h-full w-full flex-col items-center justify-between gap-16 lg:justify-center ">
            <a href="#d" target="_blank" rel="noreferrer" className=" text">
              LinkedIn
            </a>
            <div className="flex w-full justify-between lg:flex-col lg:items-center lg:gap-16">
              <a href="#d" target="_blank" rel="noreferrer" className=" text">
                Facebook
              </a>
              <a href="#d" target="_blank" rel="noreferrer" className=" text">
                Instagram
              </a>
            </div>
            <a href="#d" target="_blank" rel="noreferrer" className=" text">
              Twitter
            </a>
            {/**
             * //!--- eyes  ----
             */}
            <div className="eyes-wrapper pointer-events-none absolute  flex h-full w-full items-center justify-center">
              <svg
                className="bg-primar aspect-square w-72 md:w-56 "
                id="svg"
                viewBox="0 0 1000 1000"
              >
                <g id="left-eye">
                  <circle
                    className="eye-outer"
                    cx="350"
                    cy="500"
                    r="150"
                    stroke="#1f0018"
                    strokeWidth="2"
                    fill="#fff"
                  />
                  <circle
                    className="eye-inner"
                    cx="450"
                    cy="500"
                    r="40"
                    fill="#1f0018"
                  />
                </g>
                <g id="right-eye">
                  <circle
                    className="eye-outer"
                    cx="660"
                    cy="500"
                    r="150"
                    stroke="#1f0018"
                    strokeWidth="2"
                    fill="#fff"
                  />
                  <circle
                    className="eye-inner"
                    cx="760"
                    cy="500"
                    r="40"
                    fill="#1f0018"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/**
         * //!--- form  ----
         */}
        <div className="contact-form lg:w-1/2 px-[2%] py-10 md:w-full h-screen w-2/5">

          <form action="
          ">

            
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
