import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Layout() {
  const app = useRef();

  useEffect(() => {
    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;
    let ctx = gsap.context(() => {
      //! ----

      gsap.to(
        {},
        {
          duration: 0.016,
          repeat: -1,
          onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            gsap.set(".cursor-follower", {
              css: {
                left: posX - 20,
                top: posY - 20,
              },
            });
            gsap.set(".cursor", {
              css: {
                left: mouseX,
                top: mouseY,
              },
            });
          },
        }
      );
      window.addEventListener("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={app}>
      <div id="top"></div>
      <div className="cursor cubic-bezier pointer-events-none absolute z-50 h-2 w-2  scale-75 select-none rounded-full bg-white"></div>
      <div className="cursor-follower"></div>
      <Navbar />
      <div className="min-h-hero mt-20">
        <Outlet  />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
