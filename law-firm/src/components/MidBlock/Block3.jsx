import styles from './Block3.module.css';
import Pic1 from '../../assets/Rectangle 3652.png';
import Pic2 from '../../assets/Rectangle 3651.png';
import Pic3 from '../../assets/Rectangle 3653.png';
import Pic4 from '../../assets/Rectangle 3654.png';
import Pic5 from '../../assets/Rectangle 3656.png';
import Pic6 from '../../assets/Rectangle 3655.png'
const Block3 = () => {
  return (
    <div>
        <p className={styles.header}>Area of Practices</p>
        <div className={styles.wrapper}>
            <div className={styles.img1}>
            <img src={Pic1} alt='pic1'/>
            <p className={styles.business}>BUSINESS LAW
            </p>
            </div>
            <div>
            <img src={Pic2} alt='pic2'/>
            <p className={styles.partenership}>Partenership LAW
            </p>
            </div>
            <div>
            <img src={Pic3} alt='pic3'/>
            <p className={styles.realestate}>REAL ESTATE LAW</p>
            </div>
            <div>
            <img src={Pic4} alt='pic4'/>
            <p className={styles.business2}>BUSINESS LAW</p>
            </div>
            <div>
            <img src={Pic5} alt='pic5'/>
            <p className={styles.landlord}>LANDLORD DISPUTES</p>
            </div>
            <div>
            <img src={Pic6} alt='pic6'/>
            <p className={styles.elder}>ELDER ABUSE</p>
            </div>
        </div>
    </div>
  )
}

export default Block3