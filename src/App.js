
import './App.css';
import React, { useState, useEffect } from 'react';
import AddTaskForm from './Components/ AddTaskForm';
import TasksList from './Components/TasksList';
import EditForm from './Components/EditForm';
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task])
  }

  const completeTask = (id) => {
    setTasks(prevTasks => {
      return prevTasks.map((task) => { return task.id === id ? { ...task, completed: !task.completed } : task })
    })
  }
  const deleteTask = (id) => {
    alert('Delete this task')
    setTasks(prevTasks => {
      return prevTasks.filter(task => {
        return (task.id !== id)
      })
    })

  }
  const updateTask = (task) => {
    setTasks(prevTasks => prevTasks.map(t => (
      t.id === task.id
        ? { ...t, content: task.content }
        : t))
    )
    closeEditMode();
  }
  const closeEditMode = () => {
    setIsEditing(false)
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement);
  }

  const [congratsMsg, setCongratsMsg] = useState('')


  useEffect(() => {
    if (tasks.length === 0) { setCongratsMsg('') }

    else if (tasks.filter(t => t.completed === true).length === tasks.length) {

      setCongratsMsg(' Tasks completed')
    }
    else { setCongratsMsg('') }
  }
    , [tasks])

  // const popMsg = setTimeout(function () {
  //   setCongratsMsg('');
  // }, 3000);

  // if (!congratsMsg) {
  //   clearTimeout(popMsg);
  // }

  return (
    <div className='App'>
      <div className="container">
        <header>
          <h1>My Tasks List</h1>
        </header>

        < AddTaskForm addTask={addTask} />
        {isEditing &&
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
          />
        }

        {
          congratsMsg &&
          <div className='pop-message'>
            <img src={require('./image/congratulation.png')} alt='congrats' />
            <span className='msg'>  {congratsMsg}</span>

          </div>
        }

        {
          tasks &&
          <>

            <TasksList
              list={tasks}
              completeTask={completeTask}
              deleteTask={deleteTask}
              enterEditMode={enterEditMode}
            />
          </>
        }
      </div>
    </div>
  );
}

export default App;
