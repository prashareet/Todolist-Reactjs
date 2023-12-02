import React from 'react'
import { useState } from 'react';

function NewForm({onSubmit}) {
    const [newTask, setNewTask] = useState("");
    function handleOnSubmit (e){
        e.preventDefault()
        onSubmit(newTask)
        setNewTask("")
        
      }
  return (
    <form className='new-item-form' onSubmit={handleOnSubmit}>
      <div className='form-row'>
        <label htmlFor='task'>Enter Task: </label>
        <input required type='text' id='task' placeholder='Enter your task ' 
        value={newTask} onChange={(e)=>{
          setNewTask(e.target.value)
          
        }}/>

      </div>
      <button className='btn'>Add Task</button>
    </form>
  )
}

export default NewForm