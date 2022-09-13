import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import { Navbar,Footer } from '../components'
import styles from '../style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

const ContactUs = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> 
          <Navbar />
        </div>
      </div>

      <div className='pb-14'>
        <h2 className={`${styles.heading2} ${styles.flexCenter} ${styles.paddingX}`}>
          <span className='text-gradient'>How we can help you ?</span>
        </h2>
        <p className={`${styles.paragraph} ${styles.flexCenter} ${styles.paddingX}`}>We are Trusted advisors, Consistent on-time delivery, Fits your budget.</p>
      </div>
      <div>
        <div>
          <h3 className={`${styles.flexCenter} ${styles.paddingX} font-poppins font-semibold text-white text-[30px]`}>Get in Touch now</h3>
          <p className={`${styles.paragraph} ${styles.paddingX} ${styles.flexCenter} font-poppins text-dimWhite`}>Use the form below to drop us an email</p>
          <Formik
          initialValues={{
            name:"",
            email:"",
            company:"",
            phone:"",
            message:"",
          }}
          >
            <Form  className={`${styles.flexCenter} flex flex-col font-poppins font-semibold pt-10`}>
              <label htmlFor='name' className='text-gradient'>Name</label>
              <Field id="name" name="name" placeholder="Your Name" className="w-[420px] h-[30px] rounded-[6px]" />
              <label htmlFor='email' className='text-gradient'>Email</label>
              <Field id="email" name="email" placeholder="Email" type="email" className="w-[420px] h-[30px] rounded-[6px]" />
              <label htmlFor='company' className='text-gradient'>Company Name</label>
              <Field id="company" name="company" placeholder="Company Name" className="w-[420px] h-[30px] rounded-[6px]" />
              <label htmlFor='name' className='text-gradient'>Phone No.</label>
              <Field id="phone" name="phone" placeholder="Phone" type="number" className="w-[420px] h-[30px] rounded-[6px]" />
              <button type="submit" className={`w-[85px] h-[45px]  py-4 px-6 bg-blue-gradient font-poppins font-semibold text-[15px] text-primary outline-none ${styles} ${styles.flexCenter} rounded-[10px] mt-4`} onClick={() => setClick((prev) => !prev)}>
                Submit<FontAwesomeIcon icon={faSpinner} className={`${click ? `w-[100%] ml-2 animate-spin` : `w-[0%]`}`} />
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ContactUs