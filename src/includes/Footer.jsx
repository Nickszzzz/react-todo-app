import React from 'react'
import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const Footer = (props) => {

  const num_range = 2;
  var start = 0;
  var end = start+num_range;

  const handleStart = e => {
    // props.onSubmit(range)
    console.log('====================================');
    console.log(start);
    console.log(end);
    console.log(start >= 0);
    console.log('====================================');

    if(start >= 0)
    {
      start -= num_range;
      end = start-num_range;
    }
  }

  const handleEnd = e => {
      
    // props.onSubmit([start, end]);

    console.log('====================================');
    console.log(start);
    console.log(end);
    console.log(end < props.items_left);
    console.log('====================================');

    if(end < props.items_left)
    {
      start += num_range;
      end = start+num_range;
    }
  }

  return (
    <div className='footer-wrapper'>
      <span className='content'>{props.items_left} {props.items_left > 0 ? 'items' : 'item'} left</span>
      <div className="icon-wrapper">
        <BackwardIcon  className={`icon disabled`} onClick={handleStart} />
        <ForwardIcon  className={`icon`} onClick={handleEnd} />
      </div>
    </div>
  )
}

export default Footer
