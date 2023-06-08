import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { Link } from "react-router-dom";
function Navbar() {
  const app = useRef();
  const [toggle, setToggle] = useState(false);
  useLayoutEffect(() => {
    const openCloseMenuBtns = document.querySelectorAll(
      ".close-menu , .open-menu , .menu-item"
    );
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
      t1.to(".menu-fixed", {
        left: 0,
        duration: 1,
        ease: "expo.inOut",
      }).from(
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
    <section
      id="top"
      ref={app}
      className="fixed top-0 z-40 h-20 w-full bg-secondary text-white"
    >
      <nav className="width flex h-full items-center justify-between gap- md:justify-evenly ">
        <a
          href="#top"
          className=" logo font-sub-heading text-2xl font-bold tracking-widest"
        >
          OMATECH
        </a>

        <div
          onClick={() => setToggle(!toggle)}
          className="menu-icon open-menu plain-blob border-2 border-white "
        >
          <input
            className="menu-icon__cheeckbox"
            checked={toggle}
            type="checkbox"
          />
          <div>
            <span className=""></span>
            <span className=""></span>
          </div>
        </div>
      </nav>
      <div className="menu-fixed fixed inset-0 -left-full z-50 h-screen w-full overflow-hidden bg-primary px-14 py-9 md:px-4">
        <ul className="menu-items flex  w-5/6 flex-col items-start justify-start gap-14 ">
          <Link
            onClick={() => setToggle(!toggle)}
            to="/#home"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0 md:text-4xl">
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
            onClick={() => setToggle(!toggle)}
            to="/#features"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0 md:text-4xl">
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
            onClick={() => setToggle(!toggle)}
            to="/#Projects"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0 md:text-4xl">
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
          <Link
            onClick={() => setToggle(!toggle)}
            to="/#FAQ"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0 md:text-4xl">
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
            onClick={() => setToggle(!toggle)}
            to="/#Contact"
            className="menu-item group relative cursor-pointer"
          >
            <p className="text-6xl transition-all duration-200 ease-in-out group-hover:opacity-0 md:text-4xl">
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
