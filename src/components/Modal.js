import React, { useState } from 'react';

import Modal from 'react-modal';
import styles from '../stylings/Modal.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding:40,
    display: 'flex',
    flexDirection: 'column',
    gap:30,
    
    
      
  
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  
};




function ModalComponent({newTask}) {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [taskId, setTaskId] = useState('')
  const [taskStatus, setTaskStatus] = useState('')
  const [taskMessage, setMessage] = useState('')
  const [taskDate, setDate] = useState('')

  const saveNewTaskData = (event) => {
    event.preventDefault();
 
    const newTaskData ={
        id: taskId,
        status: taskStatus,
        message: taskMessage,
        dueDate: new Date(taskDate)
    }
    newTask(newTaskData)
    setIsOpen(false);
 
  }

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <input type='text' name='task_id' placeholder='task id' className={styles.inputComponent}  value ={taskId} onChange={event => setTaskId(event.target.value)} />
      <input type='text' name='status' placeholder='status' className={styles.inputComponent} value ={taskStatus} onChange={event => setTaskStatus(event.target.value)}/>
      <input type='text' name='message' placeholder='message' className={styles.inputComponent} value ={taskMessage} onChange={event => setMessage(event.target.value)}/>
      <input type='date' name='date' placeholder='date' className={styles.inputComponent} value ={taskDate} onChange={event => setDate(event.target.value)}/>
      <button onClick={ saveNewTaskData }>Add new task!</button>
      </Modal>
    </div>
  );
}
export default ModalComponent