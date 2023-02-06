import "./App.css";
import { Header } from "./includes/Header";
import { Section } from "./includes/Section";
import { useState } from "react";

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [isCompleteAll, setIsCompleteAll] = useState(false)

  const setCompleteAll = (set) => {
    setTasks(prevState => prevState.map(t => (
      {...t, checked: true }
    )));
  }

  const addTask = (task) => {
    setTasks(prevState => [
      ...prevState, task
    ]);

    tasks.slice().reverse();
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id ? {...t, checked: !t.checked }
      : t
    )));
  }

  return (
    <div className="todo">
      <Header setCompleteAll={setCompleteAll} addTask={addTask} />
      <Section 
        tasks={tasks} 
        is_complete_all = {isCompleteAll} 
        deleteTask={deleteTask}
        toggleTask = {toggleTask}
      />
    </ div>
  );
}
