import React from 'react'
import Card from '../components/Card';
import Footer from '../includes/Footer';
import { useState, useEffect } from 'react';

const Cards = (props) => {

  const isCompleteAll = props.is_complete_all ? 'done' : '';
  const [itemLeft, setItemLeft] = useState(0);
  const todos = [
    {
      className: `todo-card ${isCompleteAll}`,
      is_done: props.is_complete_all,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      className: `todo-card ${isCompleteAll}`,
      is_done: props.is_complete_all,
      content: "Adipiscing elit",
    },
    {
      className: `todo-card ${isCompleteAll}`,
      is_done: props.is_complete_all,
      content: "Lorem ipsum dolor sit amet",
    }
  ];

  useEffect(() => {
    var item_left = 0;
    for(let i in todos) {
      if(todos[i].is_done) 
        item_left++;
    }

    setItemLeft(item_left);
    
  });

  return (
    <div className='section-1'>
      <div className="cards-wrapper">
            {/* <Card classname={`todo-card ${isCompleteAll} `} is_done={props.is_complete_all} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            <Card classname={`todo-card ${isCompleteAll} `} is_done={props.is_complete_all} content="Lorem ipsum dolor sit amet" />
            <Card classname={`todo-card ${isCompleteAll} `} is_done={props.is_complete_all} content="Lorem ipsum dolor sit amet" /> */}

            {
              todos.map((todo, index) =>
                <Card classname={todo.className} is_done={todo.is_done} content={todo.content} />
              )
            }
      </div>
      <Footer items_left={itemLeft} />
    </div>
  )
}

export default Cards
