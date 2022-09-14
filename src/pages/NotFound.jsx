import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../style'
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>CD | Not Found!</title>
      </Helmet>
        <div className='background-primary mt-[100px] mb-[100px]'>
            <h1 className={`${styles.heading2} ${styles.flexCenter} text-gradient`}>404! - Page Not Found</h1>
            <NavLink to="/" className={`${styles.paragraph} ${styles.flexCenter}`}>Go Home!</NavLink>
        </div>
    </div>
  )
}

export default NotFound