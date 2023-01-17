import React from 'react'
import { Square3Stack3DIcon, FolderMinusIcon, ClipboardDocumentCheckIcon, SignalIcon } from '@heroicons/react/24/solid'

const Navigation = () => {
  return (
    <div className='navigation-wrapper' >
      <ul className='lists'>
        <li className='active item'>
            <Square3Stack3DIcon  className={`icon`} />
            <span className='content'>All</span>
        </li>
        <li className='item'>
            <SignalIcon  className={`icon`} />
            <span className='content'>Active</span>
        </li>
        <li className='item'>
          <ClipboardDocumentCheckIcon  className={`icon`} />
          <span className='content'>Completed</span>
        </li>
        <li className='item'>
          <FolderMinusIcon  className={`icon`} />
          <span className='content'>Clear Completed</span>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
