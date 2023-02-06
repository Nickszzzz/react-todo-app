import React from 'react'
import Card from '../components/Card';
import Footer from '../includes/Footer';
import { useState, useEffect } from 'react';

const Cards = ({is_complete_all, tasks, deleteTask, toggleTask}) => {

  const isCompleteAll = is_complete_all ? 'done' : '';
  const [itemLeft, setItemLeft] = useState(0);
  
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const handleRange = range => {
    setStart(range[0]);
    setEnd(range[1]);
  }

  // useEffect(() => {
  //   var item_left = 0;
  //   for(let i in todos) {
  //     if(!todos[i].is_done) 
  //       item_left++;
  //   }
  //   setItemLeft(item_left);
  // });
  

  return (
    <div className='section-1'>
      <div className="cards-wrapper">
            {
              tasks.sort((a, b) => b.id - a.id).map((task, index) =>
                {if(index >= start && index <= end) {
                  return (<Card 
                    classname={`todo-card ${isCompleteAll} ${task.checked ? 'done' : ''}`} 
                    is_done={task.checked} 
                    content={task.name} 
                    deleteTask={deleteTask}
                    id={task.id}
                    toggleTask={toggleTask}
                    />);
                }}
              )
            }
      </div>
      <Footer items_left={tasks.length} onSubmit={handleRange} />
    </div>
  )
}

export default Cards

