import { useState } from "react";
import questions from "../../api/api"
import styles from './Accordian.module.css';
import MyAccordian from "./MyAccordian";
const Accordian = () => {
    const [data,setData]=useState(questions)
  return (
    <>
        {
            data.map((ele) =>{
                const{id} = ele;
                return <MyAccordian key={id} {...ele}/>
            })
        }
    </>
  )
}

export default Accordian