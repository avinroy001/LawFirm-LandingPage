import styles from './MyAccordian.module.css';
import  PropTypes  from 'prop-types';
import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

const MyAccordian = ({question , answer}) => {
    const [display,setDisplay] = useState(false);
  return (
    <>  
        <div className={styles.header}>
        <h3>{question}</h3>
        <div onClick={()=> setDisplay(!display)}>{
            display ? (<IoIosRemoveCircle size={30} color='var(--color-primary)'/>) :
           (<IoIosAddCircle size={30} color='var(--color-primary)'/>)
        }
        </div>
        </div>
        {display && <p>{answer}</p>}
    </>
  )
}
MyAccordian.propTypes = {
    question : PropTypes.string,
    answer : PropTypes.string,
};
export default MyAccordian