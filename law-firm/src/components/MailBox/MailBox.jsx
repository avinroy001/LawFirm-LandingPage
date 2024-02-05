import styles from './MailBox.module.css';
import { IoIosMail } from "react-icons/io";

const MailBox = () => {
  return (
    <div className={styles.mailbox}>
      <div>
        <IoIosMail />
        <input placeholder='Enter your email address'></input>
      </div>
      <div className={styles.button}>
        <button>Let's Talk</button>
      </div>
    </div>
  )
}

export default MailBox