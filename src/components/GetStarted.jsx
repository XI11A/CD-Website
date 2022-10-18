import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => (
    <div className={`hover:animate-bounce ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mt-3">
            <span className="text-gradient">Request a</span>
          </p>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Demo</span>
        </p>
        <img src={arrowUp} alt="Request a Demo" className="w-[23px] h-[23px] object-contain" />
      </div>
    </div>
  )

export default GetStarted