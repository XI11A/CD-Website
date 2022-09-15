import React from 'react'
import { Helmet } from 'react-helmet'
import QuoteJokeService from '../services/QuoteJokeService'

const Quotes = () => {
  return (
    <div className='mt-2'>
        <Helmet>
            <title>CD | Quote of the Day</title>
        </Helmet>
        <QuoteJokeService />
    </div>
  )
}

export default Quotes