import { NavLink, Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer
      id="contact"
      className=" relative z-10 bg-secondary py-16 text-white"
    >
      <div className="footer-container width">
        <div className="above-line footer-auto-fit h-full w-full ">
          <div className="grid-col">
            <h2 className=" logo font-sub-heading text-2xl font-bold tracking-widest">
              OMATECh
            </h2>
            <p className="text-light/70 my-7 font-body font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              eos.
            </p>
          </div>
          <div className="grid-col">
            <h3
              className="text-center font-sub-heading text-2xl
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
              className="text-center font-sub-heading text-2xl
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
              className="text-center font-sub-heading text-2xl
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

        <hr className="my-6 border-2 border-white" />
        <div className="flex w-full items-center justify-between gap-7 md:flex-col md:items-center">
          <p className="font-sub-heading"> All Rights Reserved </p>{" "}
          <p className="font-sub-heading">&#169; 2023 OmaTech Agency</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
