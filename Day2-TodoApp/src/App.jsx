import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])  // array to hold all tasks

  function todolist(){
    if(task.trim() === '') return task;
    setTasks([...tasks,task]);
    setTask(''); // clear the input
  }
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <input type='text' 
              placeholder='Enter the task' 
              value={task} 
              onChange={(e) => setTask(e.target.value)}/>
        <button onClick={todolist}>Submit</button>
        <ul>
            {tasks.map((t,index) => (
              <li key={index}>{t}</li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default App
