import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TasksList = ({ list, completeTask, deleteTask, enterEditMode }) => {


    return (
        <ul>
            {list.sort((a, b) => a.completed - b.completed).map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    handleDeleteTask={() => { deleteTask(task.id) }}
                    handleEnterEditMode={() => { enterEditMode(task) }}



                />))}
        </ul>
    )
}
export default TasksList 