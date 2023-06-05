import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { Link } from "react-router-dom";
function Navbar() {
  const app = useRef();
  
  useLayoutEffect(() => {
    const openCloseMenuBtns =document.querySelectorAll(".close-menu , .open-menu , .menu-item")
    let ctx = gsap.context(() => {
      //!header
      gsap.from(".logo , .open-menu", {
        y: -30,
        opacity: 0,
        ease: "power3.inOut",
        delay: 7,
        duration: 1,
        stagger: 0.2,
      });

      //!menu
     const t1 = gsap.timeline({ paused: true });
      t1
        .to(".menu-fixed", {
          left: 0,
          duration: 1,
          ease: "expo.inOut",
        })
        .from(
          ".menu-item",
          {
            y: 100,
            duration: 0.8,
            opacity: 0,
            ease: "expo.inOut",
            stagger: 0.1,
          },
          "-=0.4"
        );
      t1.reverse();
       openCloseMenuBtns.forEach((item) => {
         return item.addEventListener("click", function () {
           t1.reversed(!t1.reversed());
           console.log("clicked");
         });
       });
    }, app);

    return () => ctx.revert();
  }, []);

 

  return (
    <section ref={app} className="h-20 w-full bg-secondary">
      <nav className="width flex h-full items-center justify-between">
        <h2 className=" logo text-2xl font-bold tracking-widest">OMATECH</h2>
        <div className="open-menu ">
          <FontAwesomeIcon className="cursor-pointer text-3xl" icon={faBars} />
        </div>
      </nav>
      <div className="menu-fixed fixed inset-0 -left-full z-50 h-screen w-full bg-primary px-14 py-9">
        <div className="close-menu  text-end cursor-pointer">close</div>
        <ul className="menu-items flex flex-col items-start justify-start gap-14">
          <Link to="/#home" className="menu-item group relative cursor-pointer">
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0">
              Home
            </p>
            <span className="marquee-text pointer-events-none absolute left-0 top-0 translate-x-20 whitespace-nowrap text-3xl font-semibold italic opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-20 group-hover:opacity-60">
              Home - Home - Home - Home - Home - Home - Home - Home - Home -
              Home - Home - Home -Home - Home - Home -Home - Home - Home -Home -
              Home - Home -{" "}
            </span>
            <img
              className="plain-blob pointer-events-none absolute left-0 top-0 aspect-square h-28 w-28 scale-0 object-cover opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              src="../assets/images/1.jpg"
              alt="img"
            />
          </Link>
          <Link
            to="/#features"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0">
              features
            </p>
            <span className="marquee-text pointer-events-none absolute left-0 top-0 translate-x-20 whitespace-nowrap text-3xl font-semibold italic opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-20 group-hover:opacity-60">
              features - features - features - features - features - features -
              features - features - features - features - features - features
              -features - features - features -features - features - features
              -features - features - features -{" "}
            </span>
            <img
              className="plain-blob pointer-events-none  absolute left-0 top-0 aspect-square h-28 w-28 scale-0 object-cover opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              src="../assets/images/2.jpg"
              alt="img"
            />
          </Link>
          <Link
            to="/#Projects"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0">
              Projects
            </p>
            <span className="marquee-text pointer-events-none absolute left-0 top-0 translate-x-20 whitespace-nowrap text-3xl font-semibold italic opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-20 group-hover:opacity-60">
              Projects - Projects - Projects - Projects - Projects - Projects -
              Projects - Projects - Projects - Projects - Projects - Projects
              -Projects - Projects - Projects -Projects - Projects - Projects
              -Projects - Projects - Projects -{" "}
            </span>
            <img
              className="plain-blob pointer-events-none absolute left-0 top-0 aspect-square h-28 w-28 scale-0 object-cover opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              src="../assets/images/3.jpg"
              alt="img"
            />
          </Link>
          <Link to="/#FAQ" className="menu-item group relative cursor-pointer">
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0">
              FAQ
            </p>
            <span className="marquee-text pointer-events-none absolute left-0 top-0 translate-x-20 whitespace-nowrap text-3xl font-semibold italic opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-20 group-hover:opacity-60">
              FAQ - FAQ - FAQ - FAQ - FAQ - FAQ - FAQ - FAQ - FAQ - FAQ - FAQ -
              FAQ -FAQ - FAQ - FAQ -FAQ - FAQ - FAQ -FAQ - FAQ - FAQ -{" "}
            </span>
            <img
              className="plain-blob pointer-events-none absolute left-0 top-0 aspect-square h-28 w-28 scale-0 object-cover opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              src="../assets/images/4.jpg"
              alt="img"
            />
          </Link>
          <Link
            to="/#Contact"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0">
              Contact
            </p>
            <span className="marquee-text pointer-events-none absolute left-0 top-0 translate-x-20 whitespace-nowrap text-3xl font-semibold italic opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-x-20 group-hover:opacity-60">
              Contact - Contact - Contact - Contact - Contact - Contact -
              Contact - Contact - Contact - Contact - Contact - Contact -Contact
              - Contact - Contact -Contact - Contact - Contact -Contact -
              Contact - Contact -{" "}
            </span>
            <img
              className="plain-blob pointer-events-none absolute left-0 top-0 aspect-square h-28 w-28 scale-0 object-cover opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              src="../assets/images/1.jpg"
              alt="img"
            />
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
