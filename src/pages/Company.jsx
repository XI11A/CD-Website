import React from 'react'
import { Navbar,Footer } from '../components'
import styles from '../style'
import { Helmet } from 'react-helmet';

const Company = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Helmet>
        <title>CD | Company</title>
      </Helmet>
      <div className='mt-2'>
        <h2 className={`${styles.heading2} ${styles.paddingX}`}>
          <span className=' text-white text-gradient'>Sample Company Page</span>
        </h2>
        <p className={`${styles.paragraph} ${styles.flexStart} ${styles.paddingX}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tellus ac erat ullamcorper iaculis. Ut laoreet mi dolor, quis congue sem dignissim ut. Etiam eget sodales turpis. Nam.</p>
      </div>
    </div>
  )
}

export default Company