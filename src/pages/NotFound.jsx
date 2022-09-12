import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../style'

const NotFound = () => {
  return (
    <div>
        <div className='bg-black'>
            <h1 className={`${styles.heading2} ${styles.flexCenter} text-gradient`}>404! - Page Not Found</h1>
            <NavLink to="/" className={`${styles.paragraph} ${styles.flexCenter}`}>Go Home!</NavLink>
        </div>
    </div>
  )
}

export default NotFound