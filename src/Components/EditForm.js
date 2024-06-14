import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/16/solid'
import './edit.css'


const EditForm = ({ editedTask, updateTask }) => {

    const [updatedTaskContent, setUpdatedTaskContent] = useState(editedTask.content)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        updateTask({ ...editedTask, content: updatedTaskContent })
    }
    return (
        <form
            className="edit-form"
            onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                <input
                    type='text'
                    id='task'
                    className="edit-input"
                    value={updatedTaskContent}
                    onChange={(e) => setUpdatedTaskContent(e.target.value)}
                    placeholder="Update Task"
                    required
                />

            </div>
            <button
                className="edit-btn"
                aria-label="Add Task"
                type="submit"
            >
                < CheckIcon className='edit-plusIcon' strokeWidth={1.2} />
            </button>

        </form>
    )
}
export default EditForm