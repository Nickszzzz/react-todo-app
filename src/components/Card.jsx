import React from 'react'
import "./Card.css";
import { TrashIcon } from '@heroicons/react/24/solid';

const Card = ({color, content}) => {
  return (
    <>
      <div className={`h-full w-full bg-blue-600 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-90 border border-gray-100 justify-between shadow-lg shadow-blue-600/30 align-center gap-3 px-4 py-2 flex w-full`}>
        <div className="flex justify-between order-2 flex-col p-1 gap-3">
          <button className="rounded-none w-4 h-4 border border-slate-300"></button>
          <button><TrashIcon className={`h-4 w-4 text-white font-bold `} /></button>
        </div>
        <h2 className={`text-white font-regular py-2`}>{content}</h2>
      </div>
    </>
  )
}

export default Card
