import { NavLink, Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer
      id="contact"
      className=" text-light relative z-40 bg-secondary py-16"
    >
      <div className="footer-container width footer-auto-fit ">
        <div className="grid-col">
          <h2 className="text-4xl font-bold md:text-center">title</h2>
          <p className="text-light/70 my-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            eos.
          </p>
          <div className="socials flex items-center gap-9 md:justify-center">
            <img
              className="w-12 cursor-pointer duration-300 hover:scale-110 active:scale-90"
              src="../assets/whatsapp.svg"
              alt=""
            />
            <img
              className="w-[45px] cursor-pointer duration-300 hover:scale-110 active:scale-90"
              src="../assets/facebook.svg"
              alt=""
            />
            <img
              className="w-12 cursor-pointer duration-300 hover:scale-110 active:scale-90"
              src="../assets/instagram.svg"
              alt=""
            />
            <img
              className="w-12 cursor-pointer duration-300 hover:scale-110 active:scale-90"
              src="../assets/twitter.svg"
              alt=""
            />
          </div>
        </div>
        <div className="grid-col">
          <h3
            className="text-center text-2xl
             font-bold
             "
          >
            title{" "}
          </h3>
          <ul className="mt-10 flex flex-col items-center justify-center gap-7"></ul>
        </div>
        <div className="grid-col">
          <h3
            className="text-center text-2xl
             font-bold
             "
          >
            title{" "}
          </h3>
          <ul className="mt-10 flex flex-col items-center justify-center gap-7"></ul>
        </div>
        <div className="grid-col">
          <h3
            className="text-center text-2xl
             font-bold
             "
          >
            title{" "}
          </h3>
          <ul className="mt-10 flex flex-col items-center justify-center gap-7"></ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
