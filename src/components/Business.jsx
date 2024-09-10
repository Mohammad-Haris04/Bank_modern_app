import { features } from "../constants"
import styles,{ layout } from "../style"
import Button from "./Button"
import '../animations/animation.css';
import { useInView } from 'react-intersection-observer';


const FeatureCard = ({icon,title,content,index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? 'mb-6' : 'mb-0'} feature-card`}>
   <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={icon} alt="icon" className="h-[50%] w-[50%] object-contain" />
   </div>
   <div className="flex flex-1 flex-col ml-3">
     <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
     <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
   </div>
  </div>
)


const Business = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  return (
    <section id="features" className={layout.section}>
      
      <div className={layout.sectionInfo}>
      
        <h2 ref={ref1} className={`${styles.heading2} animation2 animation-delay-0 ${inView1? 'visible' : ''}`}>You do the business,<br className="sm:block hidden"/> we’ll handle the money.</h2>

        <p ref={ref1} className={`${styles.paragraph} max-w-[460px] mt-5 animation2 animation-delay-0 ${inView1? 'visible' : ''}`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
       
        <Button styles="mt-10" />
      </div> 

      <div className={`${layout.sectionImg} flex-col`}>
        { features.map((features,index)=>(
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
