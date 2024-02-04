import styles from './Block5Card.module.css';
import PropTypes from 'prop-types';

const Block5Card = ({pic,name,num_case}) => {
  return (
    <div className={styles.carddiv}>
    <div className={styles.card}>
        <div className={styles.img}>
            <img src={pic} alt='team pic'/>
        </div>
        <div className={styles.teaminfo}>
            <p>
            {name}
            </p>
                
            <div>{num_case}<span>Cases</span></div>
        </div>
    </div>
    </div>
  )
}
Block5Card.propTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    num_case: PropTypes.string.isRequired,
  };

export default Block5Card