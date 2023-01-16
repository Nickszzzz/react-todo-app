import React from 'react'
import Card from '../components/Card';

const Cards = () => {
  return (
    <div className='basis-11/12'>
      <div className="flex gap-3 flex-wrap mt-6  ">
            <Card color="sky" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            <Card color="purple" content="Lorem ipsum dolor sit amet" />
            <Card color="purple" content="Lorem ipsum dolor sit amet" />
        </div>
    </div>
  )
}

export default Cards
