import styles from './Block7.module.css';

const Block7 = () => {
  return (
    <div className={styles.block7}>
        <p className={styles.header}>
            Subscribe Our Newsletter
        </p>
        <div className={styles.inputblock}>
            <div className={styles.name}>
                <input type='text' placeholder='Name:'></input>
            </div>
            <div className={styles.email}>
                <input type='text' placeholder='Enter your Email'></input>
            </div>
            <div className={styles.button}>
                <button>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Block7