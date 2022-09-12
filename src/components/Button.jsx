import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ styles }) => {
  return (
    <NavLink to="/contactus">
    <button type='button' className={`buttonanim py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      <span>Get Started</span>
    </button>
    </NavLink>
  )
}

export default Button