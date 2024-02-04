import styles from './Block4.module.css';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import ClientCard from './ClientCard/ClientCard';
import Img1 from '../../assets/Ellipse 14.png';
import Img2 from '../../assets/Ellipse 14 (1).png';
import Img3 from '../../assets/Ellipse 14 (2).png';

const Block4 = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.block4}>
        <p className={styles.text}>
        What says our
        <br/>
        happy Clients 
        </p>
        <div className={styles.arrow}>
            <div className={styles.arrBlock}>
                <div className={styles.arrowsignL}>
                <GoArrowLeft size='50px'/>
                </div> 
            </div>
            <div className={styles.arrBlock}>
                <div className={styles.arrowsignR}>
                <GoArrowRight size="50px"/>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.clientcard}>
        <ClientCard pic={Img1} name1="Jane Cooper"/>
        <ClientCard pic={Img2} name1="Devon Lane"/>
        <ClientCard pic={Img3} name1="Robert Fox"/>
    </div>
    </div>
  )
}

export default Block4