import  styles from "../style.js"
import {discount , robot} from "../assets"
import GetStarted from './GetStarted';
import { useInView } from 'react-intersection-observer';
import '../animations/animation.css';


const Hero = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  return (
    <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* left div */}
      <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6 xl:px-0`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] ">
           <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
           <p className={`${styles.paragraph} ml-2`}>
           <span className="text-white">20%</span> Discount for{" "}
           <span className="text-white">1 Month</span> Account
           </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 ref={ref1} className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] animation4 animation-delay-5 ${inView1 ? 'visible' : ''}`}>
            The Next <br className="sm:block hidden"/>{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <div ref={ref1} className={`animation1 animation-delay-4 ${inView1 ? 'visible' : ''}`}>
            <GetStarted/>
            </div>
          </div>
        </div>

        <h1 ref={ref1} className={` font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full animation4 animation-delay-5 ${inView1 ? 'visible' : ''}`}>
        Payment Method
        </h1>
        <p ref={ref1} className={`${styles.paragraph} max-w-[475px] mt-5 animation4 animation-delay-5 ${inView1 ? 'visible' : ''}`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

       {/* right div */}
       <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-5" />
        <div className="absolute z-[0] top-0 w-[40%] h-[35%] pink__gradient"/>
        <div className="absolute z-[1] bottom-40 w-[80%] h-[80%] rounded-full white__gradient"/>
        <div className="absolute z-[0] right-20 bottom-20 w-[50%] h-[50%] blue__gradient"/>
       </div>

       <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted/>
       </div>
    </section>
  )
}

export default Hero
