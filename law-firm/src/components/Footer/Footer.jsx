import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import pic from '../../assets/Group 10386.png';

const Footer = () => {
  return (

    <div>
    <div className={styles.footernav}>
        <div className={styles.logo}>
            <img src={pic} alt='logo' width={143} height={30}/>
        </div>
        <div className={styles.mid}>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
        </div>
        <div className={styles.icons}>
            <FaInstagram size={30} color='var(--color-primary)'/>
            <FaSquareFacebook size={30} color='var(--color-primary)'/>
            <FaSquareTwitter size={30} color='var(--color-primary)'/>
            <FaSquarePinterest size={30} color='var(--color-primary)'/>
        </div>    
    </div>
    <div className={styles.last}>
            <div>
                <p>© 2020 Acme. All right reserved.</p>
            </div>
            <div>
                <p>Privacy Policy</p>
            </div>
            <div>
                <p>Terms of Service</p>
            </div>
        </div>
    </div>
  )
}

export default Footer