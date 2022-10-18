import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cdlogo, cd_logo, insider } from '../assets';
import { navLinks } from '../constants';
import styles from "../style";
import { Sling as Hamburger } from "hamburger-react";
import { BsFillTelephoneFill } from 'react-icons/bs';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-1 justify-between items-center navStyle">
      <Link to="/"><img src={cd_logo} alt="Cloud Destinations Logo" className={`xxs:ml-4 xs:ml-5 ss:ml-6 lg:ml-10 w-[200px] h-[88px]`} /></Link>
      <ul className={`list-none md:flex hidden justify-end items-center flex-1 ${styles.nav}`}>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : `mr-10`} text-black hover:text-[#1eb6bb] hover:font-semibold link_animation link_animations` }
          >
            <NavLink to={`${nav.id}`}>
              {nav.title}
            </NavLink>
          </li>
        ))}
        <li>
        <Link to="/contactus">
          <button type="submit" className={`buttonanim buttoncolor color w-[200px] h-[40px] hidden md:flex font-poppins font-semibold text-[15px] text-primary outline-none ${styles} ${styles.flexCenter} rounded-[10px] ml-3 mr-6`}>
            <span>Contact us</span>
          </button>
        </Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px]text-black hover:text-[#1eb6bb]`}>
          <a href="tel:+18662242680"><BsFillTelephoneFill className="flex flex-wrap" /><span>(+1) 866-224-2680</span></a>
        </li>
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center sm:mr-9 mr-3">
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
              onClick={() => setToggle((prev) => !prev )}
              >
                <Link to={`${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <img src={insider} className="md:flex hidden mr-8 ml-8 w-[83px] mt-8" />
    </nav>
  )
}

export default Navbar