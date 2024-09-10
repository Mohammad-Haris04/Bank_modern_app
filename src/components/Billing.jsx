import {apple, bill, google} from "../assets"
import styles,{ layout } from "../style"
import '../animations/animation.css';
import { useInView } from 'react-intersection-observer';

const Billing = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  return (
    <section className={layout.sectionReverse}>
      {/* left  div */}
     <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-5" />
      <div className="absolute z-3 -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-0 -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
     </div>

      {/* right div */}
      <div className={layout.sectionInfo}>
      <div ref={ref1} className={`animation2 animation-delay-0 ${inView1? 'visible' : ''}`}>
        <h2 className={`font-poppins font-semibold text-[40px] text-white ${styles.heading2} `}>
        Easily control your <br className="sm:block hidden"/> billing & invoicing.
        </h2>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        </div>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
         <img src={apple} alt="applestore" className="w-[148px] h-[42px] mr-5 object-contain cursor-pointer"/>
         <img src={google} alt="google" className="w-[148px] h-[42px] mr-5 object-contain cursor-pointer"/>

        </div>

      </div>
    </section>
  )
}

export default Billing
