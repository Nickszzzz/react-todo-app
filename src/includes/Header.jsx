import React, { useState } from 'react'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'

export const Header = ({setCompleteAll, addTask}) => {

  const [task, setTask] = useState();
  const handleCompleAll = e => {
    // props.onSubmit(true);

    setCompleteAll(true);
  }

  const handleAddTask = () => {
    if(task !== "") {
       addTask({
        name: task,
        checked: false,
        id: Date.now(),
        checkedAll: false
      });
    }

    setTask("");
  }


  return (
    <div>
      <h1 className="title">todos</h1>
      <div className='add-todo-input-wrapper'>
        <BarsArrowDownIcon onClick={handleCompleAll} className="add-todo-input-icon"/>
        <input type="text" value={task} onInput={ (e) => setTask(e.target.value)} onKeyPress={e => { if(e.key === 'Enter'){handleAddTask()}}} class="new-todo " placeholder='What needs to be done?' autoFocus />
      </div>
    </div>
  )
}

