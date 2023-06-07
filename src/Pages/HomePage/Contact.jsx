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
    //! -- form inputs animations ----
    let labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, i) =>
            `<span style="transition-delay:${i * 50}ms">${letter}</span>`
        )
        .join("");
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
      id="contact"
      ref={app}
      className=" -mt-40 h-fit w-full bg-primary  py-28 md:h-fit"
    >
      <h2 className="mb-10 text-center text-3xl font-bold tracking-widest">
        Contact Us{" "}
      </h2>

      <div className="contact-wrapper width bg- flex  h-[510px] md:h-fit items-start justify-between md:flex-col md:items-center ">
        {/**
         * //!--- socials  ----
         */}

        <div className="socials bg- relative flex h-full w-3/5  flex-col items-center justify-center gap-16 lg:w-1/2 lg:justify-center md:w-full ">
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
                  cx="300"
                  cy="500"
                  r="150"
                  stroke="#1f0018"
                  strokeWidth="2"
                  fill="#fff"
                />
                <circle
                  className="eye-inner"
                  cx="400"
                  cy="500"
                  r="40"
                  fill="#1f0018"
                />
              </g>
              <g id="right-eye">
                <circle
                  className="eye-outer"
                  cx="610"
                  cy="500"
                  r="150"
                  stroke="#1f0018"
                  strokeWidth="2"
                  fill="#fff"
                />
                <circle
                  className="eye-inner"
                  cx="710"
                  cy="500"
                  r="40"
                  fill="#1f0018"
                />
              </g>
            </svg>
          </div>
        </div>

        {/**
         * //!--- form  ----
         */}
        <div className="contact-form flex h-fit w-2/5 justify-center  lg:w-1/2 md:w-full">
          <form className="plain-blob flex h-fit w-96 flex-col items-center gap-9 border-2 border-text px-16 py-8 md:items-center">
            <h2 className="mt-4 font-sub-heading text-[20px]">
              Send Us a Message
            </h2>
            <div className="input-box relative w-full">
              <input
                required
                className="valid:text- relative w-full border-b-2 border-b-text bg-transparent  font-body text-lg font-light  outline-none transition-all duration-300 ease-in-out valid:border-b-bg focus:border-b-white focus:text-white"
                id="name"
                type="text"
              />
              <label
                className="pointer-events-none absolute  left-0 font-body"
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div className="input-box relative w-full">
              <input
                required
                className="relative w-full  border-b-2  border-b-text bg-transparent font-body  font-light outline-none transition-all duration-300 ease-in-out valid:border-b-bg focus:border-b-white focus:text-white"
                id="name"
                type="text"
              />
              <label
                className="pointer-events-none  absolute left-0"
                htmlFor="name"
              >
                Email
              </label>
            </div>

            <div className="input-box w-full">
              <textarea
                required
                className="w-full resize-none border-2  border-text bg-transparent px-1  py-2 font-body font-light outline-none transition-all duration-200 ease-out placeholder:font-body placeholder:text-text valid:border-white focus:border-white focus:text-white"
                name="message"
                placeholder="Message..."
                id="message"
                cols="70"
                rows="5"
              ></textarea>
            </div>
            <input
              className="cursor-pointer border-2 border-text bg-text px-5 py-2 text-lg text-white duration-300 hover:bg-transparent hover:text-text font-body active:scale-90"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
