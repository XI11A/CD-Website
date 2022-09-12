import React from 'react'
import { Footer, Navbar } from '../components'
import styles from '../style'

const Services = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> 
          <Navbar />
        </div>
      </div>

      <div>
        <h2 className={`${styles.heading2} ${styles.paddingX}`}>
          <span className=' text-white text-gradient'>Sample Services Page</span>
        </h2>
        <p className={`${styles.paragraph} ${styles.flexStart} ${styles.paddingX}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tellus ac erat ullamcorper iaculis. Ut laoreet mi dolor, quis congue sem dignissim ut. Etiam eget sodales turpis. Nam.</p>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Services