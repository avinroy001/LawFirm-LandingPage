import styles from './Block5.module.css';
import Block5Card from './Block5Card/Block5Card';
import pic01 from '../../assets/Ellipse 15.png';
import pic02 from '../../assets/Ellipse 16.png';
import pic03 from '../../assets/Ellipse 15 (1).png';
import pic04 from '../../assets/Ellipse 15 (2).png';
import pic05 from '../../assets/Ellipse 15 (3).png';
import pic06 from '../../assets/Ellipse 15 (4).png';

const Block5 = () => {
  return (
    <div className={styles.block5}>
        <div className={styles.heading}>
            <p>Our Team</p>
         </div>   
            <div className={styles.cardflex}>
            <Block5Card pic={pic01} name='Danial Def' num_case={301}/>
            <Block5Card pic={pic02} name='SanFole' num_case={850}/>
            <Block5Card pic={pic03} name='Cesforila' num_case={470}/>
            <Block5Card pic={pic04} name='Colleen' num_case={180}/>
            <Block5Card pic={pic05} name='Haldone' num_case={212}/>
            <Block5Card pic={pic06} name='Nik Jeo' num_case={350}/>
            </div>
    </div>
  )
}

export default Block5