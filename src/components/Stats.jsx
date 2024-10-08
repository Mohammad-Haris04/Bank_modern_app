import styles from "../style"
import {stats} from '../constants';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map((stat)=>(
          <div key={stat.id} className="flex-1 flex flex-row justify-start items-center ">
            <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] 
              text-white">{stat.value}</h4>
            <p className="font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] 
            text-gradient uppercase">{stat.title}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Stats
