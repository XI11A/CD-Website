import styles from "../style"
import { cloudcomputing, cloudimg } from "../assets"
import GetStarted from "./GetStarted"
import { Link } from "react-router-dom"
import Button from "./Button"
import Flickity from "react-flickity-component"
import { carousel } from "../constants"
import 'tw-elements';

const Hero = () => {

  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.flexCenter}`}>
      <div className={`flex-1 flex-col`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for {""}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}
        {/* <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold xxs:text-[40px] xxs:leading-[100%] ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Cloud <span className="text-gradient">Destinations</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"> */}
            {/* <Link to="/contactus">
              <GetStarted />
            </Link> */}
          {/* </div>
        </div>
        
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Cost Optimization, Budget, Vendor and Contract Management, Hardware & Software Compliance and Warranty Services.
        </p>
        <div className="mt-4 z-10">
          <Button />
        </div> */}
      </div>
      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              {/* <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="block w-full"
                alt="..."
              /> */}
              <video autoPlay loop muted id="player" className="block w-full h-[80%]">
                <source src={cloudcomputing} type="video/mp4" />
              </video>
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            
            <div>
              {carousel.map((carousel, index) => (
                <div className="carousel-item relative float-left w-full">
                  {/* {carousel.type === "video" ? (
                    <>
                    <video autoPlay loop muted className="myvid" id="player">
                      <source src={carousel.src} type="video/mp4" />
                    </video>
                    </>
                  ) : (<img key={carousel.id} src={carousel.src} className="block w-full" alt={carousel.title} />)} */}
                  <img key={carousel.id} src={carousel.src} className="block w-full" alt={carousel.title} />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl font-poppins">{carousel.title}</h5>
                    <p className="font-poppins">{carousel.detail}</p>
                    <Button />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={cloudimg} alt="Cloud Image" className="w-[100%] h-[100%] relative z-[5] sm:w-[80%] xxs:w-[80%]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}

        {/* <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>

            <div>
              {carousel.map((carousel, index) => (
                <div className="carousel-item relative float-left w-full">
                  <img key={carousel.id} src={carousel.src} className="block w-full" alt={carousel.title} />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl font-poppins">{carousel.title}</h5>
                    <p className="font-poppins">{carousel.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>
      <div className={`xxs:hidden ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )}

export default Hero