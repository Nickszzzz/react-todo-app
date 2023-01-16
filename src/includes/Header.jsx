import React from 'react'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'


export const Header = () => {
  return (
    <div>
      <h1 className="text-sky-200 text-8xl text-center mt-20 ">todos</h1>
      <div className='border border-sky-200 shadow-lg shadow-sky-200/30 flex flex-row mt-8'>
      <BarsArrowDownIcon className="h-6 w-6 text-sky-500 m-4 "/>
      <input type="text" class="new-todo w-full p-3 focus:outline-none focus-visible:none" placeholder='What needs to be done?' autoFocus />
      </div>
    </div>
  )
}

