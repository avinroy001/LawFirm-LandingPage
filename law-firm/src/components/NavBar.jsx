import Logo from "./Logo/Logo";
import NavButton from "./NavButton/NavButton";
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div><Logo/></div>
       
        <div className={styles.middleNav}>
            <h5>Home</h5>
            <h5>Attorneys</h5>
            <h5>Practice Areas</h5>
            <h5>About Us</h5>
        </div>
        <div>
        <NavButton/>
        </div>
        
    </div>
  )
}

export default NavBar