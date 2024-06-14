import React, { useState } from 'react'
import { PencilSquareIcon, TrashIcon, CheckCircleIcon, enterEditMode } from '@heroicons/react/16/solid'

import './task.css'


const TaskItem = ({ task, completeTask, handleDeleteTask, handleEnterEditMode }) => {


    const [isChecked, setIsChecked] = useState(task.completed);

    const handleCompleteTask = (e) => {
        setIsChecked(!isChecked);
        completeTask(task.id);
    }

    return (

        <div className={task.completed ? ' item done' : 'taskUndone item'}>
            <div className='task' onClick={handleCompleteTask}>
                <CheckCircleIcon widths={24} height={24} className={task.completed ? 'checkIcon checked ' : 'checkIcon notChecked '} />
                <span style={{ 'textDecorationLine': task.completed ? 'line-through' : 'none' }}  > {task.content} </span>
            </div>
            <div className="edittingIcons">
                <button className='edit' onClick={handleEnterEditMode}>
                    <PencilSquareIcon widths={24} height={24} className="editIcon Icon" />
                </button>
                <button className='delete' onClick={handleDeleteTask} >
                    <TrashIcon widths={24} height={24} className="trashIcon Icon" />
                </button>
            </div>

        </div>

    )
}
export default TaskItem