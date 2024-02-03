import styles from './Block2.module.css';
import { Card } from './Card';
const Block2 = () => {
  return (
    <div className={styles.block2}>
        <div className={styles.heading}>
        <h1>Why Choose us?</h1>
        </div>
       <div className={styles.cardLoop}>
            <Card/>
            <Card/>
            <Card/>
       </div>
    </div>
  )
}

export default Block2