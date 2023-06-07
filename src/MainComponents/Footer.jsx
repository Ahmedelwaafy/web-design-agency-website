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
          <h2 className=" logo text-2xl font-sub-heading font-bold tracking-widest">OMATECh</h2>
          <p className="text-light/70 my-7 font-body font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            eos.
          </p>
        </div>
        <div className="grid-col">
          <h3
            className="text-center text-2xl font-sub-heading
             font-bold
             "
          >
            Company{" "}
          </h3>
          <ul className="mt-10 flex flex-col items-center justify-center gap-7">
            <li className="font-body">Item 1</li>
            <li className="font-body">Item 2</li>
            <li className="font-body">Item 3</li>
            <li className="font-body">Item 4</li>
          </ul>
        </div>
        <div className="grid-col">
          <h3
            className="text-center text-2xl font-sub-heading
             font-bold
             "
          >
            Projects{" "}
          </h3>
          <ul className="mt-10 flex flex-col items-center justify-center gap-7">
            <li className="font-body">Item 1</li>
            <li className="font-body">Item 2</li>
            <li className="font-body">Item 3</li>
            <li className="font-body">Item 4</li>
          </ul>
        </div>
        <div className="grid-col">
          <h3
            className="text-center text-2xl font-sub-heading
             font-bold
             "
          >
            About{" "}
          </h3>
          <ul className="mt-10 flex flex-col items-center justify-center gap-7">
            <li className="font-body">Item 1</li>
            <li className="font-body">Item 2</li>
            <li className="font-body">Item 3</li>
            <li className="font-body">Item 4</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
