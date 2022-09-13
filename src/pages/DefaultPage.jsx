import React from 'react'
import Security from './Security';
import NotFound from './NotFound';
import { Navbar,Footer } from '../components';

const DefaultPage = () => {
    let discomp = "";

    if( window.location.pathname === "/security" ){
        discomp = "<Security />"
    }
    else{
        discomp = "<NotFound />"
    }
    console.log(discomp)
    return (
        <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}> 
            <Navbar />
            </div>
        </div>

        {/* <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            <Hero />
            </div>
        </div> */}

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            {/* <Clients />
            <Stats />
            <Business />
            <BusinessCard1 />
            <BusinessCard2 />
            <CardDeal />
            <Testimonials />
            <CTA /> */}

            

            <Footer />
            </div>
        </div>
        </div>
    )
    }

export default DefaultPage