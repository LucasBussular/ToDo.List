import React from 'react'
import { CSSTransition } from 'react-transition-group'
import '../Style/button.css'

export default function NewTask(props) {

    const { handleSubmit, handleChange, addTask, isValid } = props

    return (
        <>
        <h1 className='main-title'>TaskList.</h1>
        <form onSubmit={handleSubmit}>
            <input
                placeholder='New Task'                
                name="title"
                value={addTask.title || ''}
                onChange={handleChange}
            />
            {
            !addTask.title ? null : (
                <>
                <textarea
                    name='description'
                    placeholder='description'
                    value={addTask.description}
                    onChange={handleChange}
                />
                <CSSTransition
                    in={isValid}
                    timeout={4000}
                    classNames="transition"
                    appear={true}
                >
                    <button type="submit">Add Task</button>
                </CSSTransition>
            </>
            )}
        </form>
        </>
    )
}