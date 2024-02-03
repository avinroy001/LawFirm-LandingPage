import styles from './Header.module.css';
import NavBar from '../NavBar';
import Hero from '../Hero/Hero';
const Header = () => {
  return (
    <div className={styles.navbar}>
    <NavBar/>
    <Hero/>
    </div>
    
  )
}

export default Header