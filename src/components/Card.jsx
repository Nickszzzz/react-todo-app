import React from 'react'
import { TrashIcon, StopIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Card = ({classname, is_done, content, deleteTask, id, toggleTask}) => {
  return (
    <>
      <div className={`${classname}`}>
        <div className="icons">
          
        <button onClick={() => toggleTask(id)}> 
          { 
            is_done 
            ? <CheckCircleIcon className={`icon`} /> 
            : <StopIcon className={`icon`} /> }
        </button>
          
          <button onClick={() => deleteTask(id)}><TrashIcon className={`icon-danger`} /></button>
        </div>
        <h2 className={`content`}>{content}</h2>
      </div>
    </>
  )
}

export default Card
