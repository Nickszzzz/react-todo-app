import React from 'react'
import { TrashIcon, StopIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Card = ({classname, is_done, content}) => {
  return (
    <>
      <div className={`${classname}`}>
        <div className="icons">
          
          { is_done ? <button><CheckCircleIcon className={`icon`} /></button> : <button><StopIcon className={`icon`} /></button> }
          
          <button><TrashIcon className={`icon-danger`} /></button>
        </div>
        <h2 className={`content`}>{content}</h2>
      </div>
    </>
  )
}

export default Card
