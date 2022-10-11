import React from 'react'
import styles from '../style'
import { resource } from '../constants'

const BlogBuilder = () => {
  return (
    <div>
        <Helmet>
          <title>CD | Resource</title>
      </Helmet>
      {resource.map((resource, index) => (
        <div>
          <div className={`${styles.flexCenter}`}><NavLink to={resource.id}><h2 className={`${styles.heading2} ${styles.paddingX} text-white text-gradient`}>{resource.title}</h2></NavLink><p className='text-dimWhite'>Date: {resource.Date}</p></div>
          <p className={`${styles.paragraph} ${styles.flexStart} ${styles.paddingX}`}>{resource.content}</p>
          <img src={resource.cover}  className={`w-[100%] h-[100%] relative z-[5] sm:w-[80%] xxs:w-[80%] ${styles.flexStart} ${styles.paddingX}`} />
        </div>
      ))
      }
    </div>
  )
}

export default BlogBuilder