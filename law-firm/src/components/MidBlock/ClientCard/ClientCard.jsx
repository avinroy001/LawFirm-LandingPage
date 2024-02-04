import styles  from './ClientCard.module.css';
import PropTypes from 'prop-types';


const ClientCard = ({pic,name1}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.image}>
            <img src={pic} alt='client image' height={102} width={105}/>
        </div>
        <div className={styles.title}>
            <p>
                {name1}
            </p>
        </div>
        <div className={styles.info}>
            <p>
            Ceo of Hunt
            </p>
        </div>
        <div className={styles.content}>
            <p>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
            </p>
        </div>
    </div>
  )
}
ClientCard.propTypes = {
    pic: PropTypes.string.isRequired,
    name1: PropTypes.string.isRequired,
  };
export default ClientCard