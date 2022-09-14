import React from 'react'
import { Helmet } from 'react-helmet'
import { Stats, Business, BusinessCard1, BusinessCard2, CardDeal, Testimonials, Clients, CTA } from '../components'

const Home = () => {
  return (
    <span>
      <Helmet>
        <title>Cloud Destinations | Home</title>
      </Helmet>
      <Clients />
      <Stats />
      <Business />
      <BusinessCard1 />
      <BusinessCard2 />
      <CardDeal />
      <Testimonials />
      <CTA />
    </span>
  )
}

export default Home