import React from 'react';
import Cards from '../components/Cards';
import Navigation from '../components/Navigation';

export const Section = () => {
  return (
    <>
       <div className="flex flex-row gap-1">
            <Cards />
            <Navigation />
       </div>
    </>
  )
}
