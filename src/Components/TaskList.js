import React from 'react'
// import { CSSTransition } from 'react-trasition-group'
import deleteIcon from '../Icons/delete.svg'

export default function TaskList (props) {
      
    const { handleDelete, taskList } = props

    return (
        <ul>
            {taskList.map( ({title, description, id}) => 
            <li key={id}>
                <div>
                    <h2>{title}</h2>
                    <button onClick={() => handleDelete(id)}>
                        <img src={deleteIcon}/>
                    </button>                    
                </div>
                {!description ? null : <p>{description}</p> }
            </li>
            )}
        </ul>
    )
}