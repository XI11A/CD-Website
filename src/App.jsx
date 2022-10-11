import styles from "./style";
import { Route, Routes } from "react-router-dom";
import { Company, ContactUs, Home, Jokes, NotFound, Partners, Quotes, Resource, Security, Services } from "./pages";
import { Hero, Navbar, Footer } from "./components";

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> 
          <Navbar />
        </div>
      </div>

      {/* {location.pathname === '/' ? 
      <div className={`bg-primary ${styles.flexStart} mt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div> : null
      } */}

      <div className={`bg-primary ${styles.flexStart} mt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div> */}
      <div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/security" element={<Security />} />
              <Route path="/services" element={<Services />} />
              <Route path="/quote" element={<Quotes />} />
              <Route path="/joke" element={<Jokes />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );

export default App