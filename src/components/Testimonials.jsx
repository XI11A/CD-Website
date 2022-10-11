import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>What People are <br className="sm:block hidden" />saying about us</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>We are Trusted advisors, Consistent on-time delivery</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
      {/* <div class="space-y-2">
          <span class="block w-8 h-0.5 bg-gray-600"></span>
          <span class="block w-5 h-0.5 bg-gray-600"></span>
          <span class="block w-8 h-0.5 bg-gray-600"></span>
        </div> */}
    </section>
  )

export default Testimonials