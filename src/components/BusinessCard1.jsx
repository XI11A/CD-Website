import { cloudstorage } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const BusinessCard1 = () => (
      <section id="BusinessCard" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={cloudstorage} alt="Cloud Storage" className="xs:w-[80%] w-[100%] h-[100%] relative z-[5]" />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Experts in Enterprise <br className="sm:block hidden" />Cloud Strategy</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            <ul className="list-disc">
              <li>Infrastructure as Code (IaC) - Infrastructure Automation.</li>
              <li>Knowledge base and Industry Standard Best Practises.</li>
              <li>Innovation, Disruptive & Emerging Technologies.</li>
            </ul>
          </p>
          <Button styles="mt-10" />
        </div>
      </section>
    )

export default BusinessCard1