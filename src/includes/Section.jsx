import React from 'react';
import Cards from '../components/Cards';
import Navigation from '../components/Navigation';

export const Section = ({is_complete_all, tasks, deleteTask, toggleTask}) => {
  return (
    <>
       <div className={`section-wrapper`}>
            <Cards 
            is_complete_all = {is_complete_all} 
            tasks={tasks} 
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            />
            <Navigation />
       </div>
    </>
  )
}
