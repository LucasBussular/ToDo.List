import './App.css';
import NewTask from './Components/NewTask';
import TaskList from './Components/TaskList';
import { useState } from 'react';
import './Style/index.css'
import Todolist from '../src/Icons/todolist.png'

function App() {

  const [addTask, setAddTask] = useState({})
  const [isValid, setIsValid] = useState(false)

  function handleChange ({target}) {
    const {name, value} = target
    setAddTask(prev => ({...prev, id: Date.now(), [name]: value}))
    setIsValid( value=> value !== '') 
  }

  const [taskList, setTaskList] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    if (!addTask.title) return;

    setTaskList(prev => [addTask, ...prev])
    console.log(addTask)
    setAddTask({})
  }

  function handleDelete(taskIdTotRemove) {
    setTaskList(prev => prev.filter(task => task.id !== taskIdTotRemove))
  }

  return (
    <>
      <NewTask
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        addTask={addTask}
        isValid={isValid}
      />
      <TaskList
        handleDelete={handleDelete}
        taskList={taskList}
      />
      <img className='main-image' src={Todolist}/>
    </>
  );
}

export default App;
