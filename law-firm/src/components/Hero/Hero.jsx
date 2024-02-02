import HeroImage from '../../assets/Group 10591.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.left}>
            <div className={styles.wrapper}>
                <h1>
                You don’t have to 
                Fight them Alone.
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                   curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            </div>
        </div>
        <div className={styles.right}>
            <img src={HeroImage} height={544} width={467}/>
        </div>

    </div>
  )
}

export default Hero