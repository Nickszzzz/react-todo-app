import React from 'react'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'


export const Header = () => {
  return (
    <div>
      <h1 className="title">todos</h1>
      <div className='add-todo-input-wrapper'>
        <BarsArrowDownIcon className="add-todo-input-icon"/>
        <input type="text" class="new-todo " placeholder='What needs to be done?' autoFocus />
      </div>
    </div>
  )
}

