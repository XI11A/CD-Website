import styles from "../style"
import { cloudimg } from "../assets"
import GetStarted from "./GetStarted"
import { Link } from "react-router-dom"
import Button from "./Button"

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-6 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for {""}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold xxs:text-[40px] xxs:leading-[100%] ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Cloud <span className="text-gradient">Destinations</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/contactus">
              <GetStarted />
            </Link>
          </div>
        </div>
        
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Cost Optimization, Budget, Vendor and Contract Management, Hardware & Software Compliance and Warranty Services.
        </p>
        <div className="mt-4 z-10">
          <Button />
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={cloudimg} alt="Cloud Image" className="w-[100%] h-[100%] relative z-[5] sm:w-[80%] xxs:w-[80%]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`xxs:hidden ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )

export default Hero