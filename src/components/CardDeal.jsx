import { card } from "../assets"
import styles from "../style"
import style,{ layout } from "../style"
import Button from "./Button"
import '../animations/animation.css';
import { useInView } from 'react-intersection-observer';

const CardDeal = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  return (
    <section className={`${layout.section}`}>
      <div id="product" className={`${layout.sectionInfo}`}>
      <div ref={ref1} className={`animation2 animation-delay-0 ${inView1? 'visible' : ''}`}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        </div>
        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg}`}>
       <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>
    </section>
  )
}

export default CardDeal
