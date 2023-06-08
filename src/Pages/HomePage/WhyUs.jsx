import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

function WhyUs() {
  gsap.registerPlugin(ScrollTrigger);

  const app = useRef();
  const featuresRef = useRef([]);
  const pushRef = (el) => featuresRef.current.push(el);
  useEffect(() => {
    let uniqueRefs = [...new Set(featuresRef.current)];
    console.log(uniqueRefs);
    let ctx = gsap.context(() => {
      //! time line
      uniqueRefs.map((ref) => {
        const wrapper = ref.querySelector(".feature-img-container");
        const image = ref.querySelector(".feature-img-container img");
        const textWrapper = ref.querySelector(".text-wrapper");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            toggleActions: "restart none none reset",
          },
        });
        tl.to(wrapper, {
          duration: 2,
          delay:1,
          ease: "power2",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }).to(
          image,
          {
            scale: 1,
            duration: 2,
            delay:1
          },
          "<"
        );

        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: textWrapper,
            start: "top bottom",
            toggleActions: "restart none none reset",
          },
        });
        t2.to(textWrapper, {
          duration: 2,
          delay:1,
          ease: "power2",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        });
        return;
      });

      gsap.to(".why-us-title", {
        scrollTrigger: {
          trigger: ".why-us-title",
          start: "top bottom",
          //scrub:true,
          toggleActions: "restart none none reset",
        },
        duration: 1,
        delay:0.3,
        y: 0,
        opacity: 1,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={app} className="width h-fit py-20">
      <h2 className="why-us-title mb-20 translate-y-20 text-center text-3xl font-bold tracking-widest opacity-0">
        WhyUs
      </h2>

      <div className="features flex w-full flex-col justify-center gap-24 md:items-center">
        {/**
         * //!feature-1
         */}
        <div
          ref={pushRef}
          className="feature feature-1 flex w-full justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start"
        >
          <div className="img-wrapper  flex h-auto w-1/2 md:w-full md:justify-center">
            <div className="feature-img-container sm:wfull w-4/6 md:w-4/6">
              <img
                className="plain-blob aspect-square h-full object-cover"
                src="../assets/images/5.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper flex h-auto w-1/2 flex-col justify-center md:w-full md:text-center">
            <h3 className="font-sub-heading text-4xl font-semibold">
              Lorem ipsum dolor sit.
            </h3>
            <h4 className="my-6 font-body text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
        {/**
         * //!feature-2
         */}
        <div
          ref={pushRef}
          className="feature feature-2 flex w-full flex-row-reverse justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start"
        >
          <div className="img-wrapper  flex h-auto w-1/2 justify-end md:w-full md:justify-center">
            <div className="feature-img-container  sm:wfull w-4/6 md:w-4/6">
              <img
                className=" plain-blob aspect-square h-full object-cover"
                src="../assets/images/6.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper flex h-auto w-1/2 flex-col justify-center  md:w-full md:text-center">
            <h3 className="font-sub-heading text-4xl font-semibold">
              Lorem ipsum dolor sit.
            </h3>
            <h4 className="my-6 font-body text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
        {/**
         * //!feature-3
         */}
        <div
          ref={pushRef}
          className="feature feature-3 flex w-full justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start"
        >
          <div className="img-wrapper  flex h-auto w-1/2 md:w-full md:justify-center">
            <div className="feature-img-container sm:wfull w-4/6 md:w-4/6">
              <img
                className="plain-blob aspect-square h-full object-cover"
                src="../assets/images/7.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper flex h-auto w-1/2 flex-col justify-center  md:w-full md:text-center">
            <h3 className="font-sub-heading text-4xl font-semibold">
              Lorem ipsum dolor sit.
            </h3>
            <h4 className="my-6 font-body text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
        {/**
         * //!feature-4
         */}
        <div
          ref={pushRef}
          className="feature feature-4 flex w-full flex-row-reverse justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start"
        >
          <div className="img-wrapper  flex h-auto w-1/2 justify-end md:w-full md:justify-center">
            <div className="feature-img-container sm:wfull w-4/6 md:w-4/6">
              <img
                className="plain-blob aspect-square h-full object-cover"
                src="../assets/images/11.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper flex h-auto w-1/2 flex-col justify-center  md:w-full md:text-center">
            <h3 className="font-sub-heading text-4xl font-semibold">
              Lorem ipsum dolor sit.
            </h3>
            <h4 className="my-6 font-body text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
