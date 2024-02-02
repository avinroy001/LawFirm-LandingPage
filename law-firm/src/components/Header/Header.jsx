import styles from './Header.module.css';
import NavBar from '../NavBar';
const Header = () => {
  return (
    <div className={styles.navbar}>
    <NavBar/>
    </div>
    
  )
}

export default Header