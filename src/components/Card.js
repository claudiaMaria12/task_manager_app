import React from 'react'
import styles from '../stylings/Card.module.css'
//import Datetime from 'react-datetime';

const Card = ({item}) => {
  return (
    <div className={styles.card}>
     
        <div className={styles.firstLine}>
            <div className={styles.id} >{item.id}</div>
            <div className={styles.status}>{item.status}</div>
        </div>

        <div className={styles.secondLine}>{item.message}</div>

        <div className={styles.thirdLine}>
        <div className={styles.dueDate}>Due Date</div>
        <div className={styles.date}>{new Date(item.dueDate).toLocaleDateString('ro-RO')}</div>
        </div>
       
      
    </div>
  )
}

export default Card