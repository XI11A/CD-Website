import { features } from "../constants"
import styles, { layout } from "../style"
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0" } feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
  </div>
)

const Business = () => (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our Cloud <br className="sm:block hidden" />Implementation</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>As a focused technology company, we combine the real and the digital worlds and help customers to meet the great challenges of our time. Our businesses and local organizations enjoy the entrepreneurial freedom to serve their customers and markets in the best way possible, the structure is geared toward creating value for customers, creating technology with purpose and thus changing the lives for billions of people for the better. We create technology to transform the everyday.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((features, index) => (
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>
    </section>
  )

export default Business