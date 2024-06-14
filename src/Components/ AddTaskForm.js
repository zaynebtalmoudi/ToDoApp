import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/16/solid'
import './ addTaskForm.css'


const AddTaskForm = ({ addTask }) => {

    const [taskContent, setTaskContent] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addTask({
            id: Date.now(),
            content: taskContent,
            completed: false
        });
        setTaskContent('')

    }
    return (
        <form
            className="todo"
            onSubmit={handleFormSubmit}
        >
            <div className="add-task-input">
                <input
                    type='text'
                    id='task'
                    className="input"
                    value={taskContent}
                    onChange={(e) => setTaskContent(e.target.value)}
                    placeholder="Enter Task"
                    required
                />

            </div>
            <button
                className="btn"
                aria-label="Add Task"
                type="submit"
            >
                <PlusIcon className='plusIcon' strokeWidth={1.2} />
            </button>

        </form>
    )
}
export default AddTaskForm