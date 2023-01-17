import React from 'react'
import Card from '../components/Card';
import Footer from '../includes/Footer';

const Cards = () => {
  return (
    <div className='section-1'>
      <div className="cards-wrapper">
            <Card classname="todo-card-done" is_done={true} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            <Card classname="todo-card" content="Lorem ipsum dolor sit amet" />
            <Card classname="todo-card" content="Lorem ipsum dolor sit amet" />
      </div>
      <Footer items_left={2} />
    </div>
  )
}

export default Cards
