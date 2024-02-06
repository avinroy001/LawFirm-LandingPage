import Accordian from '../Accordian/Accordian';
import styles from './Block6.module.css';

const Block6 = () => {
  return (
    <div className={styles.block6header}>
        <p className={styles.h}>FAQ</p>
    <div className={styles.block6}>
        <div className={styles.left}>
            <p>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </p>
        </div>
        <div className={styles.right}>
            <Accordian/>
        </div>
    </div>
    </div>
  )
}

export default Block6