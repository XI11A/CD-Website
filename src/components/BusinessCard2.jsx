import { assets } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const BusinessCard2 = () => (
      <section id="BusinessCard" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Asset Management, Performance <br className="sm:block hidden" />& Capacity Management</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            <ul className="list-disc">
              <li>Vendor Management - Contracts, Negotiations & Performance.</li>
              <li>Cost Effective Competent Offshore RNOC Team.</li>
              <li>Security and Compliance Management.</li>
            </ul>
          </p>
          <Button styles="mt-10" />
        </div>
        <div className={layout.sectionImg}>
          <img src={assets} alt="Asset Management" className="w-[100%] h-[100%] relative z-[5]" />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
      </section>
    )

export default BusinessCard2