import React from 'react'
import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid'

const Footer = ({items_left}) => {
  return (
    <div className='footer-wrapper'>
      <span className='content'>{items_left} items left</span>
      <div className="icon-wrapper">
        <BackwardIcon  className={`icon disabled`} />
        <ForwardIcon  className={`icon`} />
      </div>
    </div>
  )
}

export default Footer
