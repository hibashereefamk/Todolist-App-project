import React, { useState } from 'react';

import './App.css';

function App() {
  const[task,setTask]=useState('');
  const[taskList,setTaskList]=useState([]);
  
  const handleAddTask=()=>{
    if(task.trim()=== '')return;
    setTaskList([...taskList,task]);
    setTask(''); }
  const handleDeleteTask=(index)=>{
    setTaskList(taskList.filter((_,i)=>i !==index))

  }  
 
  return (
    <div className="container">
    <h1>react todo list</h1>
        <div className='input-section'>
          <input type='text'placeholder='enter your task' value={task}
          onChange={(e)=>setTask(e.target.value)}/>
          <button onClick={handleAddTask}>➕</button>
        </div>

        <ul className='task-list'>{taskList.map((item,index)=>(
          <li key={index}><span>{item}</span> <button onClick={()=>handleDeleteTask(index)}>❌</button></li>
        ))}</ul>
    </div>
     
  );
}

export default App;
