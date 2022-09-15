import React from 'react'
import { Helmet } from 'react-helmet'
import QuoteJokeService from '../services/QuoteJokeService'

const Jokes = () => {
  return (
    <div className='mt-2'>
        <Helmet>
            <title>CD | Joke of the Day</title>
        </Helmet>
        <QuoteJokeService />
    </div>
  )
}

export default Jokes