import React from 'react';
import Cards from '../components/Cards';
import Navigation from '../components/Navigation';

export const Section = (props) => {
  return (
    <>
       <div className={`section-wrapper`}>
            <Cards is_complete_all = {props.is_complete_all}/>
            <Navigation />
       </div>
    </>
  )
}
