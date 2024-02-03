import styles from './Card.module.css';
import CardImg from '../../assets/Group 19.png';

export const Card = () => {
  return (
    <div className={styles.cardBody}>
        <div className={styles.cardImg}>
            <img src={CardImg} alt='card image' width={101} height={101}/>
        </div>
        <div className={styles.cardTitle}>
            <h4>98% Success Rate</h4>
        </div>
        <div className={styles.cardContent}>
            <p>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer.
            </p>
        </div>
        <div className={styles.cardButton}>
            Read More
        </div>
    </div>
  )
}
