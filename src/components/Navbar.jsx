import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { close, menu, cdlogo} from '../assets';
import { navLinks } from '../constants';
import styles, { burgerbtn } from "../style";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-1 justify-between items-center">
      <Link to="/"><img src={cdlogo} alt="Cloud Destinations Logo" className={`w-[200px] h-[88px]`} /></Link>
      <ul className={`list-none sm:flex hidden justify-end items-center flex-1 ${styles.nav}`}>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : `mr-10`} text-white hover:text-secondary link_animation link_animations` }
          >
            <NavLink to={`${nav.id}`}>
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* <img src={toggle ? close : menu} alt="Menu" className="xxs:w-[24px] xxs:h-[24px] w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} /> */}
        {/* <FontAwesomeIcon icon={toggle ? faXmark : faBars} alt="Menu" inverse className="xxs:w-[24px] xxs:h-[24px] w-[28px] h-[28px] object-contain fill-secondary" onClick={() => setToggle((prev) => !prev)} /> */}
        <Hamburger toggled={toggle} toggle={setToggle} direction="left" color="#00F6FF" size={24} duration={0.7} />
        {/* <div className={toggle ? burgerbtn.activeHamburger : burgerbtn.burgerbtn} onClick={() => setToggle(!toggle)} /> */}
        <div className={`${toggle ? `flex` : `hidden`} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : `mb-4`} text-white` }
              >
                <Link to={`${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/contactus">
        <button type="submit" className={`buttonanim w-[240px] h-[40px] hidden sm:flex bg-blue-gradient font-poppins font-semibold text-[15px] text-primary outline-none ${styles} ${styles.flexCenter} rounded-[10px] ml-3`}>
          <span>Contact us</span>
        </button>
      </Link>
    </nav>
  )
}

export default Navbar