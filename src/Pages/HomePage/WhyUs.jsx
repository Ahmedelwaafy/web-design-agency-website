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
        WhyUs
      </h2>

      <div className="features flex w-full flex-col justify-center gap-12 md:items-center">
        {/**
         * //!feature-1
         */}
        <div className="feature feature-1 flex w-full justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start">
          <div
            ref={pushRef}
            className="img-wrapper  flex h-auto w-1/2 md:w-full md:justify-center"
          >
            <div className="feature-img-container sm:wfull w-4/6 md:w-4/6">
              <img
                className="aspect-square plain-blob h-full object-cover"
                src="../assets/images/5.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper h-auto w-1/2 md:w-full md:text-center">
            <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit.</h3>
            <h4 className="my-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
        {/**
         * //!feature-2
         */}
        <div className="feature feature-1 flex w-full justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start">
          <div
            ref={pushRef}
            className="img-wrapper  flex h-auto w-1/2 md:w-full md:justify-center"
          >
            <div className="feature-img-container  sm:wfull w-4/6 md:w-4/6">
              <img
                className=" aspect-square plain-blob h-full object-cover"
                src="../assets/images/6.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper h-auto w-1/2 md:w-full md:text-center">
            <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit.</h3>
            <h4 className="my-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
        {/**
         * //!feature-3
         */}
        <div className="feature feature-1 flex w-full justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start">
          <div
            ref={pushRef}
            className="img-wrapper  flex h-auto w-1/2 md:w-full md:justify-center"
          >
            <div className="feature-img-container sm:wfull w-4/6 md:w-4/6">
              <img
                className="aspect-square plain-blob h-full object-cover"
                src="../assets/images/7.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper h-auto w-1/2 md:w-full md:text-center">
            <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit.</h3>
            <h4 className="my-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
        {/**
         * //!feature-4
         */}
        <div className="feature feature-1 flex w-full justify-between gap-10 md:flex-col-reverse md:items-center md:justify-start">
          <div
            ref={pushRef}
            className="img-wrapper  flex h-auto w-1/2 md:w-full md:justify-center"
          >
            <div className="feature-img-container sm:wfull w-4/6 md:w-4/6">
              <img
                className="aspect-square plain-blob h-full object-cover"
                src="../assets/images/11.jpg"
                alt="feature"
              />
            </div>
          </div>

          <div className="text-wrapper h-auto w-1/2 md:w-full md:text-center">
            <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit.</h3>
            <h4 className="my-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, reiciendis.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
