import React from 'react'
import { RectangleStackIcon, BanknotesIcon, BeakerIcon, CakeIcon } from '@heroicons/react/24/solid'
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='basis-1/12 mt-6 p-2 bg-blue-100'>
      <ul className='flex flex-col gap-3 toolbar'>
        <li>
            <button title='All'>
                <RectangleStackIcon  className={`h-4 w-4 text-blue-600 font-bold `} /> 
            </button>
        </li>
        <li>
            <button title='Active'>
                <BanknotesIcon  className={`h-4 w-4 text-blue-600 font-bold `} /> 
            </button>
        </li>
        <li>
            <button title='Completed'>
                <BeakerIcon  className={`h-4 w-4 text-blue-600 font-bold `} /> 
            </button>
        </li>
        <li>
            <button title='Clear Completed'>
                <CakeIcon className={`h-4 w-4 text-blue-600 font-bold `} /> 
            </button>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
