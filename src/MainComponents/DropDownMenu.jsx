import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faGraduationCap,
  faGear,
  faStar,
  faArrowRightFromBracket,
  faQrcode,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { setAuthorized } from "../app/Features/Authorized/AuthorizedSlice";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

function DropDownMenu({ scroll }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {showMenu && (
        <div
          className="absolute inset-0 w-[100vw] h-[100vh]"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
      <div
        className=" img-icon relative group  flex justify-center items-center gap-2 min-w-[] min-h-[] py-8"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div
          className={`user-img-container overflow-hidden w-12 h-12 min-w-[48px] min-h-[48px] rounded-full p-1 transition-all duration-300 ease-in-out border-2  ${
            scroll ? "border-light " : "border-secondary"
          } cursor-pointer flex justify-center items-center`}
        >
          <img
            src="../assets/user-img.png"
            alt="user-img"
            className="user-img w-full  object-cover rounded-full"
          />
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`text-3xl cursor-pointer transition-all duration-300 ease-in-out ${
            scroll ? "text-light " : "text-secondary"
          }  `}
        />

        <div
          className={`absolute top-32 right-0 h-fit w-fit opacity-0 pointer-events-none scale-90 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 transition-all duration-300 ease-in-out ${
            showMenu &&
            "opacity-100 pointer-events-auto scale-100"
          }`}
        >
          <ul className="drop-menu-items   w-96 h-[400px] bg-light text-secondary dark:bg-dark border-secondary border-2 dark:text-light dark:border-light dark:border-2 flex flex-col items-start justify-start p-8 gap-10  rounded-xl shadow-md z-[150]">
            <li
              onClick={() => {
                navigate("");
                setShowMenu(false);
              }}
              className="flex justify-start items-center gap-4 cursor-pointer hover:opacity-80 "
            >
              <FontAwesomeIcon
                icon={faUser}
                className=" text-2xl cursor-pointer"
              />
              <p className="text-2xl font-semibold">Profile</p>
            </li>

            <li
              onClick={() => {
                navigate("/student/codes");
                setShowMenu(false);
              }}
              className="flex justify-start items-center gap-4 cursor-pointer hover:opacity-80"
            >
              <FontAwesomeIcon
                className=" text-2xl cursor-pointer"
                icon={faQrcode}
              />

              <p className="text-2xl font-semibold">Code History</p>
            </li>

            <li
              onClick={() => {
                navigate("/student/exams");
                setShowMenu(false);
              }}
              className="flex justify-start items-center gap-4 cursor-pointer hover:opacity-80"
            >
              <FontAwesomeIcon
                className=" text-2xl cursor-pointer"
                icon={faFileLines}
              />
              <p className="text-2xl font-semibold">Trial Exam History</p>
            </li>
            {/** 
 * 

 <li
   onClick={() => {
     navigate("");
     setShowMenu(false);
   }}
   className="flex justify-start items-center gap-4 cursor-pointer hover:opacity-80"
 >
   <FontAwesomeIcon
     icon={faStar}
     className=" text-2xl cursor-pointer"
   />
   <p className="text-2xl font-semibold">Go Pro</p>
 </li>
 * 
*/}

            <li
              onClick={() => {
                navigate("/");
                dispatch(setAuthorized(false));

                setShowMenu(false);
              }}
              className="flex justify-start items-center gap-4 cursor-pointer hover:opacity-80"
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className=" text-2xl cursor-pointer"
              />
              <p className="text-2xl font-semibold">Sign out</p>
            </li>
            <p className="user-email opacity-80 -mt-7 text-sm">
              user@gmail.com
            </p>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropDownMenu;
