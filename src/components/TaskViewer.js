import React from 'react'
import styles from '../stylings/TasckViewer.module.css'
import Card from './Card'
import ModalComponent from './Modal'


const TaskViewer = ({data, setData}) => {

  const newTask = (newTaskData) => {
   setData(prev => [newTaskData, ...prev])
  }
  return (
    <div className={styles.container}>
        <div className={styles.title}>Task Manager</div>
        <ModalComponent  newTask={newTask} />
        <div className={styles.content}>
            {data.map((item,index) => {
                return <Card key={index} item ={item} />
            })}
            </div>
    </div>
  )
}

export default TaskViewer